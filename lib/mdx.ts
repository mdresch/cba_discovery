import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"
import rehypePrism from "@mapbox/rehype-prism"
import remarkGfm from "remark-gfm"

export async function getFiles(type: "blog" | "docs") {
  const files = fs.readdirSync(path.join(process.cwd(), "content", type))
  return files.filter((file) => file.endsWith(".mdx"))
}

export async function getFileBySlug(type: "blog" | "docs", slug: string) {
  const source = fs.readFileSync(path.join(process.cwd(), "content", type, `${slug}.mdx`), "utf8")

  const { data, content } = matter(source)
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePrism],
    },
    scope: data,
  })

  return {
    mdxSource,
    frontMatter: {
      slug,
      ...data,
    },
  }
}

export async function getAllFilesMetadata(type: "blog" | "docs") {
  const files = fs.readdirSync(path.join(process.cwd(), "content", type))

  return files.reduce((allPosts: any[], postSlug: string) => {
    const source = fs.readFileSync(path.join(process.cwd(), "content", type, postSlug), "utf8")
    const { data } = matter(source)

    return [
      {
        ...data,
        slug: postSlug.replace(".mdx", ""),
      },
      ...allPosts,
    ]
  }, [])
}

