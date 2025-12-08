import { useEffect, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { supabase, Post, hasSupabase, mockPosts } from '../lib/supabase'
import { Search, Calendar, Clock, User, ArrowLeft } from 'lucide-react'

export default function BlogSearch() {
  const [searchParams] = useSearchParams()
  const [posts, setPosts] = useState<Post[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)

  const query = searchParams.get('q') || ''

  useEffect(() => {
    if (query) {
      setSearchTerm(query)
      searchPosts(query)
    }
  }, [query])

  const searchPosts = async (searchQuery: string) => {
    try {
      if (!hasSupabase) {
        const q = searchQuery.toLowerCase()
        const data = mockPosts.filter(p =>
          p.title.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.content.toLowerCase().includes(q)
        )
        setPosts(data)
        return
      }

      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .or(`title.ilike.%${searchQuery}%,content.ilike.%${searchQuery}%,subtitle.ilike.%${searchQuery}%`)
        .order('published_at', { ascending: false })

      if (error) throw error

      if (data) {
        setPosts(data)
      }
    } catch (error) {
      console.error('Error searching posts:', error)
    } finally {
      setLoading(false)
    }
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
          <p className="text-gray-500">Buscando artigos...</p>
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
          </div>
        </div>
      </header>

      {/* Search Header */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <Link
              to="/blog"
              className="inline-flex items-center text-gray-600 hover:text-black mr-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar para o blog
            </Link>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Resultados da busca
          </h1>
          <p className="text-xl text-gray-600">
            {posts.length} resultado{posts.length !== 1 ? 's' : ''} encontrado{posts.length !== 1 ? 's' : ''} para "{query}"
          </p>
        </div>
      </section>

      {/* Search Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {posts.length > 0 ? (
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.id} className="group border-b border-gray-200 pb-8 last:border-b-0">
                <Link to={`/blog/post/${post.slug}`} className="block">
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="md:col-span-1">
                      <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                        <img
                          src={post.cover_image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-3">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="bg-gray-100 px-2 py-1 rounded">{post.category}</span>
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>{post.read_time} min</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>{formatDate(post.published_at)}</span>
                          </div>
                        </div>
                        <h2 className="text-2xl font-bold group-hover:text-green-600 transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                          {post.subtitle}
                        </p>
                        <div className="flex items-center text-sm text-gray-500">
                          <User className="h-3 w-3 mr-1" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="mb-8">
              <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Nenhum resultado encontrado</h2>
              <p className="text-gray-600 mb-8">
                Não encontramos nenhum artigo que corresponda à sua busca por "{query}".
              </p>
            </div>
            <div className="space-y-4">
              <Link
                to="/blog"
                className="inline-flex items-center bg-green-400 text-black px-6 py-3 rounded-lg font-medium hover:bg-green-300 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar para o blog
              </Link>
              <div className="text-sm text-gray-500">
                <p>Tente buscar por termos diferentes ou explore nossas categorias:</p>
                <div className="flex justify-center space-x-4 mt-4">
                  <Link to="/blog/categoria/IA" className="text-green-600 hover:underline">
                    IA
                  </Link>
                  <Link to="/blog/categoria/Automação" className="text-green-600 hover:underline">
                    Automação
                  </Link>
                  <Link to="/blog/categoria/Cases" className="text-green-600 hover:underline">
                    Cases
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
