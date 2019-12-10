<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { Component, Vue } from "vue-property-decorator";
@Component({ components: { HelloWorld } })
export default class Home extends Vue {}
</script>

<style>
ul {
  width: 60px;
  height: 280px;
  background: #ccc;
  border-radius: 0 100% 100% 0/50%;
  position: relative;
}
li {
  margin: 0;
  list-style-type: none;
  padding: 0;
  width: 20px;
  height: 20px;
  position: absolute;
  background-color: #fff;
  border-radius: 50%;
  line-height: 20px;
  text-align: center;
  color: #000;
  border: 2px solid #73a0fa;
}

li:nth-child(1) {
  top: 4%;
}

li:nth-child(2) {
  right: -5%;
  top: 30%;
}

li:nth-child(3) {
  right: -5%;
  bottom: 30%;
}

li:nth-child(4) {
  bottom: 4%;
}
</style>
