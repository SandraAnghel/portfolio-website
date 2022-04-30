import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GrowthTips from './components/GrowthTips';
import Contact from './components/Contact';
import Home from './components/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import OrganicSeo from './components/OrganicSeo';

function App() {
  return (
    <section className="relative lg:h-screen">
      <BrowserRouter>
        <Header />
        <Routes >
          <Route path="/" element={<Home />}></Route>
          <Route path="/growthtips" element={<GrowthTips />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path='/organicseo' element={<OrganicSeo/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </section>
  );
}

export default App;
