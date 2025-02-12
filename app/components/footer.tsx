import Link from "next/link"
import NewsletterForm from "./newsletter-form"

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">TechCorp</h3>
            <p className="text-gray-600">Innovative solutions for modern businesses</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-800">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/showcase" className="text-gray-600 hover:text-gray-800">
                  Showcase
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-gray-800">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-gray-600 hover:text-gray-800">
                  Docs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-800">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/mission" className="text-gray-600 hover:text-gray-800">
                  Mission
                </Link>
              </li>
              <li>
                <Link href="/vision" className="text-gray-600 hover:text-gray-800">
                  Vision
                </Link>
              </li>
              <li>
                <Link href="/core-values" className="text-gray-600 hover:text-gray-800">
                  Core Values
                </Link>
              </li>
              <li>
                <Link href="/purpose-statement" className="text-gray-600 hover:text-gray-800">
                  Purpose Statement
                </Link>
              </li>
              <li>
                <Link href="/company-history" className="text-gray-600 hover:text-gray-800">
                  Company History
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-gray-800">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-gray-800">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/code-of-conduct" className="text-gray-600 hover:text-gray-800">
                  Code of Conduct
                </Link>
              </li>
              <li>
                <Link href="/ethics" className="text-gray-600 hover:text-gray-800">
                  Ethics
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-600">Email: info@techcorp.com</p>
            <p className="text-gray-600">Phone: (123) 456-7890</p>
            <NewsletterForm />
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">&copy; 2025 TechCorp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

