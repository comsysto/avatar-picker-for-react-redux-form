import React, { Component, PropTypes } from 'react'
import AvatarHelper from './AvatarHelper';

export default class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.avatarHelper = new AvatarHelper();
    }

    render() {
        return (
            <table className="table">
                <tbody>
                <tr>
                    <th scope="row">Username</th>

                    <td>{this.props.profileData.username}</td>
                </tr>
                <tr>
                    <th scope="row">Avatar</th>
                    <td><img src={this.avatarHelper.avatarUrlKey(this.props.profileData.avatar)} /></td>
                </tr>
                <tr>
                    <th scope="row">Email</th>
                    <td>{this.props.profileData.email}</td>
                </tr>
                </tbody>
            </table>
        );
    }
}



