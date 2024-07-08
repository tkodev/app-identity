import type { ClassValue } from 'clsx'
import { cva, type VariantProps } from 'class-variance-authority'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs))

export { cn, cva, type VariantProps }
