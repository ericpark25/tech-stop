import Link from 'next/link';
import { Button } from '../ui/button';
import { FaGear } from 'react-icons/fa6';

function Logo() {
  return (
    <Link href='/' className='flex items-center justify-center gap-3'>
      <Button size='icon'>
        <FaGear className='w-6 h-6' />
      </Button>
      <h2 className='font-bold text-2xl'>Tech Stop</h2>
    </Link>
    // <Button size='icon' asChild>
    //   <Link href='/'>
    //     <FaArrowTrendUp className='w-6 h-6' />
    //   </Link>
    // </Button>
  );
}
export default Logo;
