<template>
  <div id="app">
     <root :rootObj = "rootObj"></root> 
  </div>
</template>

<script>
import root from "./components/root.vue";
import axios from "axios";
export default {
  name: "app",
  components: {
    root
  },
 data(){
   return {
     rootObj: {
      layerList: []
    }
   }
 }
 
  //methods: {
  //   getHomeData() {
  //     axios.get("/api/index").then(res => {
  //       console.log(res.data.name+"-----test");
  //       // ...
  //     })
  //   }
  // },
  // mounted() {

  //   this.getHomeData()
  // }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
