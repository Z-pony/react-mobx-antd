import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';
import AsyncComponent from '@/route/AsyncComponent';
import { prefixPath } from '@/utils/constants';

// import "src/assets/css/app.less";

export default function RouterConfig() {
    // 路由配置
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    exact
                    path={'/'}
                    render={() => (
                        <AsyncComponent
                            component={() => import(/* webpackChunkName: "login" */ '@/pages/login/index')}
                        />
                    )}
                />
                <Route
                    path={prefixPath}
                    render={() => <AsyncComponent component={() => import(/* webpackChunkName: "app" */ '@/app')} />}
                />
                <Route render={() => <Redirect to={'/'} />} />
            </Switch>
        </BrowserRouter>
    );
}
