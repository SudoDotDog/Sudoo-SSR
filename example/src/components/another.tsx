/**
 * @author WMXPY
 * @namespace Example
 * @description Another Component
 */

import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { AnotherStyle } from "../style/another.style";

export type AnotherComponentStates = {

    readonly value: string;
};

export class AnotherComponent extends React.Component<RouteComponentProps, AnotherComponentStates> {

    public readonly state: AnotherComponentStates = {

        value: '',
    };

    private readonly _anotherStyle = AnotherStyle.use();

    public componentDidMount() {

        this.setState({
            value: 'MOUNTED!',
        });
    }

    public render() {

        return (<div>
            <h1 className={this._anotherStyle.blueColor}>Another</h1>
            <div>
                <button onClick={() => this.props.history.push('/')}>
                    Go to Main
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
