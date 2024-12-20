import EmptyList from '@/components/global/EmptyList';
import SectionTitle from '@/components/global/SectionTitle';
import ProductsGrid from '@/components/products/ProductsGrid';
import { fetchUserFavorites } from '@/utils/actions';

async function FavoritesPage() {
  const favorites = await fetchUserFavorites();
  if (favorites.length === 0)
    return (
      <>
        <SectionTitle text='favorites' />
        <EmptyList
          heading='Add items to favorites to view here...'
          className='mt-4 text-md'
        />
      </>
    );
  return (
    <>
      <SectionTitle text='favorites' />
      <ProductsGrid products={favorites.map((favorite) => favorite.product)} />
    </>
  );
}
export default FavoritesPage;
