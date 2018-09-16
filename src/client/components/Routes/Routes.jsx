import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { subscribe } from 'react-contextual';
import Prefetcher from './Prefetcher/Prefetcher.jsx';
import NotFound from './../pages/NotFound/NotFound.jsx';

@subscribe(store => ({
    routes: store.routes
}))
class PublicRoutes extends Component {
    static propTypes = {
        routes: PropTypes.arrayOf(PropTypes.object).isRequired
    };
    render() {
        return (
            <Switch>
                {this.props.routes.map(({ component: Component, ...route }) => (
                    <Route
                        key={'route-' + route.path}
                        exact={route.exact}
                        path={route.path}
                        render={props => (
                            <Prefetcher
                                {...props}
                                component={Component}
                                fetchFn={route.fetchFn}
                            />
                        )}
                    />
                ))}
                <Route component={NotFound} />
            </Switch>
        );
    }
}

export default PublicRoutes;
