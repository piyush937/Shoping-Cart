 //Coffee: price_1NcTiPSC3Fg0dbWptkVYiXrx

 //Sunglasses : price_1NcTlYSC3Fg0dbWpEFBgMg4s

 //Camera :   price_1NcTn6SC3Fg0dbWphZSHxtOx

const productsArray = [
    {
        id: 'price_1NcTiPSC3Fg0dbWptkVYiXrx',
        title: 'Coffee',
        price: 4.99

    },
    {
        id: 'price_1NcTlYSC3Fg0dbWpEFBgMg4s',
        title: 'Sunglasses',
        price: 9.99

    },
    {
        id: 'price_1NcTn6SC3Fg0dbWphZSHxtOx',
        title: 'Camera',
        price: 38.99

    }
];
function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if(productData === undefined){
        console.log('Product data does not exist for ID:'+id);
        return undefined;
    }
    return productData;
}

export { productsArray ,getProductData };