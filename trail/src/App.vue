<template>
  <div id="app">

    <header>
     
      
      <Navbar />
      <LineChart/>

    </header>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue';
import LineChart from './components/LineChart.vue';



export default {
  name: 'app',
  components: {
    Navbar,
   LineChart,
   
}
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 13px;
 
}

body {
  font-family: 'montserrat', sans-serif;
}

header {
  width: 80vw;
  background-color: #c2bdbd;
  padding: -200px;
  
}

</style>