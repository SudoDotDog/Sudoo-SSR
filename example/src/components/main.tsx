/**
 * @author WMXPY
 * @namespace Example
 * @description Browser
 */

import * as React from "react";

export type MainComponentStates = {

    readonly value: string;
};

export class MainComponent extends React.Component<{}, MainComponentStates> {

    public readonly state: MainComponentStates = {

        value: '',
    };

    public componentDidMount() {

        this.setState({
            value: 'MOUNTED!',
        });
    }

    public render() {

        return (<div>
            <h1>Main</h1>
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
