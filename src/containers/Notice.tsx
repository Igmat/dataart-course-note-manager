import * as React from 'react';
import { connect } from 'react-redux';

interface INoticeParams {
    id: number;
}

interface INoticeProps {
    params: INoticeParams;
};

interface INoticeState { };

class Notice extends React.Component<INoticeProps, INoticeState> {
    public render(): JSX.Element {
        return (<span>notice #{this.props.params.id}</span>);
    }
}

export default connect(
    (state) => ({
        // Map state to props
    }),
    {
        // Map dispatch to props
    })(Notice);
