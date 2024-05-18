import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { cva, type VariantProps } from 'class-variance-authority'

const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs))

export { cn, cva, type VariantProps }
