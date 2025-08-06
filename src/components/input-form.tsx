import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import React from "react"

interface InputWithLabelProps {
  id: string
  label: string
  type?: "text" | "email" | "password" | "number" | "tel" | "url" | "date"
  placeholder?: string
  required?: boolean
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  disabled?: boolean
}

interface TextareaWithLabelProps {
  id: string
  label: string
  placeholder?: string
  required?: boolean
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  rows?: number
  className?: string
  disabled?: boolean
  maxHeight?: number
  maxChars?: number
}

interface SelectWithLabelProps {
  id: string
  label: string
  placeholder?: string
  required?: boolean
  value?: string
  onValueChange?: (value: string) => void
  options: { value: string; label: string }[]
  className?: string
  disabled?: boolean
}

export function InputWithLabel({
  id,
  label,
  type = "text",
  placeholder,
  required = false,
  value,
  onChange,
  className = "",
  disabled = false
}: InputWithLabelProps) {
  return (
    <div className={`grid w-full items-center gap-2 ${className}`}>
      <Label htmlFor={id} className="text-sm font-medium">
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </Label>
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="w-full"
      />
    </div>
  )
}

export function TextareaWithLabel({
  id,
  label,
  placeholder,
  required = false,
  value,
  onChange,
  rows = 4,
  className = "",
  disabled = false,
  maxHeight = 400,
  maxChars = 500
}: TextareaWithLabelProps) {
  // Função para lidar com mudanças no textarea
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={`grid w-full items-center gap-2 ${className}`}>
      <Label htmlFor={id} className="text-sm font-medium">
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </Label>
      <textarea
        id={id}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={handleChange}
        rows={rows}
        disabled={disabled}
        className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-vertical"
        style={{ 
          height: `${maxHeight}px`,
          overflowY: 'auto'
        }}
      />
    </div>
  )
}

export function SelectWithLabel({
  id,
  label,
  placeholder,
  required = false,
  value,
  onValueChange,
  options,
  className = "",
  disabled = false
}: SelectWithLabelProps) {
  return (
    <div className={`grid w-full items-center gap-2 ${className}`}>
      <Label htmlFor={id} className="text-sm font-medium">
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </Label>
      <Select value={value} onValueChange={onValueChange} disabled={disabled}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
