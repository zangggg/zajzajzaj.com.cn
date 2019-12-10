<template>
  <div class="con">
    <div class="percent-circle-left" :style="`background:${borderColor}`">
      <div
        class="left-content"
        :style="`background:${bgColor};transform: rotate(${(score/total*360).toFixed(2)<180?(score/total*360):180}deg)`"
      ></div>
    </div>
    <div class="percent-circle-right" :style="`background:${borderColor}`">
      <div
        class="right-content"
        :style="`background:${bgColor};transform: rotate(${(score/total*360).toFixed(2)>180?(score/total*360-180):0}deg)`"
      ></div>
    </div>
    <div class="text-circle" :style="`color:${borderColor}`">
      <p style="font-size:18px;margin-top:35px">{{score}}</p>
      <p style="font-size:14px">{{description}}</p>
    </div>
  </div>
</template>
<script lang="ts">
/*
 *@description:
 *@author: zang
 *@date: 2019-11-22 11:57:16
 *@version: 1.0.0
 */
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class CirclePer extends Vue {
  @Prop({ default: 100 })
  total!: number;

  @Prop({ default: 0 })
  score!: number;

  @Prop({ default: "#fdf5f5" })
  bgColor!: String;

  @Prop({ default: "#ffb548" })
  borderColor!: String;

  @Prop({ default: "我的总分" })
  description!: String;
}
</script>

<style>
.con {
  position: relative;
  display: inline-block;
  height: 150px;
  width: 150px;
}

.percent-circle-right {
  position: absolute;
  height: 100%;
  overflow: hidden;
  right: 0;
  width: 75px;
  border-radius: 0 75px 75px 0/0 75px 75px 0;
}

.percent-circle-right .right-content {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  transform-origin: left center;
  transform: rotate(0deg);
  border-radius: 0 75px 75px 0/0 75px 75px 0;
}

.percent-circle-left {
  position: absolute;
  height: 100%;
  overflow: hidden;
  width: 75px;
  border-radius: 75px 0 0 75px/75px 0 0 75px;
}

.percent-circle-left .left-content {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  transform-origin: right center;
  transform: rotate(0deg);
  border-radius: 75px 0 0 75px/75px 0 0 75px;
}

.text-circle {
  position: absolute;
  height: 80%;
  width: 80%;
  left: 10%;
  top: 10%;
  border-radius: 100%;
  background: #fff;
}

.text-circle p {
  margin: 0;
  padding: 0 20px;
}
</style>