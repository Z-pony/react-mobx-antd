import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoadableComponent from '@/utils/loadable';
import { prefixPath } from '@/utils/constants';

/**
 * // 映射Route组件
 * @param {string} key 路由路径
 * @param {function|ReactNode} component
 */
function mapRoute({ key, component }: { key: string; component: any }) {
    return <Route exact key={key} path={key} component={component} />;
}
export default function ContentRoutes({ routerConfig }: { routerConfig: any[] }) {
    return (
        <Switch>
            {/* <Route exact key={prefixPath} path={prefixPath} /> */}
            {routerConfig.map((item) =>
                !!item.show && !!item.component ? mapRoute(item) : (item.children as any).map((r: any) => mapRoute(r))
            )}
            <Route component={LoadableComponent(() => import('@/pages/notFound/index'))} />
        </Switch>
    );
}
