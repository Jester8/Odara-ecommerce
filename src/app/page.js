import Carousel from './components/Carousel';
import { getCarouselProducts } from '../app/components/Utils/Carousel';
import ProductCarousel from './components/ProductCarousel';
import ProductCard from "../app/components/ProductCard"
import ProductGrid from './components/ProductGrid';

export default function Home() {
  const products = getCarouselProducts();

  return (
    <div className="container mx-auto px-4 mt-4 ">
      <div className="space-y-2"> 
        <div className="w-full">
          <Carousel products={products} />
        </div>
        <div className="w-full">
          <ProductCarousel />
        </div>
        <div className="w-full">
        <ProductCard/>
        </div>
        
        <div className="w-full">
          <ProductGrid/>
          </div>
      </div>
    </div>
  );
}
