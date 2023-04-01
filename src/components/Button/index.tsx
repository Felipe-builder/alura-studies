import React from "react";
import style from "./Button.module.scss";

interface ButtonProps {
  children?: React.ReactNode;
}

export default class Button extends React.Component<ButtonProps> {
  render() {
    return <button className={style.button}>{this.props.children}</button>;
  }
}
