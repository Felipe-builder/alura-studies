import React from "react";
import style from "./Button.module.scss";

interface ButtonProps {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void
}

export default class Button extends React.Component<ButtonProps> {
  render() {
    const { type = "button", onClick } = this.props;
    return <button onClick={onClick} type={type} className={style.button}>{this.props.children}</button>;
  }
}
