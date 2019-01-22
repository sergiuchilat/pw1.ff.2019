var store = new Vue({
  el: '#store',
  data: {
    orderSum: 0,
    products: [
      {
        id: 1,
        name: 'Mouse',
        price: 3.14,
        quantity: 0
      },
      {
        id: 2,
        name: 'Keyboard',
        price: 2.7,
        quantity: 0
      }
    ]
  },
  methods: {
    addToCart(product){
      this.orderSum = parseFloat(this.orderSum + product.price);    
      this.products[product.id - 1].quantity++;
    },
    removeFromcart(product){
      var sumToRemove = this.products[product.id - 1].quantity * this.products[product.id - 1].price;
      this.orderSum -= sumToRemove;
      this.products[product.id - 1].quantity = 0;
    }
  }
})