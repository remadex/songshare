import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        console.log('user.index')
        return this.store.findAll('user');
    }
});
