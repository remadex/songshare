import DS from 'ember-data';

// import FormDataAdapterMixin from 'ember-cli-form-data/mixins/form-data-adapter';

export default DS.RESTAdapter.extend({
    namespace: 'api',
    host: 'http://localhost:4500'
});
