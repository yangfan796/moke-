<template>
  <div class="row">
    <el-row>
      <el-col :span="3">
        <draggable
          class="dragArea list-group content"
          :list="list1"
          :group="{ name: 'comp', pull: 'clone', put: false }"
          @change="log"
          @end="end"
        >
          <div class="item list-group-item" v-for="element in list1" :key="element.id">
            <div class="top">
              <i :class="['iconfont',element.icon]"></i>
            </div>
            <div class="bottom">{{element.name}}</div>
          </div>
        </draggable>
      </el-col>
      <el-col :span="6">
        <div class="phoneBg">
          <draggable
            tag="el-collapse"
            class="dragArea list-group phone"
            :list="list2"
            group="comp"
            @change="log"
            @end="end"
          >
            <div
              style="position:relative"
              v-for="(e,index) in list2"
              :key="index"
              :class="[{'checked':e.checkIndex==1},'list-group-item','left']"
              @change="handleChange"
            >
              <Search
                @click.native="checkOne(e)"
                v-if="e.name=='搜索框'"
                :value="value"
                :color="bgColor"
                :interColor="interColor"
                :radioStyle="radioStyle"
              ></Search>
              <noticeBar
                @click.native="checkOne(e)"
                v-if="e.name=='公告'"
                :text="inputValue"
                :noticeBgColor="noticeBgColor"
              ></noticeBar>
              <empty @click.native="checkOne(e)" v-if="e.name=='辅助空白'" :emptyHeight="emptyHeight"></empty>
              <navBar @click.native="checkOne(e)" v-if="e.name=='导航'" :navList="navList"></navBar>
              <recommendList
                @click.native="checkOne(e)"
                v-if="e.name=='推荐商品'"
                :recommendList="recommendList"
              ></recommendList>
              <groupBooking
                @click.native="checkOne(e)"
                v-if="e.name=='拼团'"
                :recommendList="recommendList"
              ></groupBooking>
              <seckill
                @click.native="checkOne(e)"
                v-if="e.name=='秒杀'"
                :recommendList="recommendList"
              ></seckill>
              <commodityGroup
                @click.native="checkOne(e)"
                v-if="e.name=='商品分组'"
                :recommendList="recommendList"
              ></commodityGroup>
              <i v-if="e.checkIndex==1" class="el-icon-delete icon" @click.stop="deleteItem(index)"></i>
            </div>
          </draggable>
        </div>
      </el-col>
      <el-col :span="14" style="marginLeft:15px">
        <setUp
          :setObj="setObj"
          @setHeight="setHeight"
          @setBgColor="setBgColor"
          @setInterColor="setInterColor"
          @radio="radio"
          @inputVal="inputVal"
          @setNoticeColor="setNoticeColor"
        ></setUp>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import draggable from "vuedraggable";
import setUp from "../components/set";
import Search from "../components/search"; //搜索组件
import noticeBar from "../components/noticeBar"; //公告
import empty from "../components/empty"; //辅助空白
import navBar from "../components/navBar"; //导航
import recommendList from "../components/recommendList"; //推荐商品
import groupBooking from "../components/groupBooking"; //拼团
import seckill from "../components/seckill"; //秒杀
import commodityGroup from "../components/commodityGroup"; //商品分组
export default {
  name: "clone",
  display: "Clone",
  order: 2,
  components: {
    draggable,
    Search,
    noticeBar,
    empty,
    navBar,
    recommendList,
    groupBooking,
    setUp,
    seckill,
    commodityGroup
  },
  data() {
    return {
      list1: [
        { name: "导航", icon: "icon-daohang", id: 1 },
        { name: "图片组合", icon: "icon-tupian", id: 2 },
        { name: "搜索框", icon: "icon-sousuokuang", id: 3 },
        { name: "推荐商品", icon: "icon-jurassic_zan", id: 4 },
        { name: "辅助空白", icon: "icon-fuzhukongbai", id: 5 },
        { name: "商品分组", icon: "icon-fenzu", id: 6 },
        { name: "拼团", icon: "icon-ziyuan", id: 7 },
        { name: "秒杀", icon: "icon-miaosha", id: 8 },
        { name: "大转盘", icon: "icon-dazhuanpan", id: 9 },
        { name: "公告", icon: "icon-gonggao", id: 10 }
      ],
      list2: [],
      activeNames: [],
      count: 0,
      value: "",
      emptyHeight: 30,
      navList: [
        { imgUrl: "", typeName: "导航" },
        { imgUrl: "", typeName: "导航" },
        { imgUrl: "", typeName: "导航" },
        { imgUrl: "", typeName: "导航" }
      ],
      recommendList: [
        { imgUrl: "", title: "导航", price: 9.0, num: 7 },
        { imgUrl: "", title: "导航", price: 9.0, num: 7 },
        { imgUrl: "", title: "导航", price: 9.0, num: 7 },
        { imgUrl: "", title: "导航", price: 9.0, num: 7 }
      ],
      setObj: {},
      bgColor: "",
      interColor: "",
      radioStyle: "1",
      inputValue: "公告：请填写内容，将会在手机上滚动显示！！！",
      noticeBgColor: "#fff7cc"
    };
  },

  methods: {
    log: function(evt) {
      if (evt.added) {
        this.count += 1;
        const item = evt.added.element;
        const idx = this.list2.findIndex(e => e.id === item.id);
        let temp = JSON.parse(JSON.stringify(this.list2));
        temp[idx].id = this.count;
        temp.forEach(e => {
          Object.assign(e, { checkIndex: 0 });
        });
        temp[idx].checkIndex = 1;
        this.list2 = temp;
        this.list2.map(e => {
          if (e.checkIndex == 1) {
            this.setObj = JSON.parse(JSON.stringify(e));
          }
        });
      }
    },
    checkOne(e) {
      this.list2.map(item => {
        item.checkIndex = 0;
      });
      e.checkIndex = 1;
      this.setObj = JSON.parse(JSON.stringify(e));
    },
    end: function(evt) {
      //   evt.item //可以知道拖动的本身
      //   evt.to    // 可以知道拖动的目标列表
      //   evt.from  // 可以知道之前的列表
      //   evt.oldIndex  // 可以知道拖动前的位置
      //   evt.newIndex  // 可以知道拖动后的位置
    },
    setHeight(e) {
      this.emptyHeight = e;
    },
    //外部搜索框颜色
    setBgColor(e) {
      this.bgColor = e;
    },
    //内部搜索框颜色
    setInterColor(e) {
      this.interColor = e;
    },
    //通知公告背景色
    setNoticeColor(e) {
      this.noticeBgColor = e;
    },
    //搜索框样式
    radio(e) {
      this.radioStyle = e;
    },
    //公告内容
    inputVal(e) {
      this.inputValue = e;
    },
    handleChange: function() {},
    deleteItem: function(index) {
      this.list2.splice(index, 1);
    }
  }
};
</script>
<style lang="scss">
.phone {
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: #fff;
  width: 94%;
  height: 600px;
  overflow: hidden;
  overflow-y: auto;
  // background-color: #eee;
  &::-webkit-scrollbar {
      width:0px;
      height:0px;
  }
}


.content {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .item {
    border: 1px dashed #2292dd;
    width: 40%;
    margin: 15px 0;
    .top,
    .bottom {
      margin: 5px 0;
    }
    i {
      color: #2292dd;
      font-size: 28px;
    }
  }
}
.icon {
  position: absolute;
  right: 0;
  top: 0;
}
.checked {
  border: crimson 1px dashed;
}
.phoneBg {
  height: 812px;
  background-image: url(../assets/phone.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  position: relative;
}
</style>