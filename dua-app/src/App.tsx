import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Leadership from './pages/Leadership'
import Members from './pages/Members'
import Media from './pages/Media'
import Contact from './pages/Contact'
import Priorities from './pages/Priorities'
import Events from './pages/Events'
import GlobalNetworkPage from './pages/GlobalNetworkPage'
import Article from './pages/Article'
import MilestoneBlog from './pages/MilestoneBlog'
import DrivingDemocracyBlog from './pages/DrivingDemocracyBlog'
import Register from './pages/Register'
import RegisterLocal from './pages/RegisterLocal'
import RegisterInternational from './pages/RegisterInternational'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/members" element={<Members />} />
          <Route path="/media" element={<Media />} />
          <Route path="/priorities" element={<Priorities />} />
          <Route path="/events" element={<Events />} />
          <Route path="/global-network" element={<GlobalNetworkPage />} />
          <Route path="/news/:slug" element={<Article />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/milestone" element={<MilestoneBlog />} />
          <Route path="/blog/driving-democracy" element={<DrivingDemocracyBlog />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/local" element={<RegisterLocal />} />
          <Route path="/register/international" element={<RegisterInternational />} />
        </Route>
      </Routes>
    </>
  )
}
