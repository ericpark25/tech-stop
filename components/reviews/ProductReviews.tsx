import { fetchProductReviews } from '@/utils/actions';
import SectionTitle from '../global/SectionTitle';
import ReviewCard from './ReviewCard';
import EmptyList from '../global/EmptyList';

async function ProductReviews({ productId }: { productId: string }) {
  const reviews = await fetchProductReviews(productId);
  return (
    <div className='mt-16'>
      <SectionTitle text='product reviews' />
      {reviews.length === 0 ? (
        <EmptyList heading='No reviews found...' className='text-base my-4' />
      ) : (
        <div className='grid md:grid-cols-2 gap-8 my-8'>
          {reviews.map((review) => {
            const { id, comment, rating, authorImageUrl, authorName } = review;
            const reviewInfo = {
              comment,
              rating,
              image: authorImageUrl,
              name: authorName,
            };
            return <ReviewCard key={id} reviewInfo={reviewInfo} />;
          })}
        </div>
      )}
    </div>
  );
}
export default ProductReviews;
