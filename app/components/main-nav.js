import Component from '@ember/component';
import { inject as service } from '@ember/service';
import ENV from "songshare/config/environment";

export default Component.extend({
    session: service('session'),
    sessionAccount: service('session-account'),
    server: ENV.SERVER,
    actions: {
        logout() {
            this.get('session').invalidate();
        }
    }
});
