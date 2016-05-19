import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames';
import alertify from 'alertify.js';
import AvatarHelper from './AvatarHelper';
import Profile from './Profile';
import ProfileForm from './ProfileForm';
import buttonStyles from './Buttons'

export default class ProfileContainer extends Component {

    constructor(props) {
        super(props);
        this.toggleProfileEdit = this.toggleProfileEdit.bind(this);
        this.handleProfileEditSubmit = this.handleProfileEditSubmit.bind(this);
        /* initial state */
        this.state = {
            profileData: {
                username: 'sir-code-a-lot',
                avatar: 'affe',
                email: 'sircodealot@comsysto.com'
            },
            toggleEdit: false
        };
        this.avatarHelper = new AvatarHelper();
        alertify.logPosition("top right");
    }

    toggleProfileEdit() {
        this.setState({toggleEdit: !this.state.toggleEdit});
    }

    handleProfileEditSubmit(formData) {
        alertify.success('profile saved');
        this.setState({toggleEdit: false});
        this.setState({profileData: formData});
    }

    render() {
        const formInitialValues = {
            initialValues: {
                username: this.state.profileData.username,
                avatar: this.state.profileData.avatar,
                email: this.state.profileData.email
            }
        };
        var toggleEditButton;
        var profile;
        if (!this.state.toggleEdit) {
            toggleEditButton = <button onClick={this.toggleProfileEdit} className={classNames(buttonStyles.primary, buttonStyles.ico_edit)}>edit profile</button>;
            profile = <Profile profileData={this.state.profileData}  />
        } else {
            toggleEditButton = <button onClick={this.toggleProfileEdit} className={classNames(buttonStyles.secondary, buttonStyles.ico_clear)}>cancel edit</button>;
            console.log('initialState:', formInitialValues);
            profile = <ProfileForm {...formInitialValues} onSubmit={this.handleProfileEditSubmit} parentSubmitting={false} />
        }
        return (
            <div>
                {toggleEditButton}
                <hr/>
                {profile}

            </div>
        );
    }
}
