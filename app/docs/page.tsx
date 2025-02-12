import Link from "next/link"

const docCategories = {
  "Getting Started": [
    { slug: "installation", title: "Installation Guide", category: "Getting Started" },
    { slug: "configuration", title: "Configuration", category: "Getting Started" },
    { slug: "quick-start", title: "Quick Start Guide", category: "Getting Started" },
  ],
  "Core Concepts": [
    { slug: "architecture-overview", title: "Architecture Overview", category: "Core Concepts" },
    { slug: "data-models", title: "Data Models", category: "Core Concepts" },
    { slug: "api-reference", title: "API Reference", category: "Core Concepts" },
  ],
  "Advanced Topics": [
    { slug: "performance-optimization", title: "Performance Optimization", category: "Advanced Topics" },
    { slug: "security-best-practices", title: "Security Best Practices", category: "Advanced Topics" },
    { slug: "integrations", title: "Integrations", category: "Advanced Topics" },
  ],
}

export default function DocsIndex() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Documentation</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.entries(docCategories).map(([category, docs]) => (
          <div key={category} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">{category}</h2>
            <ul className="space-y-2">
              {docs.map((doc) => (
                <li key={doc.slug}>
                  <Link href={`/docs/${doc.slug}`} className="text-blue-600 hover:text-blue-800">
                    {doc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

