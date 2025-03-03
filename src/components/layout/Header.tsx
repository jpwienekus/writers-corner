import { Link } from "react-router"
import { Button } from "../ui/button"
import { Menu, Moon, Search, Sun, X } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"

type HeaderProps = {
  isDarkMode: boolean,
  toggleDarkMode: () => void
}

export const Header = ({ isDarkMode, toggleDarkMode }: HeaderProps) => {
  return (
    <header className="border-b bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="flex items-center">

            <Link to="/" className="text-2xl font-serif font-bold">
              The Writer's Corner
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="text-foreground hover:text-foreground/80 font-medium">
              Home
            </Link>
            <Link to="/short-stories" className="text-foreground hover:text-foreground/80 font-medium">
              Short Stories
            </Link>
            <Link to="/book-exerpts" className="text-foreground hover:text-foreground/80 font-medium">
              Book Exerpts
            </Link>
            <Link to="/about" className="text-foreground hover:text-foreground/80 font-medium">
              About
            </Link>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" onClick={() => { }} aria-label="Search">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={toggleDarkMode} aria-label="Search">
                {isDarkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            </div>
          </nav>
          {/* Mobile Navigation */}
          <nav className="flex items-center md:hidden space-x-2">
            <Button variant="ghost" size="icon" onClick={() => { }} aria-label="Search">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleDarkMode} aria-label="Search">
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>

                <DropdownMenuItem>
                  <Link to="/" className="text-foreground hover:text-foreground/80 font-medium" >
                    Home
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/short-stories" className="text-foreground hover:text-foreground/80 font-medium" >
                    Short Stories
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/book-exerpts" className="text-foreground hover:text-foreground/80 font-medium" >
                    Book Exerpts
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/about" className="text-foreground hover:text-foreground/80 font-medium" >
                    About
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </div>

    </header>
  )
}
