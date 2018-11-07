import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import config from 'songshare/config/environment';
import { inject as service } from '@ember/service';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
    namespace: config.NAMESPACE,
    host: 'http://localhost:4500',
    session: service('session'),
    authorize(xhr) {
        let { access_token } = this.get('session.data.authenticated');
        console.log(access_token);
        xhr.setRequestHeader('Authorization', `Bearer ${access_token}`);
    }
});

