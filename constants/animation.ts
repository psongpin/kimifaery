import { Variants } from 'framer-motion'

export const fadeUpDownVariants: Variants = {
  fadeUp: {
    y: -30,
    opacity: 0,
    transition: {
      duration: 0.1,
      ease: 'linear',
    },
  },
  fadeDown: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'linear',
    },
  },
}

export const fadeUpDownProps = {
  variants: fadeUpDownVariants,
}

export const basicFadeUpDownVariants: Variants = {
  fadeUp: {
    y: -30,
    opacity: 0,
  },
  fadeDown: {
    y: 0,
    opacity: 1,
  },
}
