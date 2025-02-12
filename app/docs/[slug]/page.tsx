import { notFound } from "next/navigation"
import Link from "next/link"

const docs = {
  installation: {
    title: "Installation Guide",
    category: "Getting Started",
    content: `
      # Installation Guide

      This guide will walk you through the process of installing our software on your system.

      ## System Requirements

      - Operating System: Windows 10, macOS 10.15+, or Linux (Ubuntu 20.04+)
      - RAM: 8GB minimum, 16GB recommended
      - Storage: 10GB of free space

      ## Step 1: Download the Installer

      Visit our official website and download the installer for your operating system.

      ## Step 2: Run the Installer

      Double-click the downloaded file to start the installation process. Follow the on-screen instructions to complete the installation.

      ## Step 3: Verify the Installation

      Open a terminal or command prompt and run the following command to verify that the software has been installed correctly:

      \`\`\`
      techcorp --version
      \`\`\`

      If you see the version number, congratulations! You've successfully installed our software.
    `,
  },
  "architecture-overview": {
    title: "Architecture Overview",
    category: "Core Concepts",
    content: `
      # Architecture Overview

      Our software is built on a modern, scalable architecture designed to meet the needs of businesses of all sizes.

      ## Key Components

      1. **Frontend**: React-based single-page application
      2. **Backend API**: Node.js with Express
      3. **Database**: PostgreSQL for relational data, MongoDB for document storage
      4. **Caching**: Redis for high-performance data caching
      5. **Message Queue**: RabbitMQ for asynchronous task processing

      ## System Diagram

      [Insert system diagram here]

      ## Scalability

      Our architecture is designed to scale horizontally, allowing you to add more resources as your needs grow.
    `,
  },
  "performance-optimization": {
    title: "Performance Optimization",
    category: "Advanced Topics",
    content: `
      # Performance Optimization

      Optimizing the performance of your application is crucial for providing a great user experience and managing resources efficiently.

      ## Frontend Optimization

      1. **Code Splitting**: Use dynamic imports to load only the necessary code for each route.
      2. **Lazy Loading**: Implement lazy loading for images and other media.
      3. **Minification**: Minify your JavaScript, CSS, and HTML files.

      ## Backend Optimization

      1. **Caching**: Implement caching at various levels (application, database, CDN).
      2. **Database Indexing**: Properly index your database tables for faster queries.
      3. **Asynchronous Processing**: Use message queues for time-consuming tasks.

      ## Monitoring and Profiling

      Regularly monitor your application's performance and use profiling tools to identify bottlenecks.
    `,
  },
}

export default function DocPage({ params }: { params: { slug: string } }) {
  const doc = docs[params.slug as keyof typeof docs]

  if (!doc) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <article className="prose lg:prose-xl mx-auto">
        <p className="text-sm text-gray-500 mb-2">
          Category:{" "}
          <Link href="/docs" className="text-blue-600 hover:text-blue-800">
            {doc.category}
          </Link>
        </p>
        <h1>{doc.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: doc.content }} />
      </article>
    </div>
  )
}

export function generateStaticParams() {
  return Object.keys(docs).map((slug) => ({ slug }))
}

