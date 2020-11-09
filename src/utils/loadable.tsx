import React from 'react';
import Loadable from 'react-loadable';
import { Spin } from 'antd';

const LoadableComponent = (loader: any) =>
    Loadable({
        loader,
        loading() {
            return <Spin>loading</Spin>;
        }
    });

export default LoadableComponent;
