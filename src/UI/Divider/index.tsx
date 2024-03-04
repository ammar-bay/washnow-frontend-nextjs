import React, { HTMLAttributes, PropsWithChildren, RefAttributes } from 'react'

import classes from './styles.module.scss'

interface IProps extends PropsWithChildren, RefAttributes<any>, HTMLAttributes<HTMLElement> {
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'
  borderStyle?: 'solid' | 'dashed'
}

const Divider: React.FC<IProps> = ({ children, className = '', color = 'default', borderStyle = 'solid', ...other }) => {
  return React.createElement('div', { className: `${classes[color]} ${classes[borderStyle]}  ${className ? className : ''}`, ...other }, children)
}

export default Divider
