// const faker = require('faker');

const dataBody = [];

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then((data) => {
    dataBody.push(data);
    // console.log(dataBody);
  });

  class ProductsService{
    constructor(){
      dataBody;
      // this.generate();
    };

    find() {
      return dataBody;
    };

  // generate(){
  //   const limit = 100;
  //   for(let i = 0 ; i < limit; i++ ){
  //     this.products.push({
  //       id: faker.datatype.uuid(),
  //       name: faker.commerce.productName(),
  //       price: parseInt(faker.commerce.price()),
  //       image: faker.image.imageUrl(),
  //     });
  //   };
  // };

  // create() {
  //   const newProduct = {
  //     id: faker.datatype.uuid(),
  //     ...data
  //   };
  //   this.products.push(newProduct);
  //   return newProduct;
  // };


  // findOne(id) {
  //   return this.products.find(item => item.id === id);
  // };

  // update(id, changesBody) {
  //   const index = this.products.findIndex(item => item.id === id);
  //   if(index === -1){
  //     throw new Error('product not found');
  //   };
  //   this.products[index] = changesBody;
  //   return this.products[index];
  // };

  // delete(id) {
  //   const index = this.products.findIndex(item => item.id === id);
  //   if( index === -1 ){
  //     throw new Error('product not found');
  //   };
  //   this.products.splice( index, 1 );
  //   return {id};
  // };

};

module.exports = ProductsService;