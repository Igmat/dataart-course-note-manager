import { FSASucces } from '../FSA';

export namespace DirectoryActionNames {
    export const VIEW_DIRECTORY = 'VIEW_DIRECTORY' as 'VIEW_DIRECTORY';
    export const CREATE_DIRECTORY = 'CREATE_DIRECTORY' as 'CREATE_DIRECTORY';
    export const EDIT_DIRECTORY = 'EDIT_DIRECTORY' as 'EDIT_DIRECTORY';
    export const DELETE_DIRECTORY = 'DELETE_DIRECTORY' as 'DELETE_DIRECTORY';
}
export type DirectoryAction =
    ViewDirectoryAction |
    CreateDirectoryAction |
    EditDirectoryAction |
    DeleteDirectoryAction;

export class ViewDirectoryAction extends
    FSASucces<number[]> {
    type = DirectoryActionNames.VIEW_DIRECTORY;
}
export class CreateDirectoryAction extends
    FSASucces<{
        name: string,
        parentMpath: number[]
    }> {
    type = DirectoryActionNames.CREATE_DIRECTORY;
}
export class EditDirectoryAction extends
    FSASucces<{
        mpath: number[],
        name: string,
        newParentMpath: number[]
    }> {
    type = DirectoryActionNames.EDIT_DIRECTORY;
}
export class DeleteDirectoryAction extends
    FSASucces<number[]> {
    type = DirectoryActionNames.DELETE_DIRECTORY;
}
