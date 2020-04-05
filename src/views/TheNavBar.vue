<template>
  <div class="vasion-navbar">
    <div id="left">
      <img id="vasionText" src="../assets/images/vasion-small.png">
    </div>
    <div id="right">
      <img id="vasionSpark" src="../assets/images/vasionLogo.png">
      <span id="plus">+</span>
      <img id="vueLogo" src="../assets/images/logo.png">
      <span>= Love</span>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const inc = () => {
      count.value++
    }

    return {
      count,
      inc
    }
  }
}
</script>

<style scoped>
  h1 {
    font-family: Arial, Helvetica, sans-serif;
  }
  span {
    font-size: 35px;
    font-weight: bolder;
    position: relative;
    top: 8px;
  }
  .vasion-navbar {
    width: 100vw;
    height: 55px;
    box-shadow: 0 4px 8px 0 rgba(22, 23, 24, 0.15);
    z-index: 3000;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  #left {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 256px;
    background-color: #400f3f;
  }
  #plus {
    left: 4px;
  }
  #right {
    display: flex;
    flex-direction: row;
    padding-right: 30px;
  }
  #vasionSpark {
    width: 55px;
  }
  #vueLogo {
    width: 65px;
  }

</style>
