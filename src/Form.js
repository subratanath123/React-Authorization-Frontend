import React, {Component} from 'react';
import FormInput from "./FormInput";

export default class Form extends Component {
    constructor(props) {
        props.cssClass = 'col form-group';
        props.type = 'text';
        props.method = 'post';

        super(props);

        this.state = {}
    }

    render = () =>
        <form method={ this.props.method } action={ this.props.action }>
            { this.props.errors }
            { this.props.inputFields }
        </form>
}