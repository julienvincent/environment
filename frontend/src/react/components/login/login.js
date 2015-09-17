/*
 |--------------------------------------------------------------------------
 | Login component
 |--------------------------------------------------------------------------
 **/

import React from 'react'
import { div } from 'factories'

export default
class login extends React.Component {

    constructor() {

        super();

        this.state = {}
    }

    componentWillMount() {

    }

    componentWillUnmount() {

    }

    render() {

        return (
            div({}, "Login")
        )
    }
}
login.contextTypes = {
    history: React.PropTypes.history
};