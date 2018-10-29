import Controller from '@ember/controller';

export default Controller.extend({
    uploadedFile: null,
    actions: {
        save() {
            let username = this.get('username');
            let email = this.get('email');
            let imgProfil = this.get('uploadedFile');
            let password = this.get('password');
            console.log(imgProfil.path);
            let user = this.store.createRecord("user", {
                username: username,
                email: email,
                imgProfil: imgProfil.path,
                password: password
            })
            user.save();
            this.set('username', '');
            this.set('email', '');
            this.set('password', '');
            this.set('imgProfil', '');
            this.transitionToRoute('user');
        },
        upload(e) {
            let self = this;
            e.preventDefault();
            var file = document.getElementById('imgProfil').files[0];
            let form = new FormData();
            form.append('imgProfil', file, file.name);
            $.ajax({
                url: "http://localhost:4500/api/users/image",
                data: form,
                contentType: false,
                processData: false,
                type: 'POST',
                success: function (data) {
                    self.set("uploadedFile", data)
                },
                error: function (msg) {
                    console.log('/-/-/-/-/-/-/-/-/-/-/-/-/-/');
                    console.log(msg);
                }
            })
        }
    }
});
