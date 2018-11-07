import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';

import config from 'songshare/config/environment';

const host = 'http://localhost:4500';
const namespace = 'api';
const serverTokenEndpoint = [host, namespace, 'token'];

export default OAuth2PasswordGrant.extend({
    serverTokenEndpoint: serverTokenEndpoint.join('/')
});