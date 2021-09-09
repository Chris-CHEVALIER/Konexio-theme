import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <h1 className={`text-${localStorage.getItem("theme") === "light" ? "dark" : "light"}`}>
                    About
                </h1>
            </div>
        );
    }
}
