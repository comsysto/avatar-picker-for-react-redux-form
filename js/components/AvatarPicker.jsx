import React, { Component, PropTypes } from 'react'
import AvatarHelper from './AvatarHelper';

import classNames from 'classnames/bind';
import pickerStyles from './AvatarPicker.css'
let cx = classNames.bind(pickerStyles);

export default class AvatarPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value // initialize state from value prop given by redux-form
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({value: nextProps.value}); // update state when props change
    }

    updateValue(value) {
        this.setState({value: value});  // change local state
        this.props.onChange(value);     // notify redux-form
    }

    render() {
        this.avatarHelper = new AvatarHelper();
        const {value} = this.state;
        return (
            <div>
                <ul className={pickerStyles.container}>
                    {this.avatarHelper.getAvatarKeys().map(avatarOption => (
                        <li onClick={() => {console.log(avatarOption); this.updateValue(avatarOption); }}
                            key={avatarOption} className={cx('element', { 'selected': this.state.value === avatarOption}, { 'unselected': this.state.value !== avatarOption})}>
                            <img src={this.avatarHelper.avatarUrlKey(avatarOption)}/>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
