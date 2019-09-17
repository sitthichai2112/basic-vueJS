<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <h1>{{ count }}</h1>

    <button v-on:click="showModal">Next Page</button>
  </div>
</template>

<script>
import store from "../store";
import Router from "vue-router";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App11"
    };
  },
  computed: {
    message() {
      return this.$store.state.message;
    },
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    showModal() {
      console.log("function is called");
      store.commit("increment", {
        amount: 10
      });
      store.commit("setNewMessage");
      const router = this.$router;
      router.push('/1');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
