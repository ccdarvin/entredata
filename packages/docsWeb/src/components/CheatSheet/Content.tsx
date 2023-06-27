import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function Content({
  children,
}:{
  children: React.ReactNode
}) {

  return <div
    className={clsx(styles.content)}
  >
    {children}
  </div>
}