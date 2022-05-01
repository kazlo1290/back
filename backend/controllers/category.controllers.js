const Category = require('../models/category.model')

exports.createCategory = (req, res) => {
    let name = req.body.name
    let image = req.file.path
    console.log(name, image)
    const categorys = new Category({
        nameI: name,
        imageI: image
    })
    categorys.save((err, category1) => {
        if (err) {
            console.log(err)
            return res.status(400).json({
                errors: err.meesage
            })
        }
        return res.json({
            message: "Амжилттай үүсгэлээ",
            category1
        })
    })

}