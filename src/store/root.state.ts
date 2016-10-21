import { DirectoriesState, initialdirectoriesState } from './directories/state';
import { NoticesState, initialNoticeState } from './notices/state';

export interface RootState {
    readonly directories: DirectoriesState;
    readonly notices: NoticesState;
}

export const initialRootState: RootState = {
    directories: initialdirectoriesState,
    notices: initialNoticeState
};