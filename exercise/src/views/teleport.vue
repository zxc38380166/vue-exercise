<template>
  <button @click="toggle = !toggle">切換元素</button>
  <div>
    <teleport to="#teleportdemo" v-if="toggle">
      <div>被召喚的元素</div>
      <div v-for="i in products" :key="i.name"> {{i.name}} / {{i.unit}} </div>
    </teleport>
  </div>
</template>
<script>
export default {
  data() {
    return {
      toggle: false,
      products: [
        {
          name: "小籠包",
          unit: 30,
        },
        {
          name: "菜包",
          unit: 80,
        },
        {
          name: "肉包",
          unit: 50,
        },
      ],
    };
  },
};
</script>
