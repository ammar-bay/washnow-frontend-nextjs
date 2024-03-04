import React, { HTMLAttributes, PropsWithChildren, RefAttributes } from 'react'

import classes from './styles.module.scss'

interface IProps extends PropsWithChildren, RefAttributes<any>, HTMLAttributes<HTMLElement> {
  height?: string
  width?: string
  src: string
}

const CardMedia: React.FC<IProps> = ({ className = '', height = '100%', width = '100%', src, ...other }) => {
  return React.createElement('img', { className: `${classes.cardMedia} ${className}`, src, height, width, ...other })
}

export default CardMedia
