const mongoose = require('mongoose');
const ObjectId=mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( {
   
	userId:{
        type:ObjectId,
        ref:"userSchema"
    },
	productId: {
        type:ObjectId,
        ref:"productSchema"
    },
	amount: Number,
	date: String

}, { timestamps: true });

module.exports = mongoose.model('Author', orderSchema)
