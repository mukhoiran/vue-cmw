var app = new Vue({
  el:'#app',
  data:{
    num1: 1,
    num2: 7,
    result: null
  },
  //computed
  // computed:{
    // result: function(){
    //   return this.num1 + this.num2
    // }
  // }
  //method
  methods:{
    onprocess(){
      return this.result = this.num1 + this.num2
    }
  }
})
