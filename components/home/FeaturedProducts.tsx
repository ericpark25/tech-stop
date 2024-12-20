import { fetchFeaturedProducts } from '@/utils/actions';
import EmptyList from '../global/EmptyList';
import SectionTitle from '../global/SectionTitle';
import ProductsGrid from '../products/ProductsGrid';

async function FeaturedProducts() {
  const products = await fetchFeaturedProducts();

  return (
    <section className='pt-24'>
      <SectionTitle text='featured products' />
      {products.length === 0 ? (
        <EmptyList className='mt-2' />
      ) : (
        <ProductsGrid products={products} />
      )}
    </section>
  );
}
export default FeaturedProducts;
