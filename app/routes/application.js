import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
// const { service } = Ember.inject;

export default Route.extend(ApplicationRouteMixin, {
    // sessionAccount: service('session-account'),
    // beforeModel() {
    //     return this._loadCurrentUser();
    // },
    // model() {
    //     console.log('user global')
    //     return this.store.findAll('user', { reload: true });
    // },


    sessionAccount: service(),

    beforeModel() {
        return this._loadCurrentUser();
    },

    sessionAuthenticated() {
        this._super(...arguments);
        this._loadCurrentUser();
    },

    _loadCurrentUser() {
        return this.get('sessionAccount').loadCurrentUser().catch(() => this.get('session').invalidate());
    }
});
