<template>
  <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Panel</title>
</head>

<body>
    <main>
        <section class="container">
            <div class="leftItem">
                <div class="item1">
                    <span></span>
                    Company
                </div>
                <div class="item2">
                    <div class="littleItem">
                        <span>
                            <img src="../assets/images/home.png" alt="home">
                        </span>
                        General
                    </div>
                    <div class="littleItem">
                        <span>
                            <img src="../assets/images/user.png" alt="home">
                        </span>
                        Users
                    </div>
                    <div class="littleItem">
                        <span>
                            <img src="../assets/images/pie-chart.png" alt="home">
                        </span>
                        Statistic
                    </div>
                    <div class="littleItem">
                        <span>
                            <img src="../assets/images/credit-card.png" alt="home">
                        </span>
                        Billing
                    </div>
                </div>
                <div class="item3">
                    <span>
                        <img src="../assets/images/logout.png" alt="">
                    </span>
                    Sign out
                </div>
            </div>
            <div class="rightItem">
                <div class="item1">
                    <div class="littleItem1">
                        <span class="span1">12</span>
                        <br>
                        <span class="span2">Peoples</span>
                    </div>
                    <div class="littleItem1">
                        <span class="span1">5</span>
                        <br>
                        <span class="span2">Departaments</span>
                    </div>
                </div>
                <form>
                    <input type="text" placeholder="Search">
                    <span><img src="../assets/images/search.png" alt=""></span>
                </form>
                <div class="dropdown">
                    <select>
                        <option value="All">All</option>
                    </select>
                    <select>
                        <option value="All">All Departaments</option>
                    </select>
                </div>
                <div class="users">
                    <div class="allUsers">
                        <div class="status">
                            <input type="checkbox">
                            User
                        </div>
                        <div class="paragraphParent">
                            <p>Status</p>
                            <p>Phone number</p>
                            <p>Position</p>
                        </div>
                    </div>
                    <div v-for="user in users" @click="openAbout(user)" :key="user" class="usersContainer">
                        <div  class="avatar">
                            <input type="checkbox">
                                <img v-if="user.image" class="itemAvatar" :src="user.image" alt="">
                                <img v-else class="itemAvatar" src="../assets/images/avatar_img.png" alt="">
                            <span>{{ user.first_name }}  {{ user.last_name }}</span>
                        </div>
                        <div class="aboutUser">
                            <p>Active</p>
                            <p>+998{{ user.phone }}</p>
                            <p>Designer</p>
                        </div>
                    </div>
                </div>
                </div>
        </section>
    </main>
</body>

</html>

 <LoaderView v-if="showLoader" /> 

</template>

<script>

import axios from 'axios'
// import BASE_URL from '../../../consts/getBaseUrl'
import LoaderView from '../components/LoaderView.vue'
import router from '@/router'


export default {
    components:{LoaderView},
data(){
    return{
        showLoader:false,
        users:[]
    }
},

mounted(){
    this.getUsers()
},

methods:{
     changeLoadervisibility(){
            this.showLoader = !this.showLoader
        },

    openAbout(user){
         this.$router.push('/about/' + user.id )   
    },
    getUsers(){
        this.changeLoadervisibility()
        axios.get("http://192.168.1.104:8000/users/",{
          
        })
        .then(response => {
                      console.log(response)
                      this.users = response.data
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