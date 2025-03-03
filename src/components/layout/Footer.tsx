import { Facebook, Instagram, Twitter } from "lucide-react"
import { Link } from "react-router"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

export const Footer = () => {
  return (
    <footer className="bg-muted py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-1">
              About the Author
            </h3>
            <p className="text-muted-foreground mb-4">
              Passionate storyteller exploring themes of identity, adventure and human connection through short stories and novels.
            </p>

            <div className="flex space-x-4">
              <a href="#" aria-label="Instagram" className="text-foreground hover:text-foreground/80">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-foreground hover:text-foreground/80">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-foreground hover:text-foreground/80">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-1">Explore</h3>
            <nav className="flex flex-col mb-4">
              <Link to="/" className="text-muted-foreground hover:text-foreground">
                Home
              </Link>
              <Link to="/short-stories" className="text-muted-foreground hover:text-foreground">
                Short Stories
              </Link>
              <Link to="/book-exerpts" className="text-muted-foreground hover:text-foreground">
                Book Exerpts
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-foreground">
                About the Author
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-1">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to get updates on new stories and book progress.
            </p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Enter your email" className="max-w-xs" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p> c {new Date().getFullYear()} The Writer's Corner. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
