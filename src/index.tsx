import React from 'react';
import ReactDOM from 'react-dom';
// import promiseFinally from 'promise.prototype.finally';
import AllPage from '@/pages';
import reportWebVitals from '@/reportWebVitals';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';
import stores from '@/stores';

import '@/index.less';

configure({ enforceActions: 'observed' });
// promiseFinally.shim();

ReactDOM.render(
    <Provider {...stores}>
        <AllPage />
    </Provider>,
    document.getElementById('root')
);
// ReactDOM.render(<AllPage />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
