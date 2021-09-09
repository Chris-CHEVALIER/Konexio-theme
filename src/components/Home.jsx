import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1 className={`text-${localStorage.getItem("theme") === "light" ? "dark" : "light"}`}>
                    Home
                </h1>
            </div>
        )
    }
}
