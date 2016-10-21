import { NoticesState, Notice, initialNoticeState } from './state';
import { NoticeAction, NoticeActionNames } from './actions';

export function notices(state: NoticesState = initialNoticeState, action: NoticeAction): NoticesState {
    switch (action.type) {
        case NoticeActionNames.VIEW_NOTICE:
            return state;
        case NoticeActionNames.CREATE_NOTICE:
            let newNotice: Notice = {
                name: action.payload.name,
                content: action.payload.content,
                parentid: action.payload.parentId
            };
            return Object.assign({}, state, {
                [state.lastId]: newNotice,
                lastId: state.lastId + 1
            });
        case NoticeActionNames.EDIT_NOTICE:
            let editedNotice: Notice = {
                name: action.payload.name,
                content: action.payload.content,
                parentid: action.payload.parentId
            };
            return Object.assign({}, state, {
                [action.payload.id]: editedNotice
            });
        case NoticeActionNames.DELETE_NOTICE:
            return Object.assign({}, state, {

            });
        default:
            return state;
    }
}