exports.sendReqParam = (req, res) => {
        let image = req.params.image;
        res.render("index", { name: image });
};