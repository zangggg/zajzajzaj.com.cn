<template>
  <div class="about">
    <div class="header">
      <el-menu
        :default-active="activeIndex"
        class="parentmenu"
        mode="horizontal"
        @select="handleParentSelect"
      >
        <template v-for="(menu,index) in MenuList">
          <el-menu-item :index="String(index)" :route="{path:menu.link}" :key="index">
            <span slot="title">{{ menu.name }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </div>
    <div class="aside">
      <el-menu>
        <template v-for="(submenu,index) in childList">
          <el-menu-item
            :index="String(index)"
            :route="{path:submenu.link}"
            :key="index"
            v-if="!submenu.hasChildMenu"
          >
            <span slot="title">{{ submenu.name }}</span>
          </el-menu-item>
          <el-submenu v-else :index="String(index)" :key="index">
            <span slot="title">{{ submenu.name }}</span>
            <template v-for="(ssubmenu,index) in submenu.children">
              <el-menu-item :index="String(index)" :route="{path:ssubmenu.link}" :key="index">
                <span slot="title">{{ ssubmenu.name }}</span>
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
      </el-menu>
    </div>
    <div class="percentbar" style="width:300px;">
      年级
      <el-progress :percentage="50" color="#f56c6c"></el-progress>01班
      <el-progress :percentage="60"></el-progress>
    </div>
    <div class="using-slider">
      <span>使用率：{{usingRate}} %</span>
      <el-slider v-model="usingRate"></el-slider>
    </div>

    <div class="container">
      <!-- <span>使用率：{{usingRate}} %</span> -->
      <div class="wave"></div>
      <div class="wave-mask" :style="`top: ${40 - parseInt(usingRate)}px`"></div>
      <p class="number">{{usingRate}} %</p>
    </div>

    <div class="duoxuan">
      <el-checkbox-group v-model="checkboxGroup2" size="medium">
        <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
      </el-checkbox-group>

      <el-radio-group v-model="radio" size="medium">
        <el-radio-button v-for="city in cities" :label="city" :key="city"></el-radio-button>
        <!-- <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>-->
      </el-radio-group>
    </div>

    <Echarts></Echarts>
    <div>
      <one score="0" :bgColor="bgColor" :borderColor="borderColor" :description="description"></one>
      <one score="50" :bgColor="bgColor" :borderColor="borderColor" :description="description"></one>
      <one score="80" :bgColor="bgColor" :borderColor="borderColor" :description="description"></one>
      <one score="100" :bgColor="bgColor" :borderColor="borderColor" :description="description"></one>
      <one score="60" :bgColor="bgColor" :borderColor="borderColor" :description="description"></one>
      <one score="30" bgcolor="#eceff5" bordercolor="#73A0FA" description="班级平均分"></one>
    </div>

    <div v-for="(item , index) in List" :key="index">
      <div style="width:350px;text-align:left">
        <Per :title="item.title" :value="item.value" :color="item.color"></Per>
      </div>
    </div>

    <div style="width:500px;height:400px;">

      <div class="green">
         28.8%
      </div>
      <div class="green">
         30.8%
      </div>
      <div class="green">
         90.8%
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import Echarts from "../assets/echarts";
import Echarts from "../components/echartsCom.vue";
import one from "../components/circle.vue";
import Per from "../components/percentage.vue";
@Component({
  components: {
    Echarts,
    one,
    Per
  }
})
export default class about extends Vue {
  private List = [
    { title:"年级",value: 0, color: "yellow" },
    { title:"01班",value: 50, color: "red" },
    { title:"02班",value: 60, color: "black" },
    { title:"03班",value: 100, color: "blue" }
  ];
  private percentage = 80;

  private customColor = "eee";

  private activeIndex = "0";

  private sctiveIndex2 = "0";

  private childList = [];

  private menuList = [];

  private isCollapse = true;

  private usingRate = 0;

  private checkboxGroup2 = ["1"];

  private radio = "1";

  private cities = ["1", "2", "3", "4", "5"];

  private score = 89;

  private bgColor = "#fdf5f5";
  // #eceff5
  // #ecf7f1
  // #f7e4e5

  private borderColor = "#ffb548";
  // #73A0FA
  // #66D594
  // #FF5D65

  private description = "名次波动数";

  private MenuList = [
    {
      children: [
        {
          children: [],
          hasChildMenu: false,
          id: "1000001",
          name: "教师管理"
        }
      ],
      hasChildMenu: true,
      id: "100000",
      name: "人员管理"
    },
    {
      children: [
        {
          children: [],
          hasChildMenu: false,
          id: "20000202",
          link: "/a",
          name: "学校简介"
        },
        {
          children: [],
          hasChildMenu: false,
          id: "20000201",
          link: "/b",
          name: "师资力量"
        },
        {
          children: [],
          hasChildMenu: false,
          id: "20000203",
          link: "/c",
          name: "分类管理"
        }
      ],
      hasChildMenu: true,
      id: "200002",
      name: "学校风采"
    },
    {
      children: [
        {
          children: [
            {
              children: [],
              hasChildMenu: false,
              id: "3000030101",
              link: "/kaoshilie",
              name: "考试列表"
            },
            {
              children: [],
              hasChildMenu: false,
              id: "3000030102",
              link: "/piyue",
              name: "批阅列表"
            }
          ],
          hasChildMenu: true,
          id: "30000301",
          name: "智能阅卷"
        },
        {
          children: [],
          hasChildMenu: false,
          id: "30000302",
          link: "/kaoshi",
          name: "参数设置"
        }
      ],
      hasChildMenu: true,
      id: "300003",
      link: "/kaoshi",
      name: "考试管理"
    }
  ];

  mounted() {
    if (this.MenuList[0].hasChildMenu) {
      this.childList = this.MenuList[0].children as any;
    }
  }

  isHalf(num: number) {}

  private handleParentSelect(key: any, keyPath: any) {
    let currentIndex = Number(key);
    this.childList = this.MenuList[currentIndex].children as any;
  }
}
</script>

<style>
.header {
  width: 100%;
  height: 60px;
  background-color: #ccc;
  position: relative;
}

.parentmenu {
  margin-left: 200px;
}

.aside {
  width: 200px;
  height: 400px;
  background-color: beige;
}

.percentbar .el-progress-bar__outer {
  height: 10px !important;
}

.bolang {
  margin: 0 auto;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background-color: aqua;
}

.container {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid #67c23a;
  background: #ffffff;
  padding: 5px;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
}
.wave {
  position: relative;
  width: 100px;
  height: 100px;
  background-image: linear-gradient(-180deg, #aaff80 13%, #67c23a 91%);
  border-radius: 50%;
}

.wave-mask {
  position: absolute;
  width: 200px;
  height: 200px;
  top: 0;
  left: 50%;
  border-radius: 40%;
  background-color: rgba(212, 24, 24, 0.9);
  transform: translate(-50%, -70%) rotate(0);
  animation: toRotate 10s linear -5s infinite;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.9);
}

@keyframes toRotate {
  50% {
    transform: translate(-50%, -70%) rotate(180deg);
  }
  100% {
    transform: translate(-50%, -70%) rotate(360deg);
  }
}

.using-slider {
  width: 400px;
  margin: 0 auto;
}

.number {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto;
  z-index: 3;
}

.green{
  width: 139px;
  height: 36px;
  background: green;
  text-align: center;
  color: #fff;
  line-height: 36px;
  cursor: pointer;
  float: left;
}
.green:hover{
  transform: scale(1.2)
}
</style>
