import * as React from 'react';
import { connect } from 'react-redux';

interface ISearchResultsProps {};

interface ISearchResultsState {};

class SearchResults extends React.Component<ISearchResultsProps, ISearchResultsState> {
    public render(): JSX.Element {
        return (<span>Search</span>);
    }
}

export default connect(
    (state) => ({
        // Map state to props
    }),
    {
        // Map dispatch to props
    })(SearchResults);
