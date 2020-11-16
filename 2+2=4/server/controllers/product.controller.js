const { Product } = require('../models/product.model');
const mongoose = require('mongoose');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createProduct = (request, response) => {
    var { title, price, desc } = request.body;
	
	if (desc.length < 1) {desc = "(No Description)"}
	
    Product.create({
        title,
        price,
		desc
    })
        .then(p => response.json(p))
        .catch(err => response.json(err));
}

module.exports.getAllProduct = (request, response) => {
    Product.find({})
        .then(p => response.json(p))
        .catch(err => response.json(err))
}

module.exports.getProduct = (request, response) => {
    Product.find({})
		.then(p => response.json(p[parseInt(request.params.id)]))
        .catch(err => response.json(err))
}

module.exports.editProduct = (request, response) => {
	const { obj_id, title, price, desc } = request.body;
    Product.updateOne({ "_id": mongoose.Types.ObjectId(obj_id) },{$set:{
		"title":title,
        "price":price,
		"desc":desc
	}})
		.then(p => response.json(p))
        .catch(err => response.json(err))
}


module.exports.deleteProduct = (request, response) => {
	const { obj_id } = request.body;
    Product.deleteOne({ "_id": mongoose.Types.ObjectId(obj_id) })
		.then(p => response.json(p))
        .catch(err => response.json(err))
}