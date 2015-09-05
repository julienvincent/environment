/*
 |--------------------------------------------------------------------------
 | Login component
 |--------------------------------------------------------------------------
 **/

import React from 'react'
import { div } from 'dom-elements'

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
            div({})
        )
    }
}
login.contextTypes = {
    router: React.PropTypes.func
};