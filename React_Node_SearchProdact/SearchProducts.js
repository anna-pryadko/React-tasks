const products = require('./Products.js');

module.exports.searchProdFun = function(p) {
    
    let foundProducts=[];

    for (let item of products)
        { if (item.price<p)
            {
                foundProducts.push(item)
            }
        }

    return JSON.stringify(foundProducts);
};