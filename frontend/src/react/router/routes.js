/*
 |--------------------------------------------------------------------------
 | React-router Routes file
 |--------------------------------------------------------------------------
 **/

import { Component, createFactory, PropTypes } from 'react'
import { Route, RouteHandler, DefaultRoute, NotFoundRoute } from 'react-router'

import Home from '../components/Home'

let route = createFactory(Route),
    handler = createFactory(RouteHandler),
    root = createFactory(DefaultRoute),
    pageNotFound = createFactory(NotFoundRoute),
    Transitions = createFactory(require('react/lib/ReactCSSTransitionGroup'));

class App extends Component {

    constructor() {

        super();
    }

    render() {

        let key = this.context.router.getCurrentPath();
        return (
            Transitions({component: 'div', transitionName: 'fade'},
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
        pageNotFound({handler: Home}),
        route({path: 'home', name: 'home', handler: Home})
    )
);

export { Router };