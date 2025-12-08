import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase, Post, hasSupabase, mockPosts } from '../lib/supabase'
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Tag } from 'lucide-react'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const [post, setPost] = useState<Post | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (slug) {
      fetchPost()
    }
  }, [slug])

  const fetchPost = async () => {
    try {
      if (!hasSupabase) {
        const postData = mockPosts.find(p => p.slug === slug)
        if (postData) {
          setPost(postData)
          const relatedData = mockPosts
            .filter(p => p.slug !== slug)
            .filter(p => p.category === postData.category || p.tags.some(t => postData.tags.includes(t)))
            .slice(0, 3)
          setRelatedPosts(relatedData)
        }
        return
      }
      // Fetch the main post
      const { data: postData, error: postError } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', slug)
        .single()

      if (postError) throw postError

      if (postData) {
        setPost(postData)

        // Fetch related posts (same category or similar tags)
        const { data: relatedData, error: relatedError } = await supabase
          .from('posts')
          .select('*')
          .neq('slug', slug) // Exclude current post
          .or(`category.eq.${postData.category},tags.cs.{${postData.tags.join(',')}}`)
          .limit(3)
          .order('published_at', { ascending: false })

        if (relatedData) {
          setRelatedPosts(relatedData)
        }
      }
    } catch (error) {
      console.error('Error fetching post:', error)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }

  const renderMarkdown = (content: string) => {
    // Simple markdown to HTML conversion
    return content
      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mt-6 mb-3">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-10 mb-6">$1</h1>')
      .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*(.*)\*/gim, '<em>$1</em>')
      .replace(/^\* (.*$)/gim, '<li class="ml-4 mb-2">$1</li>')
      .replace(/^\d+\. (.*$)/gim, '<li class="ml-4 mb-2">$1</li>')
      .replace(/\n/gim, '<br>')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-pulse text-center">
          <div className="h-12 w-12 bg-gray-200 rounded-full mx-auto mb-4"></div>
          <p className="text-gray-500">Carregando artigo...</p>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Artigo não encontrado</h1>
          <Link to="/blog" className="text-green-600 hover:underline">
            Voltar para o blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-gray-600 hover:text-black mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar para o blog
          </Link>

          <div className="mb-6">
            <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              {post.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {formatDate(post.published_at)}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              {post.read_time} min de leitura
            </div>
          </div>

          {/* Cover Image */}
          {post.cover_image && (
            <div className="mb-12">
              <img
                src={post.cover_image}
                alt={post.title}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          )}
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div
            dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
            className="text-lg leading-relaxed space-y-6"
          />
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center flex-wrap gap-2">
              <Tag className="h-4 w-4 text-gray-500" />
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Artigos relacionados</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.id} className="group">
                  <Link to={`/blog/post/${relatedPost.slug}`}>
                    <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-4">
                      <img
                        src={relatedPost.cover_image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <span className="text-sm text-gray-500">{relatedPost.category}</span>
                      <h3 className="text-lg font-bold group-hover:text-green-600 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {relatedPost.subtitle}
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{relatedPost.read_time} min</span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center">
          <Link
            to="/blog"
            className="inline-flex items-center text-gray-600 hover:text-black"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar para o blog
          </Link>
          
          <div className="flex space-x-4">
            {/* Previous/Next post navigation would go here */}
          </div>
        </div>
      </div>
    </div>
  )
}
