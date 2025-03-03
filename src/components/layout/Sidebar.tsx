import { Link } from "react-router"
import { Button } from "../ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Separator } from "../ui/separator"

export const Sidebar = () => {
  const categories = [
    { name: 'Fiction', count: 12 },
    { name: 'Fantasy', count: 8 },
    { name: 'Sci-Fi', count: 6 },
    { name: 'Romance', count: 5 },
    { name: 'Mystery', count: 7 },
  ]

  const recentPosts = [
    { id: '1', title: 'The Forgotten Garden', date: 'March 1, 2025' },
    { id: '2', title: 'Whispers in the Dark', date: 'February 20, 2025' },
    { id: '3', title: 'Beyond the Horizon', date: 'February 5, 2025' },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>About the Author</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center mb-4">
            <img src="https://picsum.photos/id/237/150/150" alt="Author profile" className="rounder-full w-24 h-24 object-cover mb-4" />
            <h3 className="font-medium text-lg">Jane Smith</h3>
            <p className="text-muted-foreground text-sm text-center"> Novelist and short story writer explorign human connections</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild variant="outline" className="w-full">
            <Link to="/about">Read More</Link>
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle>
            Categories
          </CardTitle>
          <CardContent>
            <div className="space-y-2">
              {categories.map(category => (
                <div key={category.name} className="flex justify-between items-center">
                  <Link to={`/category/${category.name.toLowerCase()}`}>
                    {category.name}
                  </Link>
                  <span className="text-muted-foreground text-sm bg-muted px-2 py-0.5 rounded-full">
                    {category.count}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle>
            Recent Stories
          </CardTitle>
          <CardContent>
            <div className="space-y-2">
              {recentPosts.map(post => (
                <div key={post.id}>
                  <Link to={`/post/${post.id}`}>
                    {post.title}
                  </Link>
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                  {post.id !== recentPosts[recentPosts.length -1].id && (
                  <Separator className="mt-2" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild variant="ghost" className="w-full">
              <Link to="/archive">View All</Link>
            </Button>
          </CardFooter>
        </CardHeader>
      </Card>

    </div>
  )

}
