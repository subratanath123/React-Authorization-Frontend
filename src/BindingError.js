import React, {Component} from 'react';

export default class BindingError extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render = () =>
        <div className="invalid-feedback">
            { this.props.error }
        </div>
}