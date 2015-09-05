/*
 |--------------------------------------------------------------------------
 | Home component
 |--------------------------------------------------------------------------
 **/

import React from 'react'
import { div } from 'dom-elements'

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
            div({})
        )
    }
}
home.contextTypes = {
    router: React.PropTypes.func
};