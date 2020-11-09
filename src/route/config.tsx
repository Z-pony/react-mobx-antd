import LoadableComponent from '@/utils/loadable';
import { prefixPath } from '@/utils/constants';

// const Publish = loadable(() => import('@/pages/publish/index'));

export default [
    {
        title: '首页',
        key: `${prefixPath}/home`,
        show: true,
        children: [
            {
                title: '发布',
                key: `${prefixPath}/home/publish`,
                component: LoadableComponent(() => import('@/pages/home/index')),
                show: true
            },
            {
                link: `${prefixPath}/home/city`,
                title: '城市',
                key: `${prefixPath}/home/city`,
                component: LoadableComponent(() => import('@/pages/city/index')),
                show: true
            }
        ]
    },
    {
        title: '城市',
        key: `${prefixPath}/city`,
        component: LoadableComponent(() => import('@/pages/city/index')),
        show: true
    }
    // {
    //     link: `${prefixPath}city`,
    //     title: '同城',
    //     component: () => import('@/pages/city'),
    //     show: true
    // }
];
