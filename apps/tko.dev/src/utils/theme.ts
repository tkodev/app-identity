import type { ClassValue } from 'clsx'
import { cva, type VariantProps } from 'class-variance-authority'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs))

export { cn, cva, type VariantProps }
import { FlattenedDictionary, NestedDictionary } from '../types/theme'

/**
 * Flattens a nested theme object into a single level theme object.
 * Some tailwind styles are single level, this function flattens nested styles.
 *
 * @param input - The nested theme object to flatten
 * @returns A single level object
 */
function flattenNestedTheme(input: NestedDictionary, prefix: string = ''): FlattenedDictionary {
  let flatColors: FlattenedDictionary = {}

  for (const key in input) {
    if (input.hasOwnProperty(key)) {
      const value = input[key]
      const newKey = prefix ? `${prefix}-${key}` : key

      if (typeof value === 'string') {
        flatColors[newKey] = value
      } else if (typeof value === 'object' && value !== null) {
        flatColors = { ...flatColors, ...flattenNestedTheme(value, newKey) }
      }
    }
  }

  return flatColors
}

/**
 * Builds a factory for a function that converts pixels to rem
 *
 * @param baseFontSize - The base font size to convert pixels to rem
 * @returns A function that converts pixels to rem
 */
const pxToRemFactory = (baseFontSize: number) => (mult: number) => mult / baseFontSize

/**
 * Builds a dictionary of styles that increment on a given factor and max value
 *
 * @param props.factor - The factor to build the styles by
 * @param props.max - The maximum value to build the styles up to
 * @param props.stepSymbol - The symbol to append to the step value
 * @param props.valueSymbol - The symbol to append to the value
 * @param props.valueMult - The multiplier to apply to the value
 * @returns A dictionary of styles
 */
const buildIncrementStyles = (props: {
  factor: number
  max: number
  keySymbol?: string
  valueSymbol?: string
  valueMult?: number
}) => {
  const { factor, max, keySymbol = '', valueSymbol = '', valueMult = 1 } = props
  if (factor === 0 || max === 0 || valueMult === 0) return {}
  return Array.from({ length: Math.round(max / factor) + 1 }).reduce<Record<string, string>>((result, _, index) => {
    const key = index * factor
    const keyString = `${key}${keySymbol}`
    const value = key * valueMult
    const valueString = `${value}${valueSymbol}`
    result[keyString] = valueString
    return result
  }, {})
}

export { pxToRemFactory, flattenNestedTheme, buildIncrementStyles }
