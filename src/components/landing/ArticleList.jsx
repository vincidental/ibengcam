import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { client, urlFor } from "@/sanity/client";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const ARTICLES_QUERY = `*[_type == "article"] | order(publishedAt desc){
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  author->{name},
  categories[]->{
    title
  }
}`;

function ArticleList() {
  const {
    data: articles,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["articles"],
    queryFn: () => client.fetch(ARTICLES_QUERY),
  });

  if (isLoading)
    return (
      <section id="artikel" className="py-12 bg-gray-50 lg:py-20">
        <div className="flex items-center justify-center">
          <div className="w-8 h-8 border-4 rounded-full border-slate-200 border-t-slate-800 animate-spin"></div>
        </div>
      </section>
    );
  if (error)
    return (
      <p className="py-12 text-center text-red-500">Failed to load articles.</p>
    );

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  if (!articles || articles.length === 0) {
    return null;
  }

  return (
    <section id="artikel" className="py-12 bg-gray-50 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div
          className={`grid gap-8 justify-center ${
            articles?.length === 1
              ? "grid-cols-1 max-w-md mx-auto"
              : articles?.length === 2
                ? "grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto"
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {articles?.map((article, i) => (
            <MotionLink
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              key={article.slug.current}
              to={`/blog/${article.slug.current}`}
              className="flex flex-col overflow-hidden transition-shadow duration-300 bg-white border border-gray-200 shadow-sm rounded-2xl hover:shadow-md group"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                {article.mainImage ? (
                  <img
                    src={urlFor(article.mainImage).width(600).height(375).url()}
                    alt={article.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-102"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200" />
                )}

                {article.categories && article.categories.length > 0 && (
                  <div className="absolute top-4 left-4 flex flex-wrap gap-1.5 max-w-[calc(100%-2rem)]">
                    {article.categories.map((cat, index) => (
                      <span
                        key={cat.title + index}
                        className="px-3 py-1.5 text-xs font-semibold text-white bg-teal-900/90 backdrop-blur-xs rounded-lg whitespace-nowrap"
                      >
                        {cat.title}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Content Body */}
              <div className="flex flex-col flex-1 p-6">
                {/* Date Row with Calendar Icon SVG */}
                <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <time>{formatDate(article.publishedAt)}</time>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors line-clamp-2 group-hover:text-teal-800">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="flex-1 mb-6 text-sm leading-relaxed text-gray-600 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Bottom Interactive Row */}
                <div className="flex items-center gap-2 mt-auto text-sm font-semibold text-teal-800">
                  <span>Pelajari Selengkapnya</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
            </MotionLink>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ArticleList;
