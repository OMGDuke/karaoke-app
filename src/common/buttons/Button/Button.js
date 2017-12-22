import React, { Component } from 'react';
import './Button.css';

import classNames from 'classnames';

class Button extends Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.classes = this.findClasses();
  }

  findClasses() {
    return classNames({
      'button--warning': ( this.props.type === 'warning' ),
      'button--error': ( this.props.type === 'error' ),
      'button--success': ( this.props.type === 'success' )
    });
  }

  handleClick(e) {
    e.preventDefault();
    const action = this.props.action;
    action ? this.props.action() : false;
  }

  render() {
    return (
      <div className={`Button ${this.classes}`}>
        <a href="#" onClick={this.handleClick}>{this.props.children}</a>
      </div>
    );
  }
}

export default Button;