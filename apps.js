var app = new Vue({
  el:'#app',
  data:{
    num1: 1,
    num2: 7,
  },
  computed:{
    result: function(){
      return this.num1 + this.num2
    }
  }
})
