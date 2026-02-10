'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-full text-[17px] font-normal ring-offset-background transition-all duration-300 ease-[cubic-bezier(0.28,0.11,0.32,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]',
  {
    variants: {
      variant: {
        default:
          'bg-[hsl(var(--primary))] text-primary-foreground hover:opacity-90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-foreground/20 bg-transparent hover:bg-foreground/[0.04] text-foreground',
        secondary:
          'bg-secondary text-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-foreground/[0.04] text-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        gradient:
          'bg-[hsl(var(--primary))] text-white hover:opacity-90',
      },
      size: {
        default: 'h-11 px-6',
        sm: 'h-9 px-5 text-[15px]',
        lg: 'h-12 px-8 text-[17px]',
        xl: 'h-14 px-10 text-[19px]',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
