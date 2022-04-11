<template>
  <div id="teleportdemo"></div>
  <div>
    <button @click="NumMethod">合併</button>
    <button @click="datafn">傳參考值</button>
    <div v-for="item in products" :key="item.name">
      {{ item.name }} / {{ item.unit }}
      <button @click="addtocart(item)">加入購物車</button>
    </div>
    <div>
      搜尋 :
      <input type="search" v-model="search" />
      <div v-for="item in filterP" :key="item.name">{{ item.name }}</div>
    </div>
    <ul>
      <li v-for="item in carts" :key="item.name">
        {{ item.name }} / {{ item.unit }}
      </li>
    </ul>
    <div>total的值 : {{ total }}</div>
  </div>
  <slotdemo>
    <template #header>外部傳入的header </template>
    <template #body> </template>
    <template #footer>外部傳入的footer </template>
  </slotdemo>
  <teleportdemo></teleportdemo>
  <provideoutside></provideoutside>
</template>
<script>
import { a, b } from "./data.js";
import slotdemo from "./slot.vue";
import teleportdemo from "./teleport.vue";
import provideoutside from "./provideoutside.vue";
export default {
  data() {
    return {
      num1: ["1", "3", "5", "7", "9"],
      num2: ["2", "4", "6", "8", "10"],
      obj: {
        name: "otis",
      },
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
      carts: [],
      search: "",
    };
  },
  components: {
    slotdemo,
    teleportdemo,
    provideoutside,
  },
  provide: {
    text:"第一層-最外層傳進去的文字"
  },
  
  methods: {
    NumMethod() {
      const num3 = [...this.num1, ...this.num2];
      this.num1 = [...num3];
      this.num1.sort((a, b) => {
        return a - b;
      });
      console.log(this.num1.reverse());
    },
    sum() {
      // 傳參考值特性 修改繼承物件原物件也會受到修改
      // const myobj = this.obj
      // myobj.age = '16'
      // console.log( myobj,this.obj );

      // 深層拷貝 先將物件轉成字串,再將字串轉回物件,此做法則變成兩個獨立完全不相干的物件,修改繼承者原物件不會跟著修改
      const myobj1 = JSON.parse(JSON.stringify(this.obj));
      myobj1.age = "17";
      console.log(myobj1, this.obj);
    },
    datafn() {
      //具名匯出練習
      console.log(a);
      b();
    },
    addtocart(product) {
      this.carts.push(product);
    },
  },
  computed: {
    total() {
      let total = 0;
      this.carts.forEach((i) => {
        console.log(i);
        total += i.unit;
        console.log(total);
      });
      return total;
    },
    filterP() {
      return this.products.filter((i) => {
        return i.name.match(this.search);
      });
    },
  },
};
</script>
