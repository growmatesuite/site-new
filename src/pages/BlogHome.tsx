import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase, Post, hasSupabase, mockPosts } from '../lib/supabase'
import { Search, Calendar, Clock, User, ArrowRight, Menu, X } from 'lucide-react'

export default function BlogHome() {
  const [posts, setPosts] = useState<Post[]>([])
  const [featuredPost, setFeaturedPost] = useState<Post | null>(null)
  const [categories, setCategories] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [loading, setLoading] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      if (!hasSupabase) {
        let data = [...mockPosts]
        if (selectedCategory) {
          data = data.filter(p => p.category === selectedCategory)
        }
        if (searchTerm) {
          const q = searchTerm.toLowerCase()
          data = data.filter(p =>
            p.title.toLowerCase().includes(q) ||
            p.subtitle.toLowerCase().includes(q) ||
            p.content.toLowerCase().includes(q)
          )
        }
        if (data.length > 0) {
          setFeaturedPost(data[0])
          setPosts(data.slice(1))
          const uniqueCategories = [...new Set(data.map(post => post.category))]
          setCategories(uniqueCategories)
        } else {
          setFeaturedPost(null)
          setPosts([])
          setCategories([])
        }
        return
      }

      let query = supabase
        .from('posts')
        .select('*')
        .order('published_at', { ascending: false })

      if (selectedCategory) {
        query = query.eq('category', selectedCategory)
      }

      if (searchTerm) {
        query = query.or(`title.ilike.%${searchTerm}%,content.ilike.%${searchTerm}%`)
      }

      const { data, error } = await query
      if (error) throw error

      if (data && data.length > 0) {
        setFeaturedPost(data[0])
        setPosts(data.slice(1))
        const uniqueCategories = [...new Set(data.map(post => post.category))]
        setCategories(uniqueCategories)
      }
    } catch (error) {
      console.error('Error fetching posts:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    fetchPosts()
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-pulse text-center">
          <div className="h-12 w-12 bg-gray-200 rounded-full mx-auto mb-4"></div>
          <p className="text-gray-500">Carregando blog...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-black">Growmate</h1>
              <span className="ml-2 text-sm text-gray-500">Blog</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/blog" className="text-gray-700 hover:text-black font-medium">
                Artigos
              </Link>
              <Link to="/blog/categoria/IA" className="text-gray-700 hover:text-black font-medium">
                IA
              </Link>
              <Link to="/blog/categoria/Automação" className="text-gray-700 hover:text-black font-medium">
                Automação
              </Link>
              <Link to="/blog/categoria/Cases" className="text-gray-700 hover:text-black font-medium">
                Cases
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-6 border-t border-gray-100">
              <div className="flex flex-col space-y-4 pt-6">
                <Link 
                  to="/blog" 
                  className="text-gray-700 hover:text-black font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Artigos
                </Link>
                <Link 
                  to="/blog/categoria/IA" 
                  className="text-gray-700 hover:text-black font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  IA
                </Link>
                <Link 
                  to="/blog/categoria/Automação" 
                  className="text-gray-700 hover:text-black font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Automação
                </Link>
                <Link 
                  to="/blog/categoria/Cases" 
                  className="text-gray-700 hover:text-black font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Cases
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      {featuredPost && (
        <section className="bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <div className="inline-block bg-green-400 text-black px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {featuredPost.category}
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
                  {featuredPost.subtitle}
                </p>
                <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-gray-400">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {formatDate(featuredPost.published_at)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {featuredPost.read_time} min de leitura
                  </div>
                </div>
                <Link
                  to={`/blog/post/${featuredPost.slug}`}
                  className="inline-flex items-center bg-green-400 text-black px-6 py-3 rounded-lg font-medium hover:bg-green-300 transition-colors"
                >
                  Ler artigo completo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="relative">
                <img
                  src={featuredPost.cover_image}
                  alt={featuredPost.title}
                  className="rounded-lg w-full h-64 md:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            {/* Search */}
            <div className="mb-8">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Buscar artigos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </form>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Categorias</h3>
              <div className="space-y-2">
                <button
                  onClick={() => {
                    setSelectedCategory('')
                    fetchPosts()
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    !selectedCategory ? 'bg-green-100 text-green-800' : 'hover:bg-gray-100'
                  }`}
                >
                  Todos ({posts.length + (featuredPost ? 1 : 0)})
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category)
                      fetchPosts()
                    }}
                    className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category ? 'bg-green-100 text-green-800' : 'hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Artigos recentes</h2>
              <p className="text-gray-600">
                {selectedCategory ? `Filtrando por: ${selectedCategory}` : 'Todos os artigos'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <article key={post.id} className="group">
                  <Link to={`/blog/post/${post.slug}`}>
                    <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-4">
                      <img
                        src={post.cover_image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span className="bg-gray-100 px-2 py-1 rounded">{post.category}</span>
                        <span>{post.read_time} min</span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold group-hover:text-green-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-2">{post.subtitle}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="h-3 w-3 mr-1" />
                        <span className="mr-4">{post.author}</span>
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{formatDate(post.published_at)}</span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {posts.length === 0 && !loading && (
              <div className="text-center py-12">
                <p className="text-gray-500">Nenhum artigo encontrado.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
