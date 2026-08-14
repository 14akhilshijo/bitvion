import React from 'react'

const FormField = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  error,
  required = false,
  placeholder,
  options,
  rows,
  accept,
  autoComplete,
  readOnly = false,
}) => {
  const id = `field-${name}`
  const errorId = `${id}-error`
  const baseClass =
    'w-full min-h-[48px] px-4 py-3 rounded-[10px] bg-primary border border-white/10 font-poppins text-white text-[16px] placeholder:text-dimWhite/50 focus:border-secondary/50 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-colors'

  return (
    <div className='flex flex-col gap-2'>
      <label htmlFor={id} className='font-poppins text-[14px] text-dimWhite'>
        {label}{required && <span className='text-secondary ml-1' aria-hidden='true'>*</span>}
      </label>

      {options ? (
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          autoComplete={autoComplete}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className={baseClass}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className='bg-primary'>
              {opt.label}
            </option>
          ))}
        </select>
      ) : rows ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          rows={rows}
          autoComplete={autoComplete}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className={`${baseClass} resize-y min-h-[120px]`}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          accept={accept}
          autoComplete={autoComplete}
          readOnly={readOnly}
          inputMode={type === 'email' ? 'email' : type === 'tel' ? 'tel' : undefined}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className={`${baseClass} ${readOnly ? 'opacity-80 cursor-not-allowed' : ''}`}
        />
      )}

      {error && (
        <p id={errorId} className='font-poppins text-[13px] text-red-400' role='alert'>
          {error}
        </p>
      )}
    </div>
  )
}

export default FormField
