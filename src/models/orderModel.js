const mongoose = require('mongoose');
const ObjectId=mongoose.Schema.Types.ObjectId
const orderSchema = new mongoose.Schema( {
   
	_id: ObjectId("61951bfa4d9fe0d34da86344"),
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
