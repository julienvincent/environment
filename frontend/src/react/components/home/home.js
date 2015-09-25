/*
 |--------------------------------------------------------------------------
 | Home component
 |--------------------------------------------------------------------------
 **/

import React, { PropTypes } from 'react'
import { div } from 'factories'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as users from '../../flux/actions/users'

export default
@connect(
        state => {
        return {
            users: state.users
        }
    },
        dispatch => bindActionCreators(users, dispatch)
)
class Home extends React.Component {

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
