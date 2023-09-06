<template>
  <nav>
    <Dropdown title="File" :items="File" />
    <div class="menu-item"><a href="#">Polar plot</a></div>
    <div class="menu-item"><a href="#">Polarplot stacking</a></div>
    <div class="menu-item"><a href="#">Graphic polarplot Calculation</a></div>
    <div class="menu-item"><a href="#">Tool Life Plotting</a></div>
    <Dropdown2 title="Graph setting " :items="GraphSetting" />
    <!-- <div class="menu-item"><a href="#">Graph setting</a></div> -->
    <div class="menu-item"><a href="#">Help</a></div>
  </nav>
</template>
  
  <script>
  import Dropdown from './Dropdown.vue';
  import Dropdown2 from './Dropdown2.vue';
  
  export default {
    name: 'navbar',
    components: {
      Dropdown,
      Dropdown2,
    },
    data () {
      return {
        File : [
          {
            title: 'Import Raw File ctrl+l',
            link: '#import'
          },
          {
            title: 'Export Raw File ctrl+E',
            link:'#export'
          },
          {
            title: 'Create Report',
            link: '#Report'
          }
        ],
        GraphSetting: [
          {
            title: 'Show Grid',
            link: '#G1'
          },
          {
            title: 'Processing modus',
            link:'#G2'
          },
          {
            title: 'Comparing modus',
            link: '#G3'
          }
        ]
        };
      }
    }
   
  </script>
  
  <style>
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #bbadad;
    float: left;
  }
  
  nav .menu-item {
    color: #0b0101;
    /* padding: 10px 20px; */
    padding: 14px 16px 20px;
    margin: 0px;
    position: relative;
    text-align: center;
    border-bottom: 3px solid transparent;
    display: flex;
    transition: 0.4s;
   
   
  }
  
  nav .menu-item.active,
  nav .menu-item:hover {
    background-color: #271f1f;
    /* border-bottom-color: #040202; */
    border-color: #040202;
    color:white;
    align-items: center;
    
  }
  
  nav .menu-item a {
    color: inherit;
    text-decoration: none;
    
  }
  .menu-item{
    align-items:center;
    
  }
  </style>