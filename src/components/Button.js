import React from 'react';
class Button extends React.Component {
        render() {
                return (
                        <button className={`btn ${this.props.active && "active"}`} name={this.props.children} onClick={this.props.onClick}>{this.props.label}</button>
                )
        }
}
export default Button;