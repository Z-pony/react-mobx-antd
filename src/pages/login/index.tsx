import * as React from 'react';
import routerConfig from '@/route/config';
import { withRouter } from 'react-router-dom';
import { toJS } from 'mobx';
import { inject, observer } from 'mobx-react';
import { Button } from 'antd';
import { prefixPath } from '@/utils/constants';

interface IState {
    routerObj: Record<string, any>;
}
@inject('navStore')
@observer
class Login extends React.Component<any, IState> {
    constructor(props) {
        super(props);
    }
    toApp = () => {
        this.props.history.push(prefixPath + '/home/publish');
    };
    render() {
        return (
            <div className="zpony_city">
                <Button onClick={this.toApp}>去app</Button>
            </div>
        );
    }
}

export default withRouter(Login);
