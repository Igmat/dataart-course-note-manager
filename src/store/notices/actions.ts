import { FSASucces } from '../FSA';

export namespace NoticeActionNames {
    export const VIEW_NOTICE = 'VIEW_NOTICE' as 'VIEW_NOTICE';
    export const CREATE_NOTICE = 'CREATE_NOTICE' as 'CREATE_NOTICE' ;
    export const EDIT_NOTICE = 'EDIT_NOTICE' as 'EDIT_NOTICE';
    export const DELETE_NOTICE = 'DELETE_NOTICE' as 'DELETE_NOTICE';
}
export type NoticeAction =
    ViewNoticeAction |
    CreateNoticeAction |
    EditNoticeAction |
    DeleteNoticeAction;

export class ViewNoticeAction extends
    FSASucces<number> {
    type = NoticeActionNames.VIEW_NOTICE;
}
export class CreateNoticeAction extends
    FSASucces<{
        name: string,
        content: string,
        parentId: number
    }> {
    type = NoticeActionNames.CREATE_NOTICE;
}
export class EditNoticeAction extends
    FSASucces<{
        id: number,
        name: string,
        content: string,
        parentId: number
    }> {
    type = NoticeActionNames.EDIT_NOTICE;
}
export class DeleteNoticeAction extends FSASucces<number> {
    type = NoticeActionNames.DELETE_NOTICE;
}