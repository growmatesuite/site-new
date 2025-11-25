import { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function WorkWithUs() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cargo: '',
    mensagem: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Dados do formulário:', formData)
    alert('Obrigado pelo seu interesse! Entraremos em contato em breve.')
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      cargo: '',
      mensagem: ''
    })
  }

  return (
    <div className="min-h-screen bg-black text-white pt-32">
      <Header hideCtas centerNav />
      <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-black-secondary border border-gray-800 rounded-lg p-8 shadow-base">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Trabalhe Conosco</h1>
            <p className="text-gray-300">
              Faça parte da nossa equipe! Preencha o formulário abaixo e entraremos em contato.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-gray-400 mb-1">
                Nome Completo *
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                required
                value={formData.nome}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-800 bg-black-tertiary text-white placeholder-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Seu nome completo"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-800 bg-black-tertiary text-white placeholder-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label htmlFor="telefone" className="block text-sm font-medium text-gray-400 mb-1">
                Telefone
              </label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-800 bg-black-tertiary text-white placeholder-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="(00) 00000-0000"
              />
            </div>

            <div>
              <label htmlFor="cargo" className="block text-sm font-medium text-gray-400 mb-1">
                Cargo de Interesse
              </label>
              <select
                id="cargo"
                name="cargo"
                value={formData.cargo}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-800 bg-black-tertiary text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Selecione um cargo</option>
                <option value="desenvolvedor">Desenvolvedor</option>
                <option value="designer">Designer</option>
                <option value="marketing">Marketing</option>
                <option value="vendas">Vendas</option>
                <option value="suporte">Suporte ao Cliente</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <div>
              <label htmlFor="mensagem" className="block text-sm font-medium text-gray-400 mb-1">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={4}
                value={formData.mensagem}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-800 bg-black-tertiary text-white placeholder-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Conte-nos um pouco sobre você e por que quer fazer parte da nossa equipe..."
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-green-600 text-white px-8 py-3 rounded-md font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
              >
                Enviar Candidatura
              </button>
            </div>
          </form>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Você também pode enviar seu currículo diretamente para:{' '}
            <a href="mailto:ops@growmate.io" className="text-green-400 font-medium">ops@growmate.io</a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
