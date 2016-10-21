import { createStore, applyMiddleware, compose } from 'redux';
import * as createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { RootState, initialRootState } from './root.state';
import { rootReducer } from './root.reducer';
import { FSAMiddleware } from './FSA';

export function configureStore(preloadedState: RootState = initialRootState) {
    return createStore<RootState>(
        rootReducer,
        preloadedState,
        compose(
            applyMiddleware(thunk, FSAMiddleware, /*api,*/ createLogger()),
        )
    );
}