import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { FolderTree } from '../components/folder-tree/FolderTree';
import { SearchField } from '../components/search-field/SearchField';
import { RootState } from '../store/root.state';
import { CreateDirectoryAction } from '../store/directories/actions';

interface IDispatchProps {
  onAddFolder: (payload: {name: string, parentMpath: number[]})=> void;
}
interface IAppProps extends RootState, IDispatchProps {
};

interface IAppState { };

class App extends React.Component<IAppProps, IAppState> {
  public render(): JSX.Element {
    return (
      <div>
        <aside><FolderTree root={this.props.directories} addFolder={this.props.onAddFolder} /></aside>
        <main>
          <SearchField />
          {this.props.children}
        </main>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch: Dispatch<any>): IDispatchProps {
  return {
    onAddFolder: (payload: { name: string, parentMpath: number[] }) => {
      dispatch(new CreateDirectoryAction(payload));
    }
  };
}

export default connect<RootState, IDispatchProps, {}>(
  (state: RootState) => {
    // Map state to props
    return state;
  },
  mapDispatchToProps
)(App);


// export class App extends React.Component<any, any> {
//   constructor() {
//     super();
//     this.state = null;
//   }
//   async componentWillMount() {
//     let data: PlainTree = await (await fetch('/directories')).json();
//     let rootValue = data.find((val) => val.parentId === undefined);
//     if (rootValue === undefined) return;
//     this.setState(GenerateTree(data, rootValue.id, rootValue.name));
//           <div className="App">
//             {(this.state !== null)
//               ? <FolderTree id={this.state.id} name={this.state.name} subfolders={this.state.subfolders} />
//               : null
//             }
//           </div>
//   }
//   render() {
//     return <div></div>;
//   }
// }
