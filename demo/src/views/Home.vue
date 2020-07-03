<template>
  <div class="row">
    <div class="col-5">
      <h3>组件配置页面展示</h3>
      <draggable
        tag="el-collapse"
        class="dragArea list-group"
        :list="list2"
        group="comp"
        @change="log"
      >
        <el-collapse
          class="list-group-item left"
          v-for="(element,index) in list2"
          :key="index"
          v-model="activeNames"
          @change="handleChange"
        >
          <el-collapse-item :name="element.id">
            <template slot="title">
              <span>{{element.name}}</span>
              <i class="el-icon-delete" @click.stop="deleteItem(index)"></i>
            </template>
            <div>{{ element.content }}</div>
          </el-collapse-item>
        </el-collapse>
      </draggable>
    </div>

    <div class="col-5 phone">
      <draggable
        class="dragArea list-group"
        :list="list1"
        :group="{ name: 'comp', pull: 'clone', put: false }"
        @change="log"
      >
        <div class="list-group-item" v-for="element in list1" :key="element.id">{{ element.name }}</div>
      </draggable>
    </div>
  </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
  name: "clone",
  display: "Clone",
  order: 2,
  components: {
    draggable
  },
  data() {
    return {
      list1: [
        { name: "组件1", id: 1, content: "内容内容内容。。。。" },
        { name: "组件2", id: 2, content: "内容内容内容。。。。" },
        { name: "组件3", id: 3, content: "内容内容内容。。。。" },
        { name: "组件4", id: 4, content: "内容内容内容。。。。" },
        { name: "组件5", id: 5, content: "内容内容内容。。。。" },
        { name: "组件6", id: 6, content: "内容内容内容。。。。" },
        { name: "组件7", id: 7, content: "内容内容内容。。。。" }
      ],
      list2: [],
      activeNames: [],
      count: 0
    };
  },

  methods: {
    log: function(evt) {
      console.log(evt);
      if (evt.added) {
        this.count += 1;
        const item = evt.added.element;
        const idx = this.list2.findIndex(e => e.id === item.id);
        let temp = JSON.parse(JSON.stringify(this.list2));
        temp[idx].id = this.count;
        this.list2 = temp;
      }
    },
    handleChange: function() {},
    deleteItem: function(index) {
      this.list2.splice(index, 1);
    }
  }
};
</script>
<style lang="scss" scoped>
  .phone{
    background-image: url(../assets/phone.png);
  }
</style>