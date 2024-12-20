import Link from 'next/link';
import { Button } from '../ui/button';
import { PiShoppingCartDuotone } from 'react-icons/pi';
import { fetchNumItems } from '@/utils/actions';

async function CartButton() {
  const cartItemsCount = fetchNumItems();
  return (
    <Button
      asChild
      variant='outline'
      size='icon'
      className='flex justify-center items-center relative text-xl'
    >
      <Link href='/cart'>
        <PiShoppingCartDuotone />
        <span className='absolute -top-2 -right-2 bg-primary text-white rounded-full h-5 w-5 flex justify-center items-center text-xs'>
          {cartItemsCount}
        </span>
      </Link>
    </Button>
  );
}
export default CartButton;
