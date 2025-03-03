import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowRight, BookOpen, Calendar, ChevronRight, Clock } from 'lucide-react'
import { Link } from 'react-router'

const featuredPost = {
  id: 'the-last-light',
  title: 'The Last Light on the Horizon',
  exerpt: 'As the sun dipped below the edge of the world, casting a long shadow across the weathered planks of the old pier, Eliza stood motionless, watching the last shimmer of a golden light dance across the warer\'s surface...',
  coverImage: 'https://picsum.photos/1000/500',
  date: new Date().toLocaleDateString(),
  readingTime: '12 min',
  category: 'Short Story',
  tags: ['Fiction', 'Drama', 'Ocean']

}

const recentPosts = [
  {
    id: 'whispers-in-shadows',
    title: 'Whispers in the Shadows',
    exerpt: 'The old Victorian house had stories to tell, if only someone would listen. Behind its peeling wallpaper and creacking floorboards...',
    coverImage: 'https://picsum.photos/400/250',
    date: 'February 27, 2025',
    readingTime: '8 min',
    category: 'Short Story',
    tags: ['Mystery', 'Horror']
  },
  {
    id: 'beyond-the-stars',
    title: 'Beyond the Stars',
    exerpt: 'Captain Elara Reed adjusted the navigation controls of her ship, the Celestial Voyager. The unfamiliar start system loomed ahead...',
    coverImage: 'https://picsum.photos/400/250',
    date: 'February 20, 2025',
    readingTime: '15 min',
    category: 'Short Story',
    tags: ['Sci-Fi', 'Adventure']
  },
  {
    id: 'the-forgotten-garden',
    title: 'The Forgotten Garden',
    exerpt: 'Hidden behind a wall of ivy and thorns, the garden had remained undisturbed for decades. Until today, when Emily discovered a rusty key...',
    coverImage: 'https://picsum.photos/400/250',
    date: 'February 12, 2025',
    readingTime: '10 min',
    category: 'Short Story',
    tags: ['Fantasy', 'Mystery']
  },
  {
    id: 'memories-of-tomorrow',
    title: 'Memories of Tomorrow',
    exerpt: 'The machine hummed softly as Dr. Kaplan made the final adjustments. "Just relax," she  told me. "Soon you\'ll remember everything about your future...',
    coverImage: 'https://picsum.photos/400/250',
    date: 'February 5, 2025',
    readingTime: '9 min',
    category: 'Short Story',
    tags: ['Sci-Fi', 'Drama']
  }
]

const bookExerpts = [
  {
    id: 'the-midnight-chronicles-1',
    title: 'The Midnight Chronicles: Awakening',
    exerpt: 'Chapter One: The dreams always began the same way. A forest shrouded in mist, the smell of pine and damp earth, and the unmistakable sensation of being watched...',
    coverImage: 'https://picsum.photos/id/237/400/250',
    date: 'February 15, 2025',
    readingTime: '20 min',
    progress: '75% complete',
    tags: ['Fantasy', 'Series']
  },
  {
    id: 'echoes-of-eternity',
    title: 'Echoes of Eternity',
    exerpt: 'The clock tower chimed thirteen times. Impossible, thought Evangeline, yet she had counted each resonant toll with growing disbelief. In twenty-seven years living in the shadow of St. Mary\'s Cathedral...',
    coverImage: 'https://picsum.photos/id/237/400/250',
    date: 'January 30, 2025',
    readingTime: '18 min',
    progress: '20% complete',
    tags: ['magical Realism', 'Historical']
  },
]

export const HomePage = () => {
  return (
    <div className="space-y-12">
      <section>
        <div className="relative rounded-xl overflow-hidden group">
          <img src={featuredPost.coverImage} alt={featuredPost.title} className="w-full-h-80 object-cover transform transition-transform duration-500 group-hover:scale-105" />
          <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent'>
            <div className='absolute bottom-0 left-0 p-6 text-white'>
              <div className='space-y-2'>
                <Badge variant="secondary" className='mb-2'>Featured</Badge>
                <h1 className='text-3xl md:text-4xl font-serif font-bold'>{featuredPost.title}</h1>
                <p className='text-white/80 line-clamp-2 md:line-clamp-3 max-w-2xl'>
                  {featuredPost.exerpt}
                </p>
                <div className='flex items-center space-x-4 text-sm text-white/60 pt-2'>
                  <span className='flex items-center'>
                    <Calendar className="mr-1 h-4 w-4" />
                    {featuredPost.date}
                  </span>
                  <span className='flex items-center'>
                    {featuredPost.readingTime}
                  </span>
                  <Badge variant="outline" className='text-white border-white/3-'>
                    {featuredPost.category}
                  </Badge>
                </div>
                <Button asChild variant="secondary" className="mt-4">
                  <Link to={`/post/${featuredPost.id}`}>
                    Read Story
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Tabs defaultValue='recent'>
          <div className='flex justify-between items-center mb-6'>
            <TabsList>
              <TabsTrigger value='recent'>Recent Stories</TabsTrigger>
              <TabsTrigger value='books'>Book Exerpts</TabsTrigger>
            </TabsList>
            <Link to="/archive" className='text-sm text-muted-foreground hover:text-foreground flex items-center'>
              View All
              <ArrowRight className='ml-1 h-4 w-4' />
            </Link>
          </div>

          <TabsContent value="recent" className='space-y-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {recentPosts.map(post => (
                <div key={post.id} className='group'>
                  <Link to={`/post/${post.id}`} className='block space-y-3'>
                    <div className='overflow-hidden rounded-lg'>
                      <img src={post.coverImage} alt={post.title} className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    <div>
                      <div className='flex items-center space-x-2 text-sm text-muted-foreground mb-2'>
                        <Badge variant="outline">{post.category}</Badge>
                        <span>.</span>
                        <span className='flex items-center'>
                          <Calendar className='mr-1 h-3 w-3' />
                          {post.date}
                        </span>
                        <span>.</span>
                        <span className='flex items-center'>
                          <Clock className='mr-1 h-3 w-3' />
                          {post.readingTime}
                        </span>
                      </div>
                      <h2 className='text-xl font-serif font-medium group-hover:text-primary transition-colors'>
                        {post.title}
                      </h2>
                      <p className='text-muted-foreground line-clamp-2 mt-1'>
                        {post.exerpt}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="books" className='space-y-6'>
            <div className='grid grid-cols-1 gap-6'>
              {bookExerpts.map(book => (
                <div key={book.id} className='border rounded-lg overflow-hidden shadow-sm'>
                  <div className='flex flex-col md:flex-row'>
                    <div className='md:w-1/3 h-56 md:h-auto'>
                      <img src={book.coverImage} alt={book.title} className="w-full h-full object-cover" />
                    </div>
                    <div className='p-6 md:w-2/3 flex flex-col justify-between'>
                      <div>
                        <div className='flex items-center justify-between mb-2'>
                          <Badge className="bg-primary/10 text-primary hober:bg-primary/20 border-none">
                            Book in Progress
                          </Badge>
                          <span className='text-xs text-muted-foreground'>{book.progress}</span>
                        </div>
                        <h2 className='text-xl font-serif font-bold'>{book.title}</h2>
                        <p className='text-muted-foreground line-clamp-3 mt-2'>
                          {book.exerpt}
                        </p>
                      </div>
                      <div className='mt-4 pt-4 border-t flex justify-between items-center'>
                        <div className='flex space-x-2'>
                          {book.tags.map(tag => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Button asChild size="sm">
                          <Link to={`/post/${book.id}`}>
                            Read Excerpt
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section className='bg-muted p-8 rounded-lg text-center'>
        <div className='max-w-xl mx-auto'>
          <BookOpen className='h-10 w-10 mb-4 mx-auto text-primary' />
          <h2 className='text-2xl font-serif font-bold mb-2'>Never Miss a Story</h2>
          <p className='text-muted-foreground mb-6'>
            Subscribe to receive notifications when new stories are published and get updates on my upcoming books.
          </p>
          <div className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2'>
            <Input type='email' placeholder="Your email address" className='flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disable:cursor-not-allowed disabled:opacity-50 flex-1' />
            <Button className='sm:w-auto'>Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
