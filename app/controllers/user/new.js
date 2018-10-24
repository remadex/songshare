import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        save() {
            let username = this.get('username');
            let email = this.get('email');
            let password = this.get('password');
            let imgProfil = this.get('imgProfil');
            console.log(imgProfil);
            let user = this.store.createRecord('user', {
                username: username,
                email: email,
                imgProfil: imgProfil,
                password: password
            });
            user.save();
            this.set('username', '');
            this.set('email', '');
            this.set('password', '');
            this.set('imgProfil', '');
            this.transitionToRoute('user');
        }
    }
});
