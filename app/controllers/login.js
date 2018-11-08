import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    session: service('session'),
    actions: {
        onSignUp(email, password) {
            this.get('session').authenticate('authenticator:oauth2', email, password)
              .catch((reason) => {
                this.set('errorMessage', reason.errors);
              });
        }
    }
});
