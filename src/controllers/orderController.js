const { count } = require("console")
const orderModel= require("../models/orderModel")
const product= require("../models/productModel")

const createOrder= async function (req, res) {
    let data = req.body

    // const date=moment().format('DD/MM/YYYY')
    // data['date']=date
    let amount=0;
    if(data['isFreeAppUser']=="true"){
        amount=0
    }else{
        amount=product.price
    }
    data['amount']=amount

    const savedData= await orderModel.create(data)
    console.log(savedData)
    res.send({data: savedData})
}

module.exports.createOrder= createOrder
