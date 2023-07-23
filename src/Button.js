import React, {Component} from 'react';

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
    }

    static defaultProps = {
        className: "btn btn-warning btn-lg ms-2"
    }

    render = () =>
        <div className={`d-flex justify-content-${this.props.align} pt-3`}>
            <button type={ this.props.type } className={ this.props.className } onClick={ () => this.props.callback() }>
                { this.props.name }
            </button>
        </div>
}