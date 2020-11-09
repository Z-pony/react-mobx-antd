import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import ContentRoutes from '@/route/index';
import routerConfig from '@/route/config';
import cs from 'classnames';
import { inject, observer } from 'mobx-react';

const { Sider, Content } = Layout;
const { SubMenu } = Menu;
/**
 * // 获取菜单组件
 * @param {array} menusData
 */
const getNavMenuItems = (menusData: any) => {
    if (!Array.isArray(menusData)) {
        return [];
    }
    return menusData.map((menu) => {
        return getSubMenuOrItem(menu);
    });
};

/**
 * // 获取子菜单
 * @param {object} menu
 */

const getSubMenuOrItem = (menu: any) => {
    const { key, title, children, show } = menu;

    if (Array.isArray(children)) {
        return (
            show && (
                <SubMenu
                    key={key}
                    title={
                        <span>
                            <span>{title}</span>
                        </span>
                    }
                >
                    {getNavMenuItems(children)}
                </SubMenu>
            )
        );
    }
    return show && <Menu.Item key={key}>{getkeyPath(menu)}</Menu.Item>;
};

/**
 * // 根据子菜单映射子路由
 * @param {string} key 路由路径
 * @param {title} title 子菜单名称
 * @param {icon} icon 图标
 */

const getkeyPath = ({ title, icon, key }: { key: string; title: string; icon: any }) => {
    // const { onCollapse } = this.props;

    return (
        <Link to={key}>
            <span>
                {icon && <img src={icon} />} <span>{title}</span>
            </span>
        </Link>
    );
};

interface IState {
    roterToKey: Record<string, any>;
}
@inject('navStore')
@observer
class App extends React.Component<any, IState> {
    constructor(props) {
        super(props);
        this.state = {
            roterToKey: {}
        };
    }
    componentDidMount = async () => {
        await this.getRoterToKey(routerConfig, '');
        this.openAndSelectRouteByPathName();
    };
    /**
     * 路由转化成键值对的形式
     * @param ChildrenRouters 路由数组
     * @param parentKey 路由数组对应的父路由的key
     */
    getRoterToKey = (childrenRouters: any, parentKey: string) => {
        childrenRouters.forEach((childRouter) => {
            console.log(childRouter, 'childRouter');
            this.setState((prevState, props) => ({
                roterToKey: {
                    ...prevState.roterToKey,
                    [childRouter.key]: {
                        openKeys: parentKey ? [parentKey] : [],
                        selectedKeys: [childRouter.key]
                    }
                }
            }));

            if (!!childRouter.children) {
                this.getRoterToKey(childRouter.children, childRouter.key);
            }
        });
    };
    // 根据pathName展开并选中导航
    openAndSelectRouteByPathName = () => {
        const { setOpenKeys, setSelectedKeys } = this.props.navStore;
        const { pathname } = this.props.history.location;
        const { roterToKey } = this.state;

        // const menu = routerConfig.find((item) => item.key === pathname);
        if (!!roterToKey[pathname]) {
            setOpenKeys(roterToKey[pathname].openKeys);
            setSelectedKeys(roterToKey[pathname].selectedKeys);
        }
    };
    // 选中导航
    onSelect = ({ item, key, keyPath, selectedKeys, domEvent }) => {
        const { setOpenKeys, setSelectedKeys } = this.props.navStore;

        setSelectedKeys(selectedKeys);
        const keys = routerConfig.find((item) => item.key === selectedKeys[0]);

        if (!!keys && !keys.children) {
            setOpenKeys([]);
        }
    };
    // 收起展开导航
    onOpenChange = (openKeys: string[]) => {
        const { setOpenKeys, setSelectedKeys, selectedKeys } = this.props.navStore;
        // 不收起导航

        if (openKeys.length === 0) {
            return false;
        } else {
            setOpenKeys([openKeys[openKeys.length - 1]]);
        }
        if (openKeys && Array.isArray(openKeys) && openKeys.length > 0) {
            const keys = routerConfig.find((item) => item.key === openKeys[0]);

            void (keys.children ? setSelectedKeys(keys.children[0].key) : setSelectedKeys(selectedKeys));
            const { history, navStore } = this.props;

            history.push(navStore.selectedKeys);
        }
    };
    render() {
        const { openKeys, selectedKeys } = this.props.navStore;

        return (
            <Layout>
                <Sider trigger={null}>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        openKeys={openKeys}
                        selectedKeys={selectedKeys}
                        onOpenChange={this.onOpenChange}
                        onSelect={this.onSelect}
                    >
                        {getNavMenuItems(routerConfig)}
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24
                        }}
                    >
                        <ContentRoutes routerConfig={routerConfig} />
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default withRouter(App);

// function App(props: any) {
//     const [collapsed, setCollapsed] = useState(false);
//     // setCollapsed(!collapsed);
// }
