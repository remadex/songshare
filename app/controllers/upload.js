import Controller from '@ember/controller';

export default Controller.extend({
    uploadedFile: null,
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
        save(){

        },
        uploadImgMusic(e){

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
                },
                error: function (msg) {
                    console.log('/-/-/-/-/-/-/-/-/-/-/-/-/-/');
                    console.log(msg);
                }
            })
        }
    }
});
