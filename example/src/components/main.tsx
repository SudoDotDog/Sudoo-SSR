/**
 * @author WMXPY
 * @namespace Example
 * @description Main Component
 */

import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
// import * as MainStyle from "../../style/main.scss";

export type MainComponentStates = {

    readonly value: string;
};

export class MainComponent extends React.Component<RouteComponentProps, MainComponentStates> {

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
                <button onClick={() => this.props.history.push('/another')}>
                    Go to Another
                </button>
            </div>
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
