[![](https://comsysto.github.io/avatar-picker-for-react-redux-form/img/avatar-picker-banner.svg)](https://github.com/comsysto/avatar-picker-for-react-redux-form)

A simple avatar picker to use as custom input component in your [redux-form](https://github.com/erikras/redux-form).

You can see a **[demo of the Avatar Picker](https://comsysto.github.io/avatar-picker-for-react-redux-form/)**

[![](https://comsysto.github.io/avatar-picker-for-react-redux-form/img/demo-button.svg)](https://comsysto.github.io/avatar-picker-for-react-redux-form/)

----

#### Preview

[![](https://comsysto.github.io/avatar-picker-for-react-redux-form/img/preview-avatar-picker.gif)](https://comsysto.github.io/avatar-picker-for-react-redux-form/)

----

#### License

  * Code Licensed under the [MIT License](./LICENSE.md)
  * [Funny animals collection Free Vector By freepik](http://www.freepik.com/free-vector/funny-animals-collection_765907.htm)

#### Howto use

  * Best is your project uses the **[essential-react](https://github.com/pheuter/essential-react)** buildchain then you can easily use the components provided here.
  * You will need pute these three Components somewhere in your Application
    * **[AvatarHelper.js]()
    * **[AvatarPicker.css]()
    * **[AvatarPicker.jsx]()
  * Then you can use the Avatar Picker like this

```
import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import AvatarPicker from './AvatarPicker';

class SomeForm extends Component {

	// redux form init here ...
    render() {
        var { fields: { avatar, username }, resetForm, handleSubmit, submitting } = this.props
        return (
            <form onSubmit={handleSubmit}>
				<input type="text" placeholder="Username" {...username}/> <br/>
                <AvatarPicker {...avatar} />
			</form>
		)
	}
}
// redux form mapPropsToState here ...
...


  
  


