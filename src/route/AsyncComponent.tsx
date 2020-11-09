import React, { Suspense } from 'react';
import { Spin } from 'antd';
// import { styles, antIcon } from './AsyncComponentNotRerender';

/**
 * // React lazy 异步组件, 组件会重新渲染
 * @param {function|ReactNode} component () => import(..)
 */
function AsyncComponent({ component }: { component: any }) {
    const RouteComponent = React.lazy(component);

    return (
        <Suspense fallback={<Spin />}>
            <RouteComponent />
        </Suspense>
    );
}

export default AsyncComponent;
