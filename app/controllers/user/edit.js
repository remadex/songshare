import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import ENV from "songshare/config/environment";

export default Controller.extend({
    server: ENV.SERVER,
    session: service('session'),
    actions: {
        fileUpdate(type){
            let file = document.getElementById('imgProfil').files[0];
            let box = document.getElementById('box_img');
            box.innerHTML = file.name
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
                    console.log(data);
                    document.getElementById("editImage").setAttribute('src', `${self.server}/${data.path}`)
                },
                error: function (msg) {
                    console.log('/-/-/-/-/-/-/-/-/-/-/-/-/-/');
                    console.log(msg);
                }
            })
        },
        save(id) {
            let username = this.get('model.username');
            let email = this.get('model.email');
            let editPassword = document.getElementById("editPassword").value;
            console.log(editPassword);
            console.log("-----------");
            if(editPassword != "password")
            {
                let password = editPassword;
            }
            let imgProfil = this.get('uploadedFile');

            console.log(imgProfil);
            // this.store.findRecord('user', id).then((data) => {
            //     data.set("username")
            // })
            // let test = this.get('session').then(data => console.log(data));
            // console.log(test);
            // this.get('model').save().then((data) => {
            //     console.log("ok edit")
            //     return this.transitionToRoute('user');
            // })
        },
        del: function () {
            this.get('model').deleteRecord();
            this.get('model').save();
            return this.transitionToRoute('user');
        }
    }
});
