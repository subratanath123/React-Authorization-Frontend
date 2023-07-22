import React, {Component} from 'react';

export default class Input extends Component {
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
        <React.Fragment>
            <button type={ this.props.type } className={ this.props.className } onClick={ () => this.props.callback() }>
                { this.props.name }
            </button>
        </React.Fragment>
}