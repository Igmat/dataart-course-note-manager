import * as React from 'react';

interface INewFolderProps {
    parentId: number;
    parentMPath: number[];
    addFolder: (payload: { name: string, parentMpath: number[] }) => void;
};

interface INewFolderState {
    name: string;
};

export class NewFolder extends React.Component<INewFolderProps, INewFolderState> {
    public constructor(props: INewFolderProps) {
        super(props);
        this.state = {
            name: ''
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    public handleNameChange(e: React.FormEvent<HTMLInputElement>) {
        this.setState({
            name: e.currentTarget.value
        });
    }
    public handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        this.props.addFolder({
            name: this.state.name,
            parentMpath: this.props.parentMPath
        });
    }
    public render(): JSX.Element {
        return (
            <form className="newFolder" onSubmit={this.handleSubmit}>
                <input
                    value={this.state.name}
                    onChange={this.handleNameChange}
                    type="text"
                    placeholder="New folder..." />
            </form>
        );
    }
}
