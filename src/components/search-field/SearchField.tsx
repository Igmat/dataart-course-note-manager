import * as React from 'react';

interface ISearchFieldProps {};

interface ISearchFieldState {};

export class SearchField extends React.Component<ISearchFieldProps, ISearchFieldState> {
    public render(): JSX.Element {
        return (<span>Search field</span>);
    }
}
