import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel() {
        console.log("before");
    },
    model() {
        console.log('user global')
        // return this.store.findAll('user', { reload: true });
    }
});
