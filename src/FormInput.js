import React, {Component} from 'react';
import BindingError from './BindingError'
import Input from "./Input";

export default class FormInput extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    createRadioInput = () =>
        this.props.options.map(option =>
            <label className="form-check form-check-inline">
                <Input type='radio' className='form-check-input' bindPath={this.props.bindPath} value={option}/>
                <span className="form-check-label"> {option} </span>
            </label>
        )

    getInputField() {
        return <>
            {this.props.type === 'radio' &&
                this.createRadioInput()}

            {this.props.type !== 'radio' &&
                <Input type={this.props.type}
                       bindPath={this.props.bindPath}
                       value={this.props.value}
                       errorClass={this.props.errorClass}
                       placeholder={this.props.placeholder}
                       callback={(e) => this.props.callback(e)}
                />
            }

            <BindingError hasError={this.props.error} error={this.props.error}/>

            {
                this.props.help &&
                <small className="form-text text-muted">
                    {this.props.help}
                </small>
            }
        </>;
    }

    render = () => {
        return this.props.isSingleDiv ? (
            <div className='col-md-6 mb-4'>
                <div className="form-outline">
                    {this.getInputField()}
                </div>
            </div>
        ) : (
            <div className="form-outline mb-4">
                {this.getInputField()}
            </div>
        )
    }
}