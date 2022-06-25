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
                    <span>First Name</span>
                    <p>{{ userData.first_name }}</p>
                </div>
                <div class="data">
                    <span>Last Name</span>
                    <p>{{ userData.last_name }}</p>
                </div>
                <div class="data">
                    <span>Middle Name</span>
                    <p> - </p>
                </div>
                <div class="data">
                    <span>Дата рождения </span>
                    <p>{{ userData.birth_date }}</p>
                </div>
                <div class="data">
                    <span>Gender </span>
                    <p>{{ userData.gender }}</p>
                </div>
                <div class="data">
                    <span>E-mail </span>
                    <p>{{ userData.email }}</p>
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
                            <p>Sum</p>
                            <p>Open Date</p>
                            <p>Deadline</p>
                            <p>Status</p>
                        </div>
                    </div>
                    <div class="usersContainer">
                        <div class="avatar">
                            <span>Andrew Bojalar</span>
                        </div>
                        <div class="aboutUser">
                            <p class="titleCreditItem">1000</p>
                            <p class="titleCreditItem">12.12.1997</p>
                            <p class="titleCreditItem">10.12.2000</p>
                            <p class="titleCreditItem">Designer</p>
                            
                        </div>
                    </div>
                </div>
                <table>
       <thead>
        <th>No</th>  
        <th>Title</th>  
        <th>Sum</th>  
        <th>Paid Sum</th>
        <th>Deadline</th>
        <th>Status</th>
       </thead>   
       <tbody>
       <tr v-for="(credit, index) in credits" :key="credit">
       <td>{{ index+1 }}</td>
       <td>{{ credit.title }}</td>
       <td>{{ credit.sum }}</td>
       <td>{{ credit.paid_sum }}</td>
       <td>{{ credit.deadline }}</td>
       <td>
        
       </td>
       </tr>
       </tbody>
      
    </table>  
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
        openCredit:false,
        credits:[{
         title:"Test Moshina Nexia",
         sum:"Test 1000",
         paid_sum:"Test 880",
         deadline:"Test 12-12-1998",
         status:"Test PAID"
        }]
      }
    },
    mounted(){
    // this.getUserData()
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
                      if(response.data.is_open_credit){
                        this.openCredit = true
                      }
                      this.credits = response.data.credits
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
table{
  width: 100%;
  border-collapse: collapse;
}
td {
  color: #2F4752;
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
th {
  color: #2F4752;
  padding: 10px;
  text-align: left;
  border-bottom: 2px solid #ddd;
}
tr:hover {background-color: rgb(245, 231, 231)}

</style>
