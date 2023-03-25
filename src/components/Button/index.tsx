import React from 'react';
import style from './Button.module.scss';

export default class Button extends React.Component {
  render() {
    return (
      <button className={style.button}>
        Button
      </button>
    )
  }
}