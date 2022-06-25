<template>
    <div class="loaderParent">
    <div class="loader"></div>
    <h5 class="loaderText">Yuklanmoqda</h5>
    </div>
</template>

<script>
export default {

}
</script>

<style>

.loaderParent{
  position: absolute;
  width: 100px;
  height: 80px;
  text-align: center;
  bottom: 0;
  right: 0;
  margin: 10px;
}

.loaderText{
    font-weight: bold;
    color: white;
    margin-top: 5px;
}

.loader {
  border: 10px solid #f3f3f3;
  border-radius: 50%;
  border-top: 10px solid #3498db;
  width: 30px;
  height: 30px;
  margin-left: 25px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>