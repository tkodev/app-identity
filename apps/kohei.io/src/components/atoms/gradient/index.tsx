import { cva, cn, type VariantProps } from '#src/utils/theme'

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

type GradientProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof styles.root> & {
    //
  }

const Gradient: React.FC<GradientProps> = (props) => {
  const { small, conic, className, ...rest } = props

  return <span className={cn(styles.root({ small, conic }), className)} {...rest} />
}

export { Gradient }
