import Controller from '@ember/controller';
import Ember from 'ember';

const { get, set } = Ember;
export default Controller.extend({
    actions: {
        save() {
            var file = document.getElementById('file-field').files[0];
            let username = this.get('username');
            let email = this.get('email');
            let password = this.get('password');
            // console.log(file.name);
            // let imgProfil = this.get('imgProfil');
            // this.set('imgProfil', this.get('imgProfil'));
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

            let form = new FormData();

            form.append('username', this.get('username'));
            form.append('email', this.get('email'));
            form.append('imgProfil', file, file.name);
            form.append('password', this.get('password'));

            // console.log(this.get('username'));
            // console.log(this.get('email'));
            // console.log(this.get('password'));
            // console.log(file);
            // console.log(file.name);

            // console.log(form);
            console.log('-----------------------');
            for (var value of form.values()) {
                console.log("=========>" + value);
            }
            console.log('-----------------------');

            // var request = new XMLHttpRequest();
            // request.open("POST", "http://localhost:4500/api/users");
            // request.send("COUCOU");

            $.ajax({
                url: "http://localhost:4500/api/users",
                data: form,
                // cache: false,
                // contentType: false,
                processData: false,
                type: 'POST',
                success: function (data) {
                    console.log('*-*-*-*-*-*-*-*-*-*-*-*-*-*');
                    console.log(data);
                },
                error: function (msg) {
                    console.log('/-/-/-/-/-/-/-/-/-/-/-/-/-/');
                    console.log(msg);
                }
            })
            // console.log(this.get('imgProfil'));
            // user.save();
            this.set('username', '');
            this.set('email', '');
            this.set('password', '');
            this.set('imgProfil', '');
            this.transitionToRoute('user');
        }
    }
});
