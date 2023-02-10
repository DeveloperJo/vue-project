<template>
  <div>
    <input type="text" v-model="userId" />
    <button @click="changeData">변경</button>
    <button @click="myFunction">클릭!</button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      userId: 'test'
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
