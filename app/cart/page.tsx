import CartItemsList from '@/components/cart/CartItemsList';
import CartTotals from '@/components/cart/CartTotals';
import SectionTitle from '@/components/global/SectionTitle';
import { fetchOrCreateCart, updateCart } from '@/utils/actions';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

async function CartPage() {
  const { userId } = auth();
  if (!userId) redirect('/');
  const previousCart = await fetchOrCreateCart({ userId });
  const { cartItems, updatedCart: cart } = await updateCart(previousCart);

  if (cart.numItems === 0) return <SectionTitle text='Your cart is empty...' />;
  return (
    <>
      <SectionTitle text='Shopping Cart' />
      <div className='mt-4 grid gap-4 lg:grid-cols-12'>
        <div className='lg:col-span-8'>
          <CartItemsList cartItems={cartItems} />
        </div>
        <div className='lg:col-span-4'>
          <CartTotals cart={cart} />
        </div>
      </div>
    </>
  );
}
export default CartPage;
