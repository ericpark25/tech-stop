import { fetchProductRating } from '@/utils/actions';
import { FaStar } from 'react-icons/fa';

async function ProductRating({ productId }: { productId: string }) {
  const ratingData = await fetchProductRating(productId);
  const rating = ratingData.rating;
  const count = ratingData.count;

  const className = `flex gap-2 items-center text-md mt-1 mb-4`;
  const countValue = `(${count}) reviews`;
  return (
    <span className={className}>
      <FaStar className='w-3 h-3' />
      {rating} {countValue}
    </span>
  );
}
export default ProductRating;
