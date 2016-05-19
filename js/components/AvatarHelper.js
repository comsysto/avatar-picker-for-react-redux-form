const avatar_base_url = 'https://comsysto.github.io/avatar-picker-for-react-redux-form/avatars/'

export default class AvatarHelper {

    getAvatarKeys() {
        return [ 'default', 'schweinchen', 'affe', 'zebra', 'biber', 'henne', 'ente', 'kueken', 'pinguin' ]
    }

    avatarUrlKey(avatarKey) {
        if (avatarKey === undefined || avatarKey === null || avatarKey === '') {
            return avatar_base_url + 'default.png';
        }
        return avatar_base_url + avatarKey + '.png';
    }

}

