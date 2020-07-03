<template>
  <div class="set">
    <div class="title">{{setObj.name}}设置</div>
    <div v-if="setObj.name=='搜索框'">
      <div class="search">
        <div>选择风格</div>
        <div>
          <van-radio-group v-model="radio" direction="horizontal" @change="changeRadio">
            <van-radio name="1">普通搜索</van-radio>
            <van-radio name="2">顶部搜索</van-radio>
          </van-radio-group>
        </div>
      </div>
      <div v-show="radio=='2'" class="chooseColor">
        <div class="external">
          <div class="title">外底色</div>
          <div>
            <span class="color">
              <colorPicker v-model="bgColor" @change="headleChangebgColor" />
            </span>
          </div>
        </div>
        <div class="interior">
          <div class="title">内底色</div>
          <div>
            <span class="color">
              <colorPicker v-model="interColor" @change="headleChangeinterColor" />
            </span>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="setObj.name=='公告'">
      <div class="notice">
        <div class="label">
          公告内容：
        </div>
        <el-input
          style="width:350px"
          placeholder="请输入内容"
          v-model="input"
          @input='changeInput'
          >
        </el-input>
      </div>
      <div class="notice">
        <div class="label">
          公告链接：
        </div>
        <el-select v-model="herf" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
       <div class="notice">
        <div class="label">
          背景：
        </div>
        <span class="color">
          <colorPicker v-model="noticeColor" @change="headleChangenoticeColor" />
        </span>
      </div>
    </div>
    <div v-else-if="setObj.name=='辅助空白'" class="empty">
      <div class="left">空白高度：</div>
      <div class="mid">
        <van-slider v-model="value" :min="20" :max="100" active-color="#ee0a24" @change="onChange">
          <template #button>
            <div class="custom-button">{{ value }}</div>
          </template>
        </van-slider>
      </div>
    </div>
    <div v-else-if="setObj.name=='导航'"></div>
    <div v-else-if="setObj.name=='推荐商品'"></div>
    <div v-else-if="setObj.name=='拼团'"></div>
    <div v-else-if="setObj.name=='图片组合'"></div>
    <div v-else-if="setObj.name=='商品分组'"></div>
    <div v-else-if="setObj.name=='秒杀'"></div>
    <div v-else-if="setObj.name=='大转盘'"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 20,
      radio: "1",
      noticeColor:'#fff7cc',
      bgColor: "#fff",
      interColor: "#ccc",
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      input:'',
      herf:''
    };
  },
  props: {
    setObj: {
      type: Object
    }
  },
  methods: {
    onChange(value) {
      this.$emit("setHeight", value);
    },
    headleChangebgColor(e) {
      this.bgColor = e;
      this.$emit("setBgColor", this.bgColor);
    },
    headleChangeinterColor(e) {
      this.interColor = e;
      this.$emit("setInterColor", this.interColor);
    },
    //通知公告背景色
    headleChangenoticeColor(e){
      this.$emit("setNoticeColor", this.noticeColor);
    },
    changeRadio(e){
      this.$emit("radio", this.radio);
    },
    //input值改变
    changeInput(e){
      this.$emit("inputVal", e);
    }
  }
};
</script>

<style lang="scss" scoped>
.set {
  height: 100vh;
  border: 1px #ddd solid;
}
.title {
  text-align: left;
  margin: 15px;
}
.empty {
  margin: 15px;
  height: 30px;
  line-height: 30px;
  vertical-align: center;
  display: flex;
  align-items: center;
  .mid {
    width: 200px;
  }
  .right {
    margin-left: 20px;
  }
  .custom-button {
    width: 26px;
    color: #fff;
    font-size: 10px;
    line-height: 18px;
    text-align: center;
    background-color: #ee0a24;
    border-radius: 100px;
  }
}
.search {
  display: flex;
  justify-content: center;
  div {
    &:last-child {
      margin-left: 15px;
    }
  }
}
.chooseColor {
  display: flex;
  justify-content: space-around;
  .external,.interior{
      display: flex;
      align-items: center;
  }
  .color {
    border: 1px solid #bbb;
    padding: 3px 2px 0;
  }
}
.notice{
  display: flex;
  margin-left: 50px;
  margin-top: 20px;
  align-items: center;
  .label{
    margin-right: 5px;
  }
  .color {
    border: 1px solid #bbb;
    padding: 3px 2px 0;
  }
}
</style>