var calculator = new Vue({
  el: '#calculator',
  data: {
    selectedPizza: null,
    selectedTopping: null,
    orderPrice: 0, 
    pizzaList: [
      {
        name: 'Rancho',
        price: 75
      },
      {
        name: 'Margarita',
        price: 72
      }
    ], 
    pizzaToppings: [
      {
        name: 'Cheese',
        price: 5
      },
      {
        name: 'Becon',
        price: 9
      }
    ]
   
  },
  methods: {
    selectPizza(){
      this.orderPrice = this.selectedPizza;
    },
    selectTopping(){
      this.orderPrice += this.selectedTopping;
    }
  }
})