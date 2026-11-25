import { useId, useState } from 'react'
import type { InputHTMLAttributes } from 'react'
import { Eye, EyeOff } from 'lucide-react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

function Input({
  label,
  error,
  id,
  type = 'text',
  className = '',
  ...props
}: InputProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId

  const [showPassword, setShowPassword] = useState(false)

  const isPassword = type === 'password'

  const inputType = isPassword && showPassword
    ? 'text'
    : type

  return (
    <div className="flex w-full flex-col gap-2">
      <label
        htmlFor={inputId}
        className="text-sm font-medium text-ink"
      >
        {label}
      </label>

      <div className="relative">
        <input
          {...props}
          id={inputId}
          type={inputType}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${inputId}-error` : undefined}
          className={`w-full rounded-md border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted disabled:cursor-not-allowed disabled:bg-gray-100 ${
            error
              ? 'border-red-500 focus:ring-1 focus:ring-red-500'
              : 'border-border focus:border-brand focus:ring-1 focus:ring-brand'
          } ${isPassword ? 'pr-12' : ''} ${className}`}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            disabled={props.disabled}
            className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center justify-center rounded p-1 text-muted transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-brand disabled:cursor-not-allowed disabled:opacity-50"
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>
        )}
      </div>

      {error && (
        <p
          id={`${inputId}-error`}
          className="text-xs text-red-600"
        >
          {error}
        </p>
      )}
    </div>
  )
}

export default Input