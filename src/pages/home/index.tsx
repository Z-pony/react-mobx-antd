import * as React from 'react';
import { inject, observer } from 'mobx-react';

@inject('userStore')
@observer
class App extends React.Component<any, {}> {
    constructor(props) {
        super(props);
    }
    componentDidMount = () => {
        this.onSetName();
    };
    onSetName = (): void => {
        const { setName } = this.props.userStore;

        setName('yiyiyi');
        const { name } = this.props.userStore;

        this.onGoods();
    };
    onGoods = () => {
        const { name } = this.props.userStore;

        console.log(name, 'name ');
    };

    render() {
        const { name, user } = this.props.userStore;

        return <div className="zpony_city">{name} test</div>;
    }
}
// export default App;

// const App: React.FC = inject('userStore')(
//     useObserver(
//         (props: any): React.ReactElement => {
//             console.log(props);
//             return <div></div>;
//         }
//     )
// );

export default App;
