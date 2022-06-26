<template>
  <div v-if="userData" class="topCtrCreate">
  <img v-if="userData.image" class="itemAvatar" :src="userData.image" alt="">
  <img v-else class="itemAvatar" src="../assets/images/avatar_img.png" alt="">
  <h1 id="titleh1">Open new Credit</h1>

  </div>

<form @submit.prevent="handleSubmit">
    <label>Credit Name</label>
    <input class="inputCreate" type="text" v-model="formData.title" required>

    <label>Total Sum</label>
    <input class="inputCreate" type="number" v-model="formData.total_sum" required>

    <label>Open Date</label>
    <input class="inputCreate" type="Date" v-model="formData.open_date" required>

    <label>Deadline Date</label>
    <input class="inputCreate" type="Date" v-model="formData.deadline" required>

    <div class="submit">
        <button class="createCreditBtn" @click="createCredit">Create Credit</button>
    </div>

    <h2>{{ createMessageResponse }}</h2>
</form> 

<LoaderView v-if="showLoader" /> 

</template>

<script>

import axios from 'axios'
import LoaderView from '../components/LoaderView.vue'

export default {
 components:{LoaderView},
data(){
    return {
      showLoader:false,
      userData:null,
      formData:{
      title:"",
      total_sum:0,
      open_date:"",
      deadline:"",
      user:this.$route.params.id
     },
     createMessageResponse:""
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
        axios.get("http://192.168.1.104:8000/users/"+this.formData.user,{
        })
        .then(response => {
                      console.log(response)
                      this.userData = response.data
                      this.changeLoadervisibility()
                      console.log("Teacher: ",this.users)
                      })  .catch(error =>{
                          console.log(error)
                          this.changeLoadervisibility()
        })
        },
        createCredit(){
          this.changeLoadervisibility()
          axios.post("http://192.168.1.104:8000/credits/",this.formData,{
          })
          .then(response => {
                      console.log(response)
                      this.changeLoadervisibility()
                      this.createMessageResponse = "Created, "+ response.data 
                      this.$router.go(-1)
                      console.log("Teacher: ",this.users)
                      })  .catch(error =>{
                          console.log(error)
                          this.changeLoadervisibility()
          })
        }

        

}
}

</script>

<style>

form{
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}

label{
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}

.inputCreate{
    
    max-width: 600px;
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}

.pill{
    display: inline-block;
    margin: 10px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
}

.del{
    display: inline-block;
    padding: 1px 4px;
    margin: -10px -5px -5px 10px;
    background: rgb(224, 10, 10);
    border-radius: 50%;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: white;
    cursor:default
}

.createCreditBtn{
    background: #0b6dff;
    border: 0;
    border-radius: 20px;
    color: white;
    margin-top: 20px;
    padding: 10px 20px;
}

.createCreditBtn:hover{
    background: #2a7efc;
}

.submit{
    text-align: center;
}

.error{
    font-size: 10px;
    color: rgb(224, 10, 10);;
    font-style: italic;
}

#titleh1{
  display: inline-block;
  color: white;
  margin-left: 20px;
  font-family:Georgia, 'Times New Roman', Times, serif;
  font-weight: bold;
}

.topCtrCreate{
  background: #0b6dff;
  padding: 10px;
  padding-left: 10px;
}

</style>