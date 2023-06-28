import React from "react";
import Header from "./Header";
import Content from "./Content";
import styles from "./styles.module.css";
import clsx from "clsx";


export default function CheatSheet({
  children,
  header,
}:{
  children: React.ReactNode
  header: React.ReactNode
}) {

  return <div className={clsx(styles.item)}>
    {header && <Header>
      {header}
    </Header>}
    <Content>
      {children}
    </Content>
  </div>
}