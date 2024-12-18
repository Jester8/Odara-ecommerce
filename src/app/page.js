import Carousel from './components/Carousel';
import { getCarouselProducts } from '../app/components/Utils/Carousel';

export default function Home() {
  const products = getCarouselProducts();

  return (
    <div className="container mx-auto px-4 mt-4 mr-9">
      <Carousel products={products} />
    </div>
  );
}