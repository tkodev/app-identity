import { cva, cn, type VariantProps } from '@repo/ui/src/utils/cva'

const styles = {
  root: cva('absolute mix-blend-normal will-change-[filter] rounded-[100%]', {
    variants: {
      small: {
        true: 'blur-[32px]',
        false: 'blur-[75px]'
      },
      conic: {
        true: 'bg-glow-conic'
      }
    },
    defaultVariants: {
      small: false,
      conic: false
    }
  })
}

type GradientProps = VariantProps<typeof styles.root> & {
  className?: string
}

const Gradient: React.FC<GradientProps> = (props) => {
  const { small, conic, className } = props

  return <span className={cn(styles.root({ small, conic }), className)} />
}

export { Gradient }
