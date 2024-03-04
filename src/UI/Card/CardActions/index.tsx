import React, { HTMLAttributes, PropsWithChildren, RefAttributes } from 'react'

import classes from './styles.module.scss'

interface IProps extends PropsWithChildren, RefAttributes<any>, HTMLAttributes<HTMLElement> {}

const CardActions: React.FC<IProps> = ({ children, className = '', ...other }) => {
  return React.createElement('div', { className: `${classes.cardActions} ${className}`, ...other }, children)
}

export default CardActions
