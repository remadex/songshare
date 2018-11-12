exports.postMusic = async (req, res) => {
    console.log('----------------------------');
    console.log(req.file);
    res.send(req.file);
}

/********************************/
/*------ POST A NEW USER ------*/
/******************************/
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.create = async (req, res) => {
    console.log('---------------------')
    console.log(req.body);
    var newUser = new User({
        username: req.body.user.username,
        imgProfil: req.body.user.imgProfil,
        email: req.body.user.email
    });
    User.register(newUser, req.body.user.password,
        function (err, user) {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    user, err
                });
            }
            console.log(user);
        });
}