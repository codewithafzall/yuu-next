// pages/blog/index.js
import Head from "next/head";
import posts from "../../src/components/Blogs/posts";
import BlogSlider from "../../src/components/Blogs/BlogSlider";
import BlogCard from "../../src/components/Blogs/BlogCard";

export default function BlogListPage() {
  return (
    <>
      <Head>
        <title>Blogs | YUU by Nahar</title>
        <meta
          name="description"
          content="Read the latest blogs from YUU by Nahar."
        />
      </Head>

      <main className="min-h-screen bg-white dark:bg-gray-900 pt-20 text-gray-900 dark:text-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
          <header className="mb-8 text-center">
            <h1 className="mb-4">Blogs</h1>
            <p className="text-gray-600 dark:text-gray-300">
              Explore our latest updates, stories, and insights.
            </p>
          </header>
          <section className="mt-10 grid gap-6 grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </section>
         
        </div>
      </main>
    </>
  );
}
