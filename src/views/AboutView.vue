<template>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About user</title>
</head>

<body>
    <main>
        <section class="aboutUser container">
            <div v-if="userData" class="dataUser">
                <div class="data">
                    <span>Имя</span>
                    <p>{{ userData.first_name }}</p>
                </div>
                <div class="data">
                    <span>Фамилия</span>
                    <p>{{ userData.last_name }}</p>
                </div>
                <div class="data">
                    <span>Отчество</span>
                    <p> - </p>
                </div>
                <div class="data">
                    <span>Дата рождения </span>
                    <p>{{ userData.birth_date }}</p>
                </div>
                <div class="data">
                    <span>Пол </span>
                    <p>{{ userData.gender }}</p>
                </div>
            </div>
            <div v-if="userData" class="avatar">
                <div class="userAvatar">
                   <img v-if="userData.image" class="profileAvatar" :src="userData.image" alt="">
                   <img v-else class="profileAvatar" src="../assets/images/avatar_img.png" alt="">
                </div>
                <button class="btnEdit">Edit data</button>
                <br>
                <button v-if="openCredit" class="btnCreate">Open credit</button>
                <button v-else class="btnDisabled">Open credit</button>
            </div>
        </section>
        <section class="container">
            <div class="rightItem">
                <div class="users">
                    <div class="allUsers">
                        <div class="status">
                            <input type="checkbox">
                            Credits
                        </div>
                        <div class="paragraphParent">
                            <p>Open Date</p>
                            <p>Deadline</p>
                            <p>Status</p>
                        </div>
                    </div>
                    <div class="usersContainer">
                        <div class="avatar">
                            <input type="checkbox">
                            <span class="usersAvatar"></span>
                            <span>Andrew Bojalar</span>
                        </div>
                        <div class="aboutUser">
                            <p>Paid</p>
                            <p>+989899898</p>
                            <p>Designer</p>
                        </div>
                    </div>
                    <div class="usersContainer">
                        <div class="avatar">
                            <input type="checkbox">
                            <span class="usersAvatar"></span>
                            <span>Andrew Bojalar</span>
                        </div>
                        <div class="aboutUser">
                            <p>Unpaid</p>
                            <p>+989899898</p>
                            <p>Designer</p>
                        </div>
                    </div>
                    <div class="usersContainer">
                        <div class="avatar">
                            <input type="checkbox">
                            <span class="usersAvatar"></span>
                            <span>Andrew Bojalar</span>
                        </div>
                        <div class="aboutUser">
                            <p>Not fully paid</p>
                            <p>+989899898</p>
                            <p>Designer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>


</body>

</html>
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
        openCredit:false
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
