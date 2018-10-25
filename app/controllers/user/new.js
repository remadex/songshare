import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
    actions: {
        save() {
            var file = document.getElementById('file-field').files[0];
            let username = this.get('username');
            let email = this.get('email');
            let password = this.get('password');
            console.log(file);
            // let imgProfil = this.get('imgProfil');
            this.set('imgProfil', this.get('imgProfil'));
            // let user = this.store.createRecord('user', {
            //     username: username,
            //     imgProfil: file,
            //     email: email,
            //     password: password
            // });
            let data = {
                username: username,
                imgProfil: file,
                email: email,
                password: password
            };
            $.ajax({
                type: "POST",
                contentType: "application/json",
                url: "http://localhost:4500/api/users",
                data: JSON.stringify(data)
            })
            console.log(this.get('imgProfil'));
            // user.save();
            this.set('username', '');
            this.set('email', '');
            this.set('password', '');
            this.set('imgProfil', '');
            this.transitionToRoute('user');
        }
    }
});
