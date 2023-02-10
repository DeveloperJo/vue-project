<template>
  <div>
    <input type="text" v-model="userId" />
    <button @click="changeData">변경</button>
    <button @click="myFunction">클릭!</button>
    <br />
    <input type="number" v-model="num1" /> +
    <input type="number" v-model="num2" /> =
    <span>{{ num1 + num2 }}</span>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      userId: 'test',
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    myFunction() {
      console.log(this.userId)
    },
    changeData() {
      this.userId = '테스트'
    }
  }
}
</script>
