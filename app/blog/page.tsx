import Link from "next/link"

const blogPosts = [
  {
    slug: "future-of-ai-in-business",
    title: "The Future of AI in Business",
    date: "2023-06-01",
    excerpt: "Exploring how AI is transforming various industries...",
  },
  {
    slug: "scaling-infrastructure",
    title: "Scaling Your Infrastructure: Best Practices",
    date: "2023-05-15",
    excerpt: "Learn how to effectively scale your IT infrastructure...",
  },
  {
    slug: "cybersecurity-trends-2023",
    title: "Cybersecurity Trends in 2023",
    date: "2023-04-30",
    excerpt: "Stay ahead of the curve with these emerging cybersecurity trends...",
  },
]

export default function BlogIndex() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">TechCorp Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article key={post.slug} className="bg-card p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">
              <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:text-blue-800">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-500 text-sm mb-2">{post.date}</p>
            <p className="text-gray-600">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:text-blue-800 mt-2 inline-block">
              Read more
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}

