const avatarBaseUrl = 'https://comsysto.github.io/avatar-picker-for-react-redux-form/avatars/';

export default class AvatarHelper {

  getAvatarKeys() {
    return ['default', 'schweinchen', 'affe', 'zebra', 'biber', 'henne', 'ente', 'kueken', 'pinguin'];
  }

  avatarUrlKey(avatarKey) {
    if (avatarKey === undefined || avatarKey === null || avatarKey === '') {
      return `${avatarBaseUrl}default.png`;
    }
    return `${avatarBaseUrl}${avatarKey}.png`;
  }

}
