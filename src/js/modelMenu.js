import * as dataProducts from '../data/products.json';
export default class ModelMenu {

   constructor() {
      this.arrAllProducts = dataProducts.default;
      this.getCurrentCategory();
   }

   getCurrentCategory(category) {
      this.currentCategory = this.arrAllProducts.filter((product) => {
            return product.category === category;
      })
      return this.currentCategory;
   }
}

