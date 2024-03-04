import React, { HTMLAttributes, PropsWithChildren, RefAttributes } from 'react'

import classes from './styles.module.scss'

interface IProps extends PropsWithChildren, RefAttributes<any>, HTMLAttributes<HTMLElement> {}

const CardContent: React.FC<IProps> = ({ children, className = '', ...other }) => {
  return React.createElement('div', { className: `${classes.cardContent} ${className}`, ...other }, children)
}

export default CardContent
