import * as React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { configureStore } from './store/configure';
import App from './containers/App';
import Directory from './containers/Directory';
import Notice from './containers/Notice';
import SearchResults from './containers/SearchResults';

const store = configureStore();

export default class Root extends React.Component<any, any> {
    public render(): JSX.Element {
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path="/" component={App}>
                        <Route path="directories/:id" component={Directory} />
                        <Route path="notices/:id" component={Notice} />
                        <Route path="search/:query" component={SearchResults} />
                    </Route>
                </Router>
            </Provider>);
    }
}
