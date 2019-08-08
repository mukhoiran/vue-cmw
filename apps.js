var app = new Vue({
  el:'#app',
  // data:{
  //   num1: 1,
  //   num2: 7,
  //   result: null
  // },
  //computed
  // computed:{
    // result: function(){
    //   return this.num1 + this.num2
    // }
  // }
  //method
  // methods:{
  //   onprocess(){
  //     return this.result = this.num1 + this.num2
  //   }
  // }

  //================= Exploration Computed
  // data:{
  //   a:3,
  //   b:5,
  // },
  // computed:{
  //   addition: function(){
  //     return this.a + this.b
  //   },
  //   reduction: function(){
  //     return this.a - this.b
  //   },
  //   multiplication: function(){
  //     return this.a * this.b
  //   },
  //   division: function(){
  //     return this.a / this.b
  //   }
  // }

  //================= Exploration Methods
  // data:{
  //   a:3,
  //   b:5,
  //   addition:0,
  //   reduction:0,
  //   multiplication:0,
  //   division:0
  // },
  // methods:{
  //   onprocess(){
  //     this.addition = this.a + this.b,
  //     this.reduction = this.a - this.b,
  //     this.multiplication = this.a * this.b,
  //     this.division = this.a / this.b
  //   }
  // }

  //================= Watcher
  data:{
    content: '',
    information: ''
  },
  watch:{
    content: function(){
      this.information = 'typing.......'
    }
  }
})
