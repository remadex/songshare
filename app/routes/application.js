import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        console.log('user global')
        return this.store.findAll('user', { reload: true });
    }
});
