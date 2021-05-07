<template>
  <div>
    <el-row>
      <el-col :span="24"
        ><div class="container-title-text">容器列表</div></el-col
      >
      <el-col :span="24"
        ><div class="container-title-button">
          <el-button-group>
            <el-button type="success" size="medium"
              ><i class="el-icon-video-play"></i><span>Start</span></el-button
            >
            <el-button type="danger" size="medium"
              ><i class="el-icon-switch-button"></i><span>Stop</span></el-button
            >
            <el-button type="danger" size="medium"
              ><i class="el-icon-close"></i><span>Kill</span></el-button
            >
            <el-button type="primary" size="medium"
              ><i class="el-icon-refresh-left"></i><span>Restart</span></el-button
            >
            <el-button type="primary" size="medium"
              ><i class="el-icon-video-pause"></i><span>Pause</span></el-button
            >
            <el-button type="primary" size="medium"
              ><i class="el-icon-refresh"></i><span>Resume</span></el-button
            >
            <el-button type="danger" size="medium"
              ><i class="el-icon-delete"></i><span>Remove</span></el-button
            >
          </el-button-group>
          <el-button-group>
            <el-button type="primary" size="medium"
              ><i class="el-icon-plus"></i><span>Create container</span></el-button
            >
          </el-button-group>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-table :data="tableData" style="width: 100%" stripe border>
        <el-table-column label="Name" width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="State" width="180">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>姓名: {{ scope.row.name }}</p>
              <p>住址: {{ scope.row.address }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="Actions">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
        <el-table-column label="Image">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Created">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "Mysql",
          name: "Running",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "Redis",
          name: "Running",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "Elasticsearch",
          name: "Running",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "Kibana",
          name: "Running",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
  line-height: 32px;
}
el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

.container-title-text,
.container-title-button {
  text-align: left;
  padding-left: 20px;
  border: 2px solid #e8e8e8;
  border-radius: 4px;
}

.container-title-button {
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #fff;
}

.container-title-button span {
  font-weight: 700;
}

.container-title-button i {
    font-weight: 700;
}
</style>