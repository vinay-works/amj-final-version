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
        'bg-black text-white border-lightBorder hover:bg-white hover:border hover:text-black hover:shadow-lg transition-all duration-200 ease-in',
      secondary:
        'bg-goldenRod text-black hover:bg-black hover:text-white hover:shadow-lg transition-all duration-200 ease-in',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});
