export interface Notice {
    name: string;
    content: string;
    parentid: number;
}

export interface NoticesState {
    lastId: number;
    [id: number]: Notice;
}

export const initialNoticeState: NoticesState = {
    lastId: 0
};