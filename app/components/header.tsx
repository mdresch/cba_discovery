import Link from "next/link"
import MobileNav from "./mobile-nav"
import ThemeToggle from "./theme-toggle"

export default function Header() {
  return (
    <header className="bg-background shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-foreground">
          TechCorp
        </Link>
        <MobileNav />
        <ul className="hidden lg:flex space-x-4 items-center">
          <li>
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              Home
            </Link>
          </li>
          <li className="relative group">
            <span className="text-muted-foreground hover:text-foreground cursor-pointer">About</span>
            <ul className="absolute left-0 mt-2 space-y-2 bg-background shadow-md rounded-md p-2 hidden group-hover:block">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/mission" className="text-muted-foreground hover:text-foreground block">
                  Mission
                </Link>
              </li>
              <li>
                <Link href="/vision" className="text-muted-foreground hover:text-foreground block">
                  Vision
                </Link>
              </li>
              <li>
                <Link href="/core-values" className="text-muted-foreground hover:text-foreground block">
                  Core Values
                </Link>
              </li>
              <li>
                <Link href="/purpose-statement" className="text-muted-foreground hover:text-foreground block">
                  Purpose Statement
                </Link>
              </li>
              <li>
                <Link href="/company-history" className="text-muted-foreground hover:text-foreground block">
                  Company History
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/showcase" className="text-muted-foreground hover:text-foreground">
              Showcase
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-muted-foreground hover:text-foreground">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/docs" className="text-muted-foreground hover:text-foreground">
              Docs
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </li>
          <li className="relative group">
            <span className="text-muted-foreground hover:text-foreground cursor-pointer">Legal</span>
            <ul className="absolute right-0 mt-2 space-y-2 bg-background shadow-md rounded-md p-2 hidden group-hover:block">
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground block">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground block">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/code-of-conduct" className="text-muted-foreground hover:text-foreground block">
                  Code of Conduct
                </Link>
              </li>
              <li>
                <Link href="/ethics" className="text-muted-foreground hover:text-foreground block">
                  Ethics
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <span className="text-muted-foreground hover:text-foreground cursor-pointer">Account</span>
            <ul className="absolute right-0 mt-2 space-y-2 bg-background shadow-md rounded-md p-2 hidden group-hover:block">
              <li>
                <Link href="/login" className="text-muted-foreground hover:text-foreground block">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-muted-foreground hover:text-foreground block">
                  Sign In
                </Link>
              </li>
              <li>
                <Link href="/account" className="text-muted-foreground hover:text-foreground block">
                  Account
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  )
}

