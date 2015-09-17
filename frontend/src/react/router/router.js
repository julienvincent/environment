/*
 |--------------------------------------------------------------------------
 | React-router
 |
 | - All components are imported here
 |--------------------------------------------------------------------------
 **/

import { Component, createFactory, PropTypes, cloneElement } from 'react'
import { Router, IndexRoute, Route } from 'react-router'
import history from 'history/lib/createBrowserHistory'
import hash from 'history/lib/createHashHistory'
import { _, _ce, div, transition } from 'factories'
import env from 'env'

import Home from '../components/home/home'
import Login from '../components/login/login'

let route = _(Route),
    index = _(IndexRoute);

class App extends Component {

    constructor() {

        super();
    }

    render() {

        let key = this.props.location.pathname;
        return (
            transition({component: 'div', className: 'container', transitionName: 'fade', transitionAppear: true},
                _ce(this.props.children, {key: key})
            )
        )
    }
}
App.contextTypes = {
    history: PropTypes.history
};

let router = _(Router)({history: env.production ? history() : hash()},
    route({path: '/', component: App},
        index({component: Home}),

        route({path: 'login', component: Login})
    )
);

export default router;