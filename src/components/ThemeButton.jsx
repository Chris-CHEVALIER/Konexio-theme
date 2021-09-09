import React, { Component } from 'react'

export default class ThemeButton extends Component {
    render() {
        return (
            <div className={`bg-${this.props.theme} min-vh-100`}>
                <button
                className={`btn btn-${this.props.theme}`}
                onClick={this.props.onClick}
                >
                {this.props.theme === "light" ? "🌝 Dark" : "🌞 Light"}
                </button>
            </div>
        )
    }
}
