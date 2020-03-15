/**
 * @author WMXPY
 * @namespace Example
 * @description Index
 */

import * as React from "react";

export type EntryStates = {

    readonly value: string;
};

export class Entry extends React.Component<{}, EntryStates> {

    public readonly state: EntryStates = {

        value: '',
    };

    public componentDidMount() {

        this.setState({
            value: 'MOUNTED!',
        });
    }

    public render() {

        return (<div>
            <div>Hello World</div>
            <div>
                <div>There will be one more line below if mounted</div>
                <div>{this.state.value}</div>
            </div>
            <div>
                <button onClick={() => console.log('Hello World')}>
                    Log Something
                </button>
            </div>
        </div>);
    }
}
