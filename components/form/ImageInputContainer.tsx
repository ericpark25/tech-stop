'use client';

import { type actionFunction } from '@/utils/types';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '../ui/button';
import FormContainer from './FormContainer';
import ImageInput from './ImageInput';
import { SubmitButton } from './Buttons';

type ImageInputContainerProps = {
  image: string;
  name: string;
  action: actionFunction;
  text: string;
  children?: React.ReactNode;
};
function ImageInputContainer({
  image,
  name,
  action,
  text,
  children,
}: ImageInputContainerProps) {
  const [isUpdateFormVisible, setUpdateFormVisible] = useState(false);
  return (
    <div className='mb-8'>
      <Image
        src={image}
        width={200}
        height={200}
        className='rounded-md object-cover mb-4 w-[200px] h-[200]px'
        alt={name}
        priority
      />
      <Button
        variant='outline'
        size='sm'
        onClick={() => setUpdateFormVisible((prev) => !prev)}
      >
        {text}
      </Button>
      {isUpdateFormVisible && (
        <div className='max-w-md mt-4'>
          <FormContainer action={action}>
            {children}
            <ImageInput />
            <SubmitButton size='sm' text={text} />
          </FormContainer>
        </div>
      )}
    </div>
  );
}
export default ImageInputContainer;
