import React, {Component} from 'react';
import BindingError from './BindingError'

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {
        className: "form-control form-control-lg"
    }

    render = () =>
        <React.Fragment>
            <input type={this.props.type}
                   id={this.props.bindPath}
                   name={this.props.bindPath}
                   value={this.props.value}
                   className={`${ this.props.className } ${ this.props.errorClass }`}
                   placeholder={this.props.placeholder || this.props.bindPath}
                   onChange={(e) => this.props.callback(e)} />
        </React.Fragment>
}