'use client';

import { useState } from 'react';
import SelectProductAmount, {
  Mode,
} from '../single-product/SelectProductAmount';
import { SubmitButton } from '../form/Buttons';
import FormContainer from '../form/FormContainer';
import { removeCartItemAction, updateCartItemAction } from '@/utils/actions';
import { useToast } from '@/hooks/use-toast';

function ThirdColumn({ id, quantity }: { id: string; quantity: number }) {
  const [amount, setAmount] = useState(quantity);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const handleAmountChange = async (value: number) => {
    setIsLoading(true);
    toast({ description: 'updating...' });
    const result = await updateCartItemAction({
      cartItemId: id,
      amount: value,
    });
    setAmount(value);
    toast({ description: result.message });
    setIsLoading(false);
  };

  return (
    <div className='md:ml-8'>
      <SelectProductAmount
        mode={Mode.CartItem}
        amount={amount}
        setAmount={handleAmountChange}
        isLoading={isLoading}
      />
      <FormContainer action={removeCartItemAction}>
        <input type='hidden' name='id' value={id} />
        <SubmitButton size='sm' text='remove item' className='mt-4' />
      </FormContainer>
    </div>
  );
}
export default ThirdColumn;
