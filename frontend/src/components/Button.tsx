import type { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
}

function Button({
  children,
  variant = 'primary',
  className = '',
  type = 'button',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-brand text-white hover:bg-brand-hover',
    secondary: 'border border-border bg-white text-ink hover:bg-gray-50',
    ghost: 'text-muted hover:bg-gray-100',
  }

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button