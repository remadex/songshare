import Controller from '@ember/controller';

export default Controller.extend({
    uploadedFile: null,
    actions: {
        fileUpdate(type){
                let file = document.getElementById('imgProfil').files[0];
                let box = document.getElementById('box_img');
                box.innerHTML = file.name
        },
        save() {
            let username = this.get('username');
            let email = this.get('email');
            let imgProfil = this.get('uploadedFile');
            console.log(email);
            console.log(imgProfil);
            let password = this.get('password');
            console.log(email);
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
            this.transitionToRoute('login');
        },
        upload(e) {
            let self = this;
            e.preventDefault();
            var file = document.getElementById('imgProfil').files[0];
            let form = new FormData();
            form.append('imgProfil', file, file.name);
            $.ajax({
                url: "http://localhost:4500/api/users/image/profil",
                data: form,
                contentType: false,
                processData: false,
                type: 'POST',
                success: function (data) {
                    self.set("uploadedFile", data)
                    document.getElementById('buttonUpload').classList.add('uploadSucess')
                },
                error: function (msg) {
                    document.getElementById('buttonUpload').classList.add('uploadFail')
                }
            })
        }
    }
});
