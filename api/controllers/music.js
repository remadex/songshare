const Music = require('../models/music');
/********************************/
/*------ POST A NEW MUSIC ------*/
/******************************/
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */

exports.create = async (req, res) => {
    console.log('---------------------')
    console.log(req.body);
    var newMusic = new Music({
        title: req.body.music.title,
        autor: req.body.music.autor,
        path: req.body.music.path,
        img: req.body.music.img,
        timestamp: req.body.music.timestamp,
        year: req.body.music.year,
        genre: req.body.music.genre,
        description: req.body.music.description
    });
    newMusic.save();
    res.json()
}

exports.postImgMusic = async (req, res) => {
    console.log('----------------------------');
    console.log(req.file);
    res.send(req.file);
}

exports.postMusic = async (req, res) => {
    console.log('----------------------------');
    console.log(req.file);
    res.send(req.file);
}

exports.getMusics = async (req, res) => {
    
}


// exports.create = async (req, res) => {
//     console.log('---------------------')
//     console.log(req.body);
//     var newUser = new User({
//         username: req.body.user.username,
//         imgProfil: req.body.user.imgProfil,
//         email: req.body.user.email
//     });
//     User.register(newUser, req.body.user.password,
//         function (err, user) {
//             if (err) {
//                 console.log(err);
//                 return res.status(500).json({
//                     user, err
//                 });
//             }
//             console.log(user);
//         });
// }