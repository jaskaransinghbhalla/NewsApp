import React, { Component } from 'react'
import loading from './loading.gif'

export default class Spinner extends Component {
    render() {
        return (
            <div className="text-center">
                <img className="" src={loading} alt="loading" />
            </div>
        )
    }
}
