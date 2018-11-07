import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

const AUTHENTICATOR = 'authenticator:oauth2';

export default Route.extend({
    session: service(),
    actions: {
        onSignUp(email, password) {
            console.log('email', email);
            console.log('password', password);
            this.get('session').authenticate('authenticator:oauth2', email, password)
        }
    }
});