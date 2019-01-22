var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue! Hello'
  }
})


var app2 = new Vue({
	el: '#app2',
	data:{
		discipline: [
			{
				denumire: 'Fizica',
				media: 10.01
			},
			{
				denumire: 'Matematica',
				media: 4.99
			}
		]
	}
})


var app3 = new Vue({
  el: '#app3',
  data: {
    salary: '200'
  },
  methods: {
    increaseSalary: function () {
      this.salary = Number(this.salary) + 10
    },
    decreaseSalary: function () {
      this.salary = Number(this.salary) - 10
    }
  }
})


var app4 = new Vue({
  el: '#app4',
  data: {
    message: 'Hello Vue!'
  }
})


var app5 = new Vue({
  el: '#app5',
  data: {
  	x: 0, 
  	y: 0,
    sum: 0
  },
  methods:{
  	calculateSum(){
  		this.sum = Number(this.x) + Number(this.y)
  	}
  }
})