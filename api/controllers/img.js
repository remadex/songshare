exports.postImage = async (req, res) => {
    console.log('----------------------------');
    console.log(req.file);
    res.send(req.file);
}