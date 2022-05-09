<template>
  <div>
    <input type="text" v-model="num" /> {{ num }} <br /><input
      type="text"
      v-model="person.name"
    />
    <br />
    {{ person.name }} <button @click="add1">add num</button> <br />
    newValue: {{ newValue }}
    num2 : {{ num2 }}
  </div>
</template>
<script>
import { set } from "pinia/node_modules/vue-demi";
import { onMounted, ref, computed } from "vue";
export default {
  setup() {
    //封裝在內部不匯出的資料 ex. API路徑 , 系統參數 , 不能外洩的資料
    let countadd = 0;

    //定義資料
    const num = ref(123); // 定義一個值為資料
    const person = ref({
      // 定義一個物件為資料
      name: "otis",
      family: {
        name: "barry",
      },
    });

     //使用computed
    // const newValue = computed(() => {   // 預設用法(只觸發getter)
    //   return num.value * 2;
    // });
    const num2 = ref(0)
    const newValue = computed({
        get(){
            return num.value * 2;
        },
        set(v){
            console.log(v);
            num2.value=v+1000   // 
        }
    })
    newValue.value = 1000       // 當試圖寫入computed監控的newValue時觸發setter(1000){} 並將值帶入參數
    // newValue.value = 1000
    //修改資料
    person.value.name = "kyle"; // 修改物件得值
    person.value.family.name = "familyName"; // 修改巢狀物件的值
    person.value = {
      // 值將替代整個物件
      name: "替換後",
    };
    num.value = 456;

    // 定義函式
    function add1() {
      // 定義函式(傳統函式)
      num.value += 100;
      countadd++;
      console.log(countadd);
      
    }
    const add2 = () => {
      // 定義函式(箭頭函式)
      num.value += 100;
      countadd++;
      console.log("累加的次數" + countadd);
    };

    // 要使用生命週期就在前面加上on
    onMounted(() => {
      person.value.name = "生命週期修改得name"; // 生命週期裡修改資料
      add2(); // 生命週期裡使用函式
    });

    // 要將資料輸出必須要return方式
    return {
      num,
      num2,
      person,
      add1,
      add2,
      newValue,
    };
  },
};
</script>
