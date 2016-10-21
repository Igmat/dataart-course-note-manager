export interface Directory {
    id: number;
    mpath: number[];
    name: string;
    subdirectories: Directory[];
}

export interface DirectoriesState extends Directory {
    lastId: number;
}

export const initialdirectoriesState: DirectoriesState = {
    lastId: 0,
    id: 0,
    mpath: [],
    name: 'root',
    subdirectories: []
};