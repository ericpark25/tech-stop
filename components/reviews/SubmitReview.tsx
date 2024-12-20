'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import { SignInButton, useUser } from '@clerk/nextjs';
import { Card } from '../ui/card';
import FormContainer from '../form/FormContainer';
import { submitReviewAction } from '@/utils/actions';
import RatingInput from './RatingInput';
import TextAreaInput from '../form/TextAreaInput';
import { SubmitButton } from '../form/Buttons';

function SubmitReview({ productId }: { productId: string }) {
  const [reviewFormToggle, setReviewFormToggle] = useState(false);
  const { user } = useUser();

  return (
    <div className='mt-10'>
      {!user ? (
        <Button size='lg' className='capitalize' asChild>
          <SignInButton mode='modal'>leave review</SignInButton>
        </Button>
      ) : (
        <Button
          size='lg'
          className='capitalize'
          onClick={() => setReviewFormToggle((prev) => !prev)}
        >
          leave review
        </Button>
      )}

      {reviewFormToggle && (
        <Card className='p-8 mt-8 max-w-3xl'>
          <FormContainer action={submitReviewAction}>
            <input type='hidden' name='productId' value={productId} />
            <input
              type='hidden'
              name='authorName'
              value={user?.firstName || 'user'}
            />
            <input
              type='hidden'
              name='authorImageUrl'
              value={user?.imageUrl || ''}
            />
            <RatingInput name='rating' />
            <TextAreaInput
              name='comment'
              labelText='feedback'
              defaultValue='great product!'
            />
            <SubmitButton className='mt-4' />
          </FormContainer>
        </Card>
      )}
    </div>
  );
}
export default SubmitReview;
