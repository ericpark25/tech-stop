'use client';

import { CartItemIncludingProduct } from '@/utils/types';
import { Card } from '../ui/card';
import { FirstColumn, FourthColumn, SecondColumn } from './CartItemColumns';
import ThirdColumn from './ThirdColumn';

function CartItemsList({
  cartItems,
}: {
  cartItems: CartItemIncludingProduct[];
}) {
  return (
    <div>
      {cartItems.map((cartItem) => {
        const { id, amount } = cartItem;
        const { name, image, price, company, id: productId } = cartItem.product;
        return (
          <Card
            key={id}
            className='flex flex-col gap-y-4 md:flex-row flex-wrap p-6 mb-8 gap-x-4'
          >
            <FirstColumn image={image} name={name} />
            <SecondColumn productId={productId} name={name} company={company} />
            <ThirdColumn id={id} quantity={amount} />
            <FourthColumn price={price} />
          </Card>
        );
      })}
    </div>
  );
}
export default CartItemsList;
