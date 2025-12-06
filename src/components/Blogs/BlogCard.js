import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ post }) {
  const isLocalTestFile = post.image && post.image.startsWith("/mnt/data");

  return (
    <article className="bg-[#f7f4ec] rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative w-full h-44 desktop:h-72">
              <img
                src={post.image}
                alt={post.title}
                className="object-cover"
              />
        </div>
      </Link>

      <div className="p-4 sm:p-5">
        <h2 className="text-lg sm:text-xl font-semibold leading-snug mb-2">
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h2>

        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <Link
            href={`/blog/${post.slug}`}
            className="cursor-pointer text-[#d06d52] text-sm"
            aria-label={`Know more about ${post.title}`}
          >
            KNOW MORE
          </Link>
          <span className="text-xs text-gray-400" />
        </div>
      </div>
    </article>
  );
}
