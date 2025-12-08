import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase, Post, hasSupabase, mockPosts } from '../lib/supabase'
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react'

export default function BlogCategory() {
  const { category } = useParams<{ category: string }>()
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (category) {
      fetchPostsByCategory()
    }
  }, [category])

  const fetchPostsByCategory = async () => {
    try {
      if (!hasSupabase) {
        const data = mockPosts.filter(p => p.category === category)
        setPosts(data)
        return
      }

      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('category', category)
        .order('published_at', { ascending: false })

      if (error) throw error

      if (data) {
        setPosts(data)
      }
    } catch (error) {
      console.error('Error fetching posts by category:', error)
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
          <p className="text-gray-500">Carregando artigos...</p>
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

      {/* Category Header */}
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
            {category}
          </h1>
          <p className="text-xl text-gray-600">
            {posts.length} artigo{posts.length !== 1 ? 's' : ''} encontrado{posts.length !== 1 ? 's' : ''}
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {posts.length > 0 ? (
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
                    <h3 className="text-xl font-bold group-hover:text-green-600 transition-colors">
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
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Nenhum artigo encontrado</h2>
            <p className="text-gray-600 mb-8">
              Não há artigos na categoria "{category}" ainda.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center bg-green-400 text-black px-6 py-3 rounded-lg font-medium hover:bg-green-300 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar para o blog
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
