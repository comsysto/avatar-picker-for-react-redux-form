import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { reduxForm } from 'redux-form'
import classNames from 'classnames';
import alertify from 'alertify.js';

import AvatarHelper from './AvatarHelper';
import AvatarPicker from './AvatarPicker';
import buttonStyles from './Buttons.css'

export const fields = [ 'username', 'email', 'avatar' ]



const validate = values => {
    const errors = {}
    if (!values.username) {
        errors.username = 'Required'
    } else if (values.username.length > 15) {
        errors.username = 'Must be 15 characters or less'
    }
    if (!values.email) {
        errors.email = 'Required'
    }
    return errors
}

class ProfileForm extends Component {

    render() {
        var { fields: { avatar, username, email }, resetForm, handleSubmit, submitting, parentSubmitting } = this.props
        return (
            <form onSubmit={handleSubmit}>
                <table className="table">
                    <tbody>
                    <tr>
                        <th scope="row">Username</th>
                        <td>
                            <fieldset className={classNames('form-group', { 'has-warning': username.touched && username.error })}>
                                <input type="text" className={classNames('form-control', buttonStyles.inputNoRadius, { 'form-control-warning': username.touched && username.error })} placeholder="Username" {...username}/>
                                <small className={classNames('text-muted', 'form-control-label')}>
                                    {username.touched && username.error && <span>{username.error}</span>}
                                </small>
                            </fieldset>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Avatar</th>
                        <td>
                            <AvatarPicker {...avatar} />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Email</th>
                        <td>
                            <fieldset className={classNames('form-group', { 'has-warning': email.touched && email.error })}>
                                <input type="email" className={classNames('form-control', buttonStyles.inputNoRadius, { 'form-control-warning': email.touched && email.error })} placeholder="Password" {...email}/>
                                <small className={classNames('text-muted', 'form-control-label')}>
                                    {email.touched && email.error && <span>{email.error}</span>}
                                </small>
                            </fieldset>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">&nbsp;</th>
                        <td>
                            <fieldset className="form-group">
                                <button type="submit" className={classNames(buttonStyles.primary, buttonStyles.ico_login)} disabled={submitting || parentSubmitting}>
                                    {submitting ? <i/> : <i/>} Submit
                                </button>
                                <button type="button" className={classNames(buttonStyles.secondary, buttonStyles.ico_clear)} disabled={submitting || parentSubmitting} onClick={resetForm}>
                                    Clear Values
                                </button>
                            </fieldset>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        )
    }
}

ProfileForm.propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    parentSubmitting: PropTypes.bool.isRequired
}

export default reduxForm({
        form: 'synchronousValidation',
        fields,
        validate
    }
)(ProfileForm)
