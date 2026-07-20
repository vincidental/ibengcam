import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import { client, urlFor } from "@/sanity/client";
import { useEffect } from "react";

const ARTICLE_DETAIL_QUERY = `*[_type == "article" && slug.current == $slug][0]{
  title,
  excerpt,
  mainImage,
  publishedAt,
  body,
  author->{name},
  categories[]->{title}
}`;

const portableTextComponents = {
  types: {
    image: (/** @type {{ value: any }} */ { value }) => {
      if (!value?.asset) return null;
      return (
        <figure className="my-8">
          <img
            src={urlFor(value).width(1200).fit("max").auto("format").url()}
            alt={value.alt || ""}
            loading="lazy"
            className="w-full rounded-xl"
          />
          {value.caption && (
            <figcaption className="mt-2 text-sm text-center text-gray-500">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

function ArticleDetail() {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [slug]);

  const {
    data: article,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["article", slug],
    queryFn: () => client.fetch(ARTICLE_DETAIL_QUERY, { slug }),
    enabled: !!slug,
  });

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="w-8 h-8 border-4 rounded-full border-slate-200 border-t-slate-800 animate-spin"></div>
      </div>
    );
  if (error || !article) {
    return (
      <div className="py-20 text-center">
        <p className="mb-4 text-red-500">Artikel tidak ditemukan.</p>
        <Link to="/" className="font-semibold text-teal-800 hover:underline">
          &larr; Kembali ke Beranda
        </Link>
      </div>
    );
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <article className="min-h-screen py-12 bg-white lg:py-20">
      <div className="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 mb-8 text-sm font-semibold text-gray-500 transition-colors hover:text-teal-800 group"
        >
          <svg
            className="w-4 h-4 transition-transform group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Kembali ke Beranda
        </Link>

        {article.categories && article.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {article.categories.map((cat, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-semibold text-teal-900 border border-teal-200 rounded-lg bg-teal-50"
              >
                {cat.title}
              </span>
            ))}
          </div>
        )}

        <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
          {article.title}
        </h1>

        <div className="flex items-center gap-3 pb-6 mb-8 text-sm text-gray-500 border-b border-gray-100">
          <span className="font-medium text-gray-700">
            {article.author?.name || "Anonim"}
          </span>
          <span className="text-gray-300">•</span>
          <time>{formatDate(article.publishedAt)}</time>
        </div>

        {article.mainImage && (
          <div className="mb-10 overflow-hidden rounded-2xl aspect-[16/9] bg-gray-100">
            <img
              src={urlFor(article.mainImage).width(1200).height(675).url()}
              alt={article.title}
              className="object-cover w-full h-full"
            />
          </div>
        )}

        <div className="leading-relaxed prose text-gray-800 prose-teal max-w-none prose-headings:font-bold prose-p:mb-4">
          <PortableText
            value={article.body}
            components={portableTextComponents}
          />
        </div>
      </div>
    </article>
  );
}

export default ArticleDetail;
