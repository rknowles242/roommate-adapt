import { useId } from 'react'
import type { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

function Input({
  label,
  error,
  id,
  className = '',
  ...props
}: InputProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId

  return (
    <div className="flex w-full flex-col gap-2">
      <label
        htmlFor={inputId}
        className="text-sm font-medium text-ink"
      >
        {label}
      </label>

      <input
        {...props}
        id={inputId}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={`w-full rounded-md border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted disabled:cursor-not-allowed disabled:bg-gray-100 ${
          error
            ? 'border-red-500 focus:ring-1 focus:ring-red-500'
            : 'border-border focus:border-brand focus:ring-1 focus:ring-brand'
        } ${className}`}
      />

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