import * as React from 'react';
import { connect } from 'react-redux';

interface IDirectoryParams{
    id: number;
}

interface IDirectoryProps {
    params: IDirectoryParams;
};

interface IDirectoryState {};

class Directory extends React.Component<IDirectoryProps, IDirectoryState> {
    public render(): JSX.Element {
        return (<span>directory #{this.props.params.id}</span>);
    }
}

export default connect(
    (state) => ({
        // Map state to props
    }),
    {
        // Map dispatch to props
    })(Directory);
