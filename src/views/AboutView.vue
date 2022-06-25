<template>
   <h1>{{ id }}</h1> 
   <p v-if="userData">{{ userData.first_name }}</p>
</template>

<script>

import axios from 'axios'
import LoaderView from '../components/LoaderView.vue'

export default {
    components:{LoaderView},
    data(){
      return{
        showLoader:false,
        userData:null,
        id:this.$route.params.id,
      }
    },
    mounted(){
    this.getUserData()
    },

    methods:{
      changeLoadervisibility(){
            this.showLoader = !this.showLoader
        },
      getUserData(){
        this.changeLoadervisibility()
        axios.get("http://192.168.1.104:8000/users/"+this.id,{

        })
        .then(response => {
                      console.log(response)
                      this.userData = response.data
                      this.changeLoadervisibility()
                      console.log("Teacher: ",this.users)
                      })  .catch(error =>{
                          console.log(error)
                          this.changeLoadervisibility()
                        //   this.openDialog(error)
        })
        }
}

}

</script>

<style>

</style>
