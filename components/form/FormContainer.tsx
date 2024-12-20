'use client';

import { useFormState } from 'react-dom';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { type actionFunction } from '@/utils/types';
import { useRouter } from 'next/navigation';

const initialState = {
  message: '',
};

function FormContainer({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) {
  const [state, formAction] = useFormState(action, initialState);
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    if (state.message) {
      toast({ description: state.message });
      if (state.message === 'product created') {
        router.push('/admin/products');
      }
    }
  }, [state]);
  return <form action={formAction}>{children}</form>;
}
export default FormContainer;
