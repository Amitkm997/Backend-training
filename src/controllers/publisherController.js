const publisherModel= require("../models/publisherModel")

const createpublisher= async function (req, res) {
    let author = req.body
    let publisherCreated = await publisherModel.create(author)
    res.send({data: publisherCreated})
}

const getPublisherData= async function (req, res) {
    let publisher = await publisherModel.find()
    res.send({data: publisher})
}

module.exports.createpublisher= createpublisher
module.exports.getPublisherData= getPublisherData