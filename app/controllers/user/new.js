import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        save() {
            let username = this.get('username');
            let email = this.get('email');
            let password = this.get('password');
            let user = this.store.createRecord('user', {
                username: username,
                email: email,
                password: password
            });
            user.save();
            this.set('username', '');
            this.set('email', '');
            this.set('password', '');
            this.transitionToRoute('');
        }
    }
});
