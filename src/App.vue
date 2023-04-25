<template >
    <div class="container">
        <a-button class="btn" @click="handleClick" type="primary">这是一个按钮</a-button>
    </div>
</template>

<script setup>
  const handleClick = ()=> {
    const a = 9 - 1
    console.log( a,'babel开发！！！')
  }
</script>
<style scoped>
  .container {
      height: 500px;
      display: flex;
      align-items: center;
      justify-content: center;
  }
</style>
