import { notFound } from "next/navigation"
import { blogPosts } from "@/app/blog/page"
export default function BlogPost({ params }: { params: { slug: string } }) {


  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <article className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <h2 className="text-lg text-gray-600 mb-6">{post.excerpt}</h2>
        <p className="text-gray-500 mb-6">{post.date}</p>
        <div className="prose max-w-none">
          <p>{post.content}</p>
        </div>
      </article>
    </div>
  )
}

