import { IconButton } from '@/components/form/Buttons';
import FormContainer from '@/components/form/FormContainer';
import EmptyList from '@/components/global/EmptyList';
import SectionTitle from '@/components/global/SectionTitle';
import ReviewCard from '@/components/reviews/ReviewCard';
import { deleteReviewAction, fetchProductReviewsByUser } from '@/utils/actions';

async function ReviewsPage() {
  const reviews = await fetchProductReviewsByUser();

  return (
    <>
      <SectionTitle text='Your Reviews' />
      {reviews.length === 0 ? (
        <EmptyList
          heading='You have no reviews...'
          className='text-base mt-4 font-medium'
        />
      ) : (
        <section className='grid md:grid-cols-2 gap-8 mt-4'>
          {reviews.map((review) => {
            const { id, comment, rating } = review;
            const { name, image } = review.product;
            const reviewInfo = {
              comment,
              rating,
              name,
              image,
            };
            return (
              <ReviewCard key={id} reviewInfo={reviewInfo}>
                <DeleteReview reviewId={id} />
              </ReviewCard>
            );
          })}
        </section>
      )}
    </>
  );
}

const DeleteReview = ({ reviewId }: { reviewId: string }) => {
  const deleteReview = deleteReviewAction.bind(null, { reviewId });
  return (
    <FormContainer action={deleteReview}>
      <IconButton actionType='delete' />
    </FormContainer>
  );
};
export default ReviewsPage;
