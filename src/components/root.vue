<template>
  <div class="root">
     <span @click="addLayer">添加层+</span>
     <div  class="layer"  v-for = "(item,index) in rootObj.layerList" :key='index'>
      <span  @click="deleteLayer(index)" style="width:100%;text-align:left;">删除该层-</span>
         <span @click="addTest(item)">添加实验+</span>
         <span @click="addArea(item)">添加域+</span>
        
         <div class="area" v-for = "(innerItem,innerIndex) in item.areaList" :key='innerIndex'>
          <span  @click="deleteArea(innerIndex,item.areaList)" style="width:100%;text-align:left;">删除该域-</span>
         <root  :rootObj =  "innerItem" ></root>   
       </div>  
       <div class="test" v-for = "(innerItem,innerIndex) in item.testList" :key='innerIndex'>
          <span  @click="deleteTest(innerIndex,item.testList)" style="width:100%;text-align:left;">删除该实验-</span>
       </div>  
    </div> 
  </div>
</template>

<script>
import { mapState,mapActions } from 'vuex'
export default {
  name: "root",
  props:{
    rootObj:{
      type:Object,
      default:function(){
       return {
         layerList: []
       }  
      }
    }
  },
  methods:{
     ...mapActions([
     'addTest','updateData'
    ]),
    addLayer(){
      this.rootObj.layerList.push({ testList: [], areaList: [] })
    //  this.updateData(this.rootObj)
    },
    addArea(item){
       item.areaList.push({ layerList: [] })
       this.updateData({ layerList: [] })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
 .root{
   background: grey;
   
    padding: 10px;
 }
 .layer{
     width:100%;
     min-height:100px;
     background:pink;
     margin-top:10px;
     display: flex;
    flex-wrap:wrap;
   }
   .test{
      width:80px;
     height:80px;
     background:rgb(206, 199, 111);
     margin:10px;

   }
   .area{
     width:80%;
     background:rgb(206, 199, 111);
      margin:10px;
   }
</style>
