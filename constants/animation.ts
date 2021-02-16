import { Variants } from 'framer-motion'

export const fadeUpDownVariants: Variants = {
  fadeUp: {
    y: -30,
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
  fadeDown: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
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
