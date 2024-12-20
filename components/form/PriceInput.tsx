import { Label } from '../ui/label';
import { Input } from '../ui/input';

type FormInputNumberProps = {
  defaultValue?: number;
};

function PriceInput({ defaultValue }: FormInputNumberProps) {
  const name = 'price';
  const formattedValue =
    defaultValue && !Number.isInteger(defaultValue)
      ? defaultValue.toFixed(2)
      : defaultValue;
  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize'>
        price ($)
      </Label>
      <Input
        id={name}
        type='number'
        name={name}
        min={0}
        step={0.01}
        defaultValue={formattedValue || 100}
        required
      />
    </div>
  );
}
export default PriceInput;
