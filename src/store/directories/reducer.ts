import { DirectoriesState, Directory, initialdirectoriesState } from './state';
import { DirectoryAction, DirectoryActionNames } from './actions';

function copyTree(root: Directory): Directory {
    return {
        id: root.id,
        mpath: root.mpath.slice(),
        name: root.name,
        subdirectories: root.subdirectories.map(copyTree)
    };
}

function getDirectoryByPath(root: Directory, mpath: number[]): Directory {
    let currentPath = root;
    for (let index of mpath) {
        currentPath = currentPath.subdirectories[index];
    }
    return currentPath;
}

function recountTreeMPathes(root: Directory) {
    root.subdirectories.forEach((value, index) => {
        value.mpath = root.mpath.concat(index);
        recountTreeMPathes(value);
    });
}

function removeDirectory(root: Directory, mpath: number[]): Directory {
    let relativeMPath = mpath.slice(-1)[0];
    let oldParent = getDirectoryByPath(root, mpath.slice(0, -1));
    let directory = oldParent.subdirectories.splice(relativeMPath, 1)[0];
    recountTreeMPathes(oldParent);
    return directory;
}

function addDirectory(root: Directory, directory: Directory) {
    let newLength = root.subdirectories.push({
        id: directory.id,
        name: directory.name,
        subdirectories: directory.subdirectories,
        mpath: root.mpath.concat(root.subdirectories.length)
    });
    let newDirectory = root.subdirectories[newLength - 1];
    if (newDirectory.subdirectories.length > 0) { recountTreeMPathes(newDirectory); }
}

export function directories(state: DirectoriesState = initialdirectoriesState, action: DirectoryAction): DirectoriesState {
    switch (action.type) {
        case DirectoryActionNames.VIEW_DIRECTORY:
            return state;
        case DirectoryActionNames.CREATE_DIRECTORY: {
            let newState = Object.assign({}, state, copyTree(state));
            newState.lastId++;
            let parent = getDirectoryByPath(newState, action.payload.parentMpath);
            addDirectory(parent, {
                id: newState.lastId,
                name: action.payload.name,
                subdirectories: [],
                mpath: []
            });
            return newState;
        }
        case DirectoryActionNames.EDIT_DIRECTORY: {
            let newState = Object.assign({}, state, copyTree(state));
            let relativeMPath = action.payload.mpath.slice(-1);
            let oldParent = getDirectoryByPath(newState, action.payload.mpath.slice(0, -1));
            let directory = getDirectoryByPath(oldParent, relativeMPath);
            directory.name = action.payload.name;
            let newParent = getDirectoryByPath(newState, action.payload.newParentMpath);
            if (oldParent === newParent) return newState;

            directory = removeDirectory(oldParent, relativeMPath);
            addDirectory(newParent, directory);
            return newState;
        }
        case DirectoryActionNames.DELETE_DIRECTORY: {
            let newState = Object.assign({}, state, copyTree(state));
            removeDirectory(newState, action.payload);
            return newState;
        }
        default:
            return state;
    }
}