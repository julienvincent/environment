/*
 |--------------------------------------------------------------------------
 | Home component
 |--------------------------------------------------------------------------
 **/

import React from 'react'
import { div } from 'factories'

export default
class home extends React.Component {

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
            div({}, "Home")
        )
    }
}
home.contextTypes = {
    history: React.PropTypes.history
};