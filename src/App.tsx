import { Routes, Route } from 'react-router-dom'
import Home from './pages/index'
import Services from './pages/services'
import About from './pages/about'
import Blogs from './pages/blogs'
import BlogDetail from './pages/BlogDetails'
import Contact from './pages/contact'
import Pricing from './pages/pricing'
import LinkedInOptimisation from './pages/linkedin-optimisation'
import ResumeTemplates from './pages/resume-templates'
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
          {/* Main pages */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* New nav pages */}
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/linkedin-optimisation" element={<LinkedInOptimisation />} />
          <Route path="/resume-templates" element={<ResumeTemplates />} />

          {/* Blog */}
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogDetail />} />

          {/* Local SEO pages */}
          <Route path="/resume-writing-kerala" element={<Home />} />
          <Route path="/resume-writing-kochi" element={<Home />} />
          <Route path="/resume-writing-bangalore" element={<Home />} />
          <Route path="/resume-writing-mumbai" element={<Home />} />
          <Route path="/resume-writing-hyderabad" element={<Home />} />
          <Route path="/resume-writing-chennai" element={<Home />} />
          <Route path="/resume-writing-dubai-uae" element={<Home />} />
          <Route path="/resume-writing-qatar" element={<Home />} />
          <Route path="/resume-writing-saudi-arabia" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFab />
      <Toaster richColors position="top-right" />
    </>
  )
}