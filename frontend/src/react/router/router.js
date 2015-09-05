/*
 |--------------------------------------------------------------------------
 | React-router
 |
 | - All components are imported here
 |--------------------------------------------------------------------------
 **/

import { Component, createFactory, PropTypes } from 'react'
import { Route, RouteHandler, DefaultRoute, NotFoundRoute } from 'react-router'
import { _, div, transition } from 'dom-elements'

import Home from '../components/home/home'
import Login from '../components/login/login'

let route = _(Route),
    handler = _(RouteHandler),
    root = _(DefaultRoute),
    pageNotFound = _(NotFoundRoute);

class App extends Component {

    constructor() {

        super();
    }

    render() {

        let key = this.context.router.getCurrentPath();
        return (
            transition({component: 'div', className: 'container', transitionName: 'fade', transitionAppear: true},
                handler({key: key})
            )
        )
    }
}
App.contextTypes = {
    router: PropTypes.func
};

let Router = (
    route({path: '/', name: 'home', handler: App},
        root({handler: Home}),

        route({path: 'login', name: 'login', handler: Login})
    )
);

export { Router };