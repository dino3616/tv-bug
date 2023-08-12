'use client';

import { cn } from '@tv-bug/tailwind';
import { type ReactNode, useState } from 'react';
import { type VariantProps, tv } from 'tailwind-variants';

const clientButtonVariant = tv(
  {
    variants: {
      color: {
        slate: 'bg-slate-300 text-slate-950 hover:bg-slate-400',
        purple: 'bg-purple-300 text-purple-950 hover:bg-purple-400',
      },
      fontSize: {
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
        '2xl': 'text-2xl',
        '3xl': 'text-3xl',
        '4xl': 'text-4xl',
        '5xl': 'text-5xl',
        '6xl': 'text-6xl',
        '7xl': 'text-7xl',
        '8xl': 'text-8xl',
        '9xl': 'text-9xl',
      },
    },
  },
  {
    responsiveVariants: true,
  },
);

type ClientButtonProps = VariantProps<typeof clientButtonVariant>;

export const ClientButton = ({ color = 'slate', fontSize = 'md' }: ClientButtonProps): ReactNode => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)} className={cn('rounded-2xl p-8 drop-shadow-lg transition', clientButtonVariant({ color, fontSize }))}>
      Count: {count}
    </button>
  );
};
