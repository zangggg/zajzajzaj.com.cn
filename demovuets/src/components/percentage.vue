<template>
  <div style="height:20px;">
    <p class="title">{{title}}</p>
    <div class="percentbar">
      <el-progress :percentage="value" :color="color"></el-progress>
    </div>
  </div>
</template>
<script lang="ts">
/*
 *@description:
 *@author: zang
 *@date: 2019-11-22 14:28:44
 *@version: 1.0.0
 */
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({ components: {} })
export default class percentage extends Vue {
  @Prop({ default: "" })
  title!: String;

  @Prop({ default: 0 })
  value!: Number;

  @Prop({ default: "#f56c6c" })
  color!: String;
}
</script>

<style>
.title {
  margin: 0;
  float: left;
  font-size: 15px;
  line-height: 18px;
  width: 50px;
}

.percentbar {
  margin-left: 50px;
}
.percentbar .el-progress-bar__outer {
  height: 10px !important;
}
</style>