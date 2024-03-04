import React, { PropsWithChildren, HTMLAttributes, HTMLProps, ReactNode } from 'react'

import CircularProgress from '@UI/CircularProgress'
// import Ripple from 'Components/Ripple'
import classes from './styles.module.scss'

interface IProps extends PropsWithChildren, HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>, HTMLProps<HTMLButtonElement | HTMLAnchorElement> {
  variant?: 'text' | 'contained' | 'outlined' | 'icon'
  color?: 'primary' | 'secondary' | 'info' | 'error' | 'success'
  isLoading?: boolean
  href?: string
  startIcon?: ReactNode
  endIcon?: ReactNode
  spinnerSize?: 'sm' | 'md' | 'lg' | 'xl'
  applyRippleEffect?: boolean

}

const Button: React.FC<IProps> = ({
  variant = 'contained',
  color = 'primary',
  startIcon,
  endIcon,
  href,
  isLoading = false,
  applyRippleEffect = true,
  className = '',
  disabled,
  spinnerSize = 'md',
  children,
  id,
  ...other
}) => {
  return React.createElement(
    href ? 'a' : 'button',
    {
      className: `${classes['button']} ${classes[`${color}-bg`]} ${classes[variant]}  ${className}`,
      href,
      disabled: disabled || isLoading,
      ...other,
    },
    <>
      {startIcon && <span className={classes.startIcon}>{startIcon}</span>}
      {children}
      {isLoading ? (
        <CircularProgress color='info' size={spinnerSize} className={classes.endIcon} />
      ) : (
        endIcon && <span className={classes.endIcon}>{endIcon}</span>
      )}
      {/* {!disabled && applyRippleEffect && <Ripple id={id} color={color} />} */}
    </>,
  )
}

export default Button
