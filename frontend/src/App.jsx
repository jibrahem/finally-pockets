import { Route, Routes } from 'react-router';
import Navigation from './components/Navigation'
import HomePage from './components/HomePage'
import WomenPage from './components/WomenPage';
import MenPage from './components/MenPage';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import Footer from './components/Footer';
import './App.css'


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<HomePage />}>
        </Route>
        <Route exact path="/women" element={<WomenPage />}>
        </Route>
        <Route exact path='/men' element={<MenPage />}>
        </Route>
        <Route exact path='/about' element={<AboutPage />}>
        </Route>
        <Route exact path='/blog' element={<BlogPage />}>
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
