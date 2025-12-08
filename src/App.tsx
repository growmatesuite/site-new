import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BlogHome from './pages/BlogHome'
import BlogPost from './pages/BlogPost'
import BlogCategory from './pages/BlogCategory'
import BlogSearch from './pages/BlogSearch'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/blog" element={<BlogHome />} />
        <Route path="/blog/post/:slug" element={<BlogPost />} />
        <Route path="/blog/categoria/:category" element={<BlogCategory />} />
        <Route path="/blog/busca" element={<BlogSearch />} />
        <Route path="/" element={<BlogHome />} />
      </Routes>
    </Router>
  )
}

export default App