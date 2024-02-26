const {Schema, model} = require('mongoose');

const ProductsSchema = Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    price:{
        type:String
    },
    stock:{
        type:Number
    },
    category:{
        type:Array
    },
    maker:{
        type:String
    },
    sku:{
        type:String
    },
    image:{
        type:String
    },
    active:{
        type:Boolean
    }


}, {versionKey: false});

module.exports = model('Product', ProductsSchema);