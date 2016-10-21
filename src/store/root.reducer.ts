import { Reducer, combineReducers } from 'redux';
import { RootState } from './root.state';
import { directories } from './directories/reducer';
import { notices } from './notices/reducer';

export const rootReducer: Reducer<RootState> = combineReducers<RootState>({
    directories,
    notices
});