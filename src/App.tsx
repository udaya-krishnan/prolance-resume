import { Routes, Route } from 'react-router-dom'
import Home from './pages/index'
import Services from './pages/services'
import About from './pages/about'
import Blogs from './pages/blogs'
import BlogDetail from './pages/BlogDetails'
import Contact from './pages/contact'
import { Header } from './components/site/Header'
import { Footer } from './components/site/Footer'
import { WhatsAppFab } from './components/site/WhatsAppFab'
import { AnnouncementBar } from './components/site/AnnouncementBar'
import { Toaster } from 'sonner'

export default function App() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFab />
      <Toaster richColors position="top-right" />
    </>
  )
}