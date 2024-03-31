import { cva } from 'class-variance-authority';
import { cn } from '../../utils/cn';

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export default function Button({ className, variant, ...props }: ButtonProps) {
  return (
    <button {...props} className={cn(buttonVariants({ variant }), className)} />
  );
}

const buttonVariants = cva('py-3 px-6 rounded-full font-medium text-sm', {
  variants: {
    variant: {
      primary:
        'bg-black text-white hover:bg-white hover:text-black hover:shadow-lg transition-all duration-200 ease-in',
      secondary:
        'bg-white text-black hover:bg-grainBrown hover:text-black hover:shadow-lg transition-all duration-200 ease-in',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});
