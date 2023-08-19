import './App.css';
import BlogSection from './component/Blog/BlogSection';
import CareerSection from './component/CareerSection/CareerSection';
import FeatureProducts from './component/FeatureProducts/FeatureProducts';
import Header from './component/Header/Header';
import HeroSection from './component/HeroSection/HeroSection';
import HireSection from './component/HireSection/HireSection';
import Reviews from './component/Reviews/Reviews';
import Footer from './component/footer/Footer';


function App() {
  return (
    <>
    <Header />
    <HeroSection />
    <FeatureProducts />
    <Reviews />
    <CareerSection />
    <BlogSection />
    <HireSection />
    <Footer />
    </>
  );
}

export default App;
