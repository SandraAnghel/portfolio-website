import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GrowthTips from './components/growth-tips/GrowthTips';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Header from './components/Header';

function App() {
  return (
    <section className="relative lg:h-screen">
      <BrowserRouter>
        <Header />
        <Routes >
          <Route path="/" element={<Home />}></Route>
          <Route path="/growthtips" element={<GrowthTips />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </section>
  );
}

export default App;
