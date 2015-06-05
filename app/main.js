import React from 'react';
//import App from './app';

import Router from 'react-router';



require("styles/global.less");
require("static?!./favicon.ico?output=favicon.ico");

var {DefaultRoute, Route, Link, RouteHandler} = Router;

// simple test to ensure babel is working
let foo = 'foo',
    bar = 'bar';

var obj = {foo, bar};

window.console.log('load main JS file with es6', obj);
// end simple test


class Code extends React.Component {
    render() {
        return (
            <div>
                <h1>Code</h1>
                <ul>
                    <li><Link to="app">Home</Link></li>
                </ul>
            </div>
        );
    }
}


var App = React.createClass({
    render () {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><Link to="code">Code</Link></li>
                </ul>
                <RouteHandler />
            </div>
        )
    }
});



var routes = (
    <Route>
        <Route name="code" path="code" handler={Code}/>
        <Route name="app" path="/" handler={App} />
        <DefaultRoute handler={App}/>
    </Route>
);

Router.run(routes, (Handler) => {
    React.render(<Handler/>, document.body);
});
