/*
 |--------------------------------------------------------------------------
 | React render
 |--------------------------------------------------------------------------
 **/

import React from 'react'
import Router from 'react-router'
import Transition from 'react/lib/ReactCSSTransitionGroup';
import Flux from './flux'

import Home from './components/Home'

let route = React.createFactory(Router.Route);
let notFoundRoute = React.createFactory(Router.NotFoundRoute);
let defaultRoute = React.createFactory(Router.DefaultRoute);
let routeHandler = React.createFactory(Router.RouteHandler);
let transition = React.createFactory(TransitionGroup);

class Container extends React.Component {

    render() {
        let name = this.context.router.getCurrentPath();
        return (
            transition({component: 'div', className: 'container'},
                routeHandler({key: name})
            )
        )
    }
}

let routes = (
    route({name: 'home', path: '/', handler: Container},

        notFoundRoute({handler: Home}),
        defaultRoute({handler: Home})
    )
);

// Disable Router.HistoryLocation to stop pretty urls. Better to remove while in development
Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(React.createElement(Handler, {}), document.body);
});