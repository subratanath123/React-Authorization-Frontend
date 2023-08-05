import React from 'react';
import BindingError from './BindingError';
import Input from "./Input";
import { v4 as uuidv4 } from 'uuid';

const FormInput = (props) => {

    const uniqueId = uuidv4();

    const createRadioInput = () =>
        props.options.map((option, index) =>
            <label className="form-check form-check-inline"  key={`${uniqueId}_${index}`} >
                <Input type='radio'
                       className='form-check-input'
                       value={option}
                       id={`${index} ${option}`}
                       bindPath={props.bindPath}
                       hidden={props.hidden}
                       required={props.required}
                       errorClass={props.errorClass}
                       callback={(e) => props.callback(e)}/>
                <span className="form-check-label"> {option} </span>
            </label>
        )


    return (
        props.isSingleDiv === 'false' ? (
            <div className='col-md-6 mb-4 '>

                <div className="form-outline">
                    {props.type === 'radio' &&
                        createRadioInput()}

                    {props.type !== 'radio' &&
                        <Input type={props.type}
                               bindPath={props.bindPath}
                               value={props.value}
                               errorClass={props.errorClass}
                               placeholder={props.placeholder}
                               callback={(e) => props.callback(e)}
                        />
                    }

                    <BindingError hasError={props.error} error={props.error}/>

                    {
                        props.help &&
                        <small className="form-text text-muted">
                            {props.help}
                        </small>
                    }
                </div>
            </div>
        ) : (
            <div className='col-md-12 mb-4'>

                <div className="form-outline">
                    {props.type === 'radio' &&
                        createRadioInput()}

                    {props.type !== 'radio' &&
                        <Input type={props.type}
                               bindPath={props.bindPath}
                               value={props.value}
                               errorClass={props.errorClass}
                               placeholder={props.placeholder}
                               callback={(e) => props.callback(e)}
                        />
                    }

                    <BindingError hasError={props.error} error={props.error}/>

                    {
                        props.help &&
                        <small className="form-text text-muted">
                            {props.help}
                        </small>
                    }
                </div>
            </div>
        )
    )
}

export default FormInput;
