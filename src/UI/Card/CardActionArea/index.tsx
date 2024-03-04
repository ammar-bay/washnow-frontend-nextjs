import Link from 'next/link'
import React, { HTMLAttributes, PropsWithChildren, RefAttributes } from 'react'

import classes from './styles.module.scss'

interface IProps extends PropsWithChildren, RefAttributes<any>, HTMLAttributes<HTMLElement> {
  href: string
}

const CardActionArea: React.FC<IProps> = ({ children, className = '', style = {}, href }) => {
  return (
    <Link href={href}>
      <div className={`${classes.cardActionArea} ${className}`} style={style}>
        {children}
      </div>
    </Link>
  )
}

export default CardActionArea
