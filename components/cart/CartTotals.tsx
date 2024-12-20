import { Cart } from '@prisma/client';
import { Card, CardTitle } from '../ui/card';
import { formatCurrency } from '@/utils/format';
import { Separator } from '../ui/separator';
import FormContainer from '../form/FormContainer';
import { SubmitButton } from '../form/Buttons';
import { createOrderAction } from '@/utils/actions';

function CartTotals({ cart }: { cart: Cart }) {
  const { cartTotal, shipping, tax, orderTotal } = cart;
  return (
    <div>
      <Card className='p-8'>
        <TotalsRow label='Subtotal' amount={cartTotal} />
        <TotalsRow label='Shipping' amount={shipping} />
        <TotalsRow label='Tax' amount={tax} />
        <CardTitle className='mt-8'>
          <TotalsRow label='Order Total' amount={orderTotal} lastRow />
        </CardTitle>
      </Card>
      <FormContainer action={createOrderAction}>
        <SubmitButton text='Place Order' className='w-full mt-8' />
      </FormContainer>
    </div>
  );
}

function TotalsRow({
  label,
  amount,
  lastRow,
}: {
  label: string;
  amount: number;
  lastRow?: boolean;
}) {
  return (
    <>
      <p className='flex justify-between text-sm'>
        <span>{label}</span>
        <span>{formatCurrency(amount)}</span>
      </p>
      {!lastRow ? <Separator className='my-2' /> : null}
    </>
  );
}
export default CartTotals;
