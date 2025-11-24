// pages/blog/[slug].js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import posts from "../../src/components/Blogs/posts";

export default function BlogDetailPage({ post }) {
    if (!post) {
        return (
            <main className="min-h-screen flex items-center justify-center p-8">
                <div className="max-w-2xl text-center">
                    <h2 className="text-2xl font-semibold mb-3">Post not found</h2>
                    <p className="text-gray-600 mb-6">
                        We couldn&apos;t find the blog you were looking for.
                    </p>
                    <Link href="/" className="inline-block px-4 py-2 rounded bg-indigo-600 text-white">
                        Go home
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <>
            <Head>
                <title>{post.metaTitle || post.title}</title>
                <meta name="description" content={post.metaDescription || post.excerpt} />
            </Head>

            <main className="min-h-screen pt-20 desktop:pt-24 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
                <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
                    <article>
                        <h2 className="mb-4 text-4xl desktop:text-5xl">
                            {post.title}
                        </h2>

                        {/* Image */}
                        {post.image ? (
                            <div className="w-full h-[300px] relative mb-6 rounded-lg overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, 80vw"
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        ) : null}

                        {/* Excerpt */}
                        {post.excerpt && (
                            <p className="text-[#d06d52] mb-6">
                                {post.excerpt}
                            </p>
                        )}

                        {/* Content */}
                        <div className="prose prose-lg max-w-none dark:prose-invert prose-p:leading-relaxed prose-p:mb-5 prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-3xl prose-h2:font-semibold prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-2xl prose-h3:font-semibold prose-strong:text-gray-900 dark:prose-strong:text-white prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-ul:my-5 prose-ol:my-5 prose-li:my-2 prose-blockquote:border-l-4 prose-blockquote:border-gray-300 dark:prose-blockquote:border-gray-700 prose-blockquote:pl-4 prose-blockquote:italic prose-img:rounded-2xl prose-img:shadow-md prose-img:my-8" dangerouslySetInnerHTML={{ __html: post.content }} />

                        {/* Back */}
                        <div className="mt-8">
                            <Link
                                href="/blog"
                                className="drop-shadow-xl text-[#d06d52] cursor-pointer shadow-sm shadow-white bg-[#f7f4ed] rounded-full px-6 py-2 uppercase text-sm"
                            >
                                Back to Blog
                            </Link>
                        </div>
                    </article>
                </div>
            </main>
        </>
    );
}

/**
 * Static generation for ALL blog pages
 */
export async function getStaticPaths() {
    return {
        paths: posts.map((p) => ({
            params: { slug: p.slug },
        })),
        fallback: false, // any slug not in posts -> 404
    };
}

export async function getStaticProps({ params }) {
    const post = posts.find((p) => p.slug === params.slug) || null;

    return {
        props: { post },
    };
}
