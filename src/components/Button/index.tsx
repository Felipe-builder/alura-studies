import React from "react";
import style from "./Button.module.scss";

interface ButtonProps {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined
}

export default class Button extends React.Component<ButtonProps> {
  render() {
    const { type = "button" } = this.props;
    return <button type={type} className={style.button}>{this.props.children}</button>;
  }
}
