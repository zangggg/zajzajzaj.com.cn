<template>
  <div>
    <div id="echarts" style="width:600px;height:500px"></div>
    <div class="legend"></div>
  </div>
</template>
<script lang="ts">
/*
 *@description:
 *@author: 董辉
 *@date: 2019-11-21 16:44:31
 *@version: 1.0.0
 */
import { Vue, Component } from "vue-property-decorator";
import echarts, { EChartOption, EChartsResponsiveOption } from "echarts";

@Component
export default class comMM extends Vue {
  mounted() {
    this.getecharts();
  }

  getecharts() {
    let echartsData;
    echartsData = echarts.init(document.getElementById(
      "echarts"
    ) as HTMLCanvasElement);
    // echartsData.setOption({
    //   title: { text: "在Vue中使用echarts" },
    //   tooltip: {},
    //   xAxis: {
    //     data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
    //   },
    //   yAxis: {},
    //   series: [
    //     {
    //       name: "销量",
    //       type: "bar",
    //       data: [5, 20, 36, 10, 10, 20]
    //     }
    //   ]
    // });

    let option = {
      title: {
        left: "left",
        text: "概率",
        show: false
      },
      tooltip: {
        trigger: "axis",
        formatter: "{a}:{c}",
        axisPointer: {
          type: "cross",
          crossStyle: {
            color: "#999"
          }
        }
      },
      grid: {
        show: false,
        top: "30",
        bottom: "60",
        right: "60",
        left: "60"
      },
      legend: {
        show: false,
        // selectedMode: "single", //设置显示单一图例的图形，点击可切换
        // bottom: 10,
        // left: 50,
        // textStyle: {
        //   color: "#666",
        //   fontSize: 12
        // },
        // itemGap: 20,
        // data: ["设备一", "设备二", "设备三"],
        // inactiveColor: "#ccc"
      },
      xAxis: [
        {
          type: "value",
          name: "数量",
          show: true,
          interval: 50
        }
       
      ],

      //设置两个y轴，左边显示数量，右边显示概率

      yAxis: [
        {
          type: "category",
          data: [
            "济南",
            "青岛",
            "烟台",
            "威海",
            "潍坊",
            "东营",
            "日照",
            "滨州",
            "莱芜",
            "淄博",
            "德州",
            "聊城",
            "临沂",
            "泰安",
            "菏泽",
            "济宁",
            "枣庄"
          ],
          axisPointer: {
            type: "shadow"
          }
        }
      ],

      //每个设备分数量、概率2个指标，只要让他们的name一致，即可通过，legeng进行统一的切换

      series: [
        {
          type: "bar",
          data: [
            900,
            800,
            700,
            680,
            650,
            640,
            600,
            570,
            680,
            650,
            640,
            600,
            570,
            450,
            400,
            380,
            300
          ],
          barWidth: "50%",
          markLine: {
            silent: true,
            lineStyle: {
              normal: {
                color: "#000000", // 这儿设置安全基线颜色
                type: "solid"
              }
            },
            data: [
              {
                xAxis: 700
              }
            ],
            label: {
              normal: {
                formatter: "700" // 这儿设置安全基线
              }
            }
          }
        }
        // {
        //   name: "设备二",
        //   type: "bar",
        //   data: [
        //     700,
        //     680,
        //     650,
        //     640,
        //     600,
        //     570,
        //     680,
        //     650,
        //     640,
        //     600,
        //     570,
        //     450,
        //     400,
        //     380,
        //     300,
        //     900,
        //     800
        //   ],
        //   barWidth: "50%",
        //   markLine: {
        //     silent: true,
        //     lineStyle: {
        //       normal: {
        //         color: "#000000", // 这儿设置安全基线颜色
        //         type: "solid"
        //       }
        //     },
        //     data: [
        //       {
        //         xAxis: 700
        //       }
        //     ],
        //     label: {
        //       normal: {
        //         formatter: "700" // 这儿设置安全基线
        //       }
        //     }
        //   }
        // },

        // {
        //   name: "设备三",
        //   type: "bar",
        //   data: [
        //     600,
        //     570,
        //     680,
        //     650,
        //     640,
        //     600,
        //     570,
        //     450,
        //     400,
        //     380,
        //     300,
        //     900,
        //     800,
        //     700,
        //     680,
        //     650,
        //     640
        //   ],
        //   barWidth: "50%",
        // markLine: {
        //     silent: true,
        //     lineStyle: {
        //       normal: {
        //         color: "#000000", // 这儿设置安全基线颜色
        //         type: "solid"
        //       }
        //     },
        //     data: [
        //       {
        //         xAxis: 700
        //       }
        //     ],
        //     label: {
        //       normal: {
        //         formatter: "700" // 这儿设置安全基线
        //       }
        //     }
        //   }
        // }
      ]
    } as (EChartOption | EChartsResponsiveOption);
    var two = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      toolbox: {
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ["line", "bar"] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      legend: {
        data: ["军费支出", "军费占支出比"]
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: [
        {
          type: "value",
          name: "亿美元"
        }
      ],
      yAxis: [
        {
          type: "category",
          name: "年",
          data: ["2008", "2009", "2010", "2011", "2012", "2013", "2014"],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      series: [
        {
          name: "军费支出",
          type: "bar",
          barWidth: "20%",
          itemStyle: {
            normal: {
              color: "    #4169E1" //柱子的颜色
            }
          },
          data: [480, 550, 590, 700, 810, 850, 840],
          markLine: {
            silent: true,
            lineStyle: {
              normal: {
                color: "#000000", // 这儿设置安全基线颜色
                type: "solid"
              }
            },
            data: [
              {
                xAxis: 700
              }
            ],
            label: {
              normal: {
                formatter: "700" // 这儿设置安全基线
              }
            }
          }
        }
      ]
    } as (EChartOption | EChartsResponsiveOption);
    echartsData.setOption(option);
  }
}
</script>

<style>
.box {
  width: 600px;
  height: 500px;
}

</style>