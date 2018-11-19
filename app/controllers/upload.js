import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    session: service('session'),
    uploadedMusic: null,
    uploadedImgMusic: null,
    actions : {
        fileUpdate(type){
            if(type === "music"){
                let file = document.getElementById('musicAccount').files[0];
                console.log(file)
                let box = document.getElementById('box_music');
                box.innerHTML = file.name
            } else {
                let file = document.getElementById('imgMusic').files[0];
                let box = document.getElementById('box_img');
                box.innerHTML = file.name
            }
        },
        save() {
            let title = this.get('title');
            let autor = this.get('session.data.authenticated.account_id');
            let music = this.get('uploadedMusic');
            let imgMusic = this.get('uploadedImgMusic');
            let year = this.get('year');
            let timestamp = Date.now();
            let genre = this.get('genre');
            genre = genre.trim().split(',')
            let description = "Une description lambda";
            console.log(music.path);
            let data = this.store.createRecord("music", {
                title: title,
                autor: autor,
                path: music.path,
                img: imgMusic.path,
                timestamp: timestamp,
                year: year,
                genre: genre,
                description: description
            })
            data.save();
            this.set('title', '');
            this.set('music', '');
            this.set('imgMusic', '');
            this.set('year', '');
            this.set('genre', '');
            this.transitionToRoute('user');
        },
        uploadImgMusic(e){
            let self = this;
            e.preventDefault();
            var file = document.getElementById('imgMusic').files[0];
            let form = new FormData();
            form.append('imgMusic', file, file.name);
            $.ajax({
                url: "http://localhost:4500/api/users/music/image",
                data: form,
                contentType: false,
                processData: false,
                type: 'POST',
                success: function (data) {
                    self.set("uploadedImgMusic", data)
                    document.getElementById('buttonUploadImgMusic').classList.add('uploadSucess')
                },
                error: function (msg) {
                    document.getElementById('buttonUploadImgMusic').classList.add('uploadFail')
                }
            })
        },
        uploadMusic(e) {
            let self = this;
            e.preventDefault();
            var file = document.getElementById('musicAccount').files[0];
            let form = new FormData();
            form.append('musicAccount', file, file.name);
            $.ajax({
                    url: "http://localhost:4500/api/users/music",
                    data: form,
                    contentType: false,
                    processData: false,
                    type: 'POST',
                    success: function (data) {
                        self.set("uploadedMusic", data)
                        document.getElementById('buttonUploadMusic').classList.add('uploadSucess')
                    },
                    error: function (msg) {
                        document.getElementById('buttonUploadMusic').classList.add('uploadFail')
                    }
            })
        }
    }
});
