import * as React from 'react';
import { NewFolder } from '../new-folder/NewFolder';
import { Directory } from '../../store/directories/state';

interface IFolderTreeProps {
  root: Directory;
  addFolder: (payload: { name: string, parentMpath: number[] }) => void;
}
// interface IFolderTreeProps {
//   id: number;
//   name: string;
//   subfolders: IFolderTreeProps[];
// }
interface IFolderTreeState {}
// interface PlainTree extends Array<{ name: string; id: number; parentId?: number }> { }

// export function GenerateTree(plainTree: PlainTree, rootId: number, rootName: string): IFolderTreeProps {
//   return {
//     id: rootId,
//     name: rootName,
//     subfolders: plainTree
//       .filter((value) => value.parentId === rootId)
//       .map((value) => GenerateTree(plainTree, value.id, value.name))
//   };
// }

export class FolderTree extends React.Component<IFolderTreeProps, IFolderTreeState> {
  render() {
    return (
      <div className="folder">
        <strong >{this.props.root.name}</strong>
        <div className="subfolders">
          {this.props.root.subdirectories.map((directory) =>
            <FolderTree root={directory} addFolder={this.props.addFolder} />
          )}
          <NewFolder parentId={this.props.root.id} parentMPath={this.props.root.mpath} addFolder={this.props.addFolder} />
        </div>
      </div>
    );
  }
}