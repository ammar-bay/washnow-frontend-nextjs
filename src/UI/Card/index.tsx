import React, { HTMLAttributes, PropsWithChildren, RefAttributes } from 'react'

import classes from './styles.module.scss'

interface IProps extends PropsWithChildren, RefAttributes<any>, HTMLAttributes<HTMLElement> {}

const Card: React.FC<IProps> = ({ children, className = '', ...other }) => {
  return React.createElement('div', { className: `${classes.card} ${className}`, ...other }, children)
}

export default Card
