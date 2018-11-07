import RSVP from 'rsvp';
import Service, { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';

export default Service.extend({
    session: service('session'),
    store: service(),

    loadCurrentUser() {
        let userId = this.get('session.data.authenticated.account_id');
        console.log(userId);
        if (!isEmpty(userId)) {
            return this.get('store').findRecord('user', userId).then((user) => {
                console.log(user);
                this.set('user', user);
            });
        } else {
            return RSVP.resolve();
        }
    }
});
