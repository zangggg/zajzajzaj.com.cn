<template>
  <el-form ref="prForm" :model="value"  :label-width="labelWidth">
    <component :is="tag" shadow="never">
      <slot></slot>
      <slot name="footer">
        <div style="text-align:center">
          <el-button type="primary" @click="submitClick(value)">提交</el-button>
        </div>
      </slot>
    </component>
  </el-form>
</template>
<script lang="ts">
/*
 *@description:
 *@author:
 *@date: 2019-11-18 15:08:34
 *@version: 1.0.0
 */
import {
  Component,
  Prop,
  Model,
  Provide,
  Emit,
  Vue
} from "vue-property-decorator";
import { ElForm } from "element-ui/types/form";

@Component
export default class PrForm extends Vue {
  @Model("change")
  value: any;

  @Provide()
  get qrForm() {
    return this;
  }

  @Prop({
    default: "el-card",
    type: String
  })
  tag!: String;

  @Prop({
    type: String,
    default: "60px",
    validator: value => /^\d+px$/.test(value)
  })
  labelWidth!: string;

  /**
   * 提交按钮触发时，如果需要提供提交行为，需要提供该属性
   */
  @Prop({ type: Function })
  submit!: Function;

  public async submitClick() {
    if (this.submit) {
      await this.submit();
    }
  }
}
</script>