<template>
  <div>
    <el-row>
      <el-col :span="24"
        ><div class="container-title-text">容器列表</div></el-col
      >
      <el-col :span="24"
        ><div class="container-title-button">
          <el-button-group>
            <el-button type="success" size="medium" @click="startContainerClick"
              ><i class="el-icon-video-play"></i><span>Start</span></el-button
            >
            <el-button type="danger" size="medium" @click="stopContainerClick"
              ><i class="el-icon-switch-button"></i><span>Stop</span></el-button
            >
            <el-button type="danger" size="medium"
              ><i class="el-icon-close"></i><span>Kill</span></el-button
            >
            <el-button type="primary" size="medium"
              ><i class="el-icon-refresh-left"></i
              ><span>Restart</span></el-button
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
              ><i class="el-icon-plus"></i
              ><span>Create container</span></el-button
            >
          </el-button-group>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-table
        :data="tableData"
        style="width: 100%"
        stripe
        border
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="40"> </el-table-column>
        <el-table-column label="ID" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.Id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Name" width="160">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.Names }}</span>
          </template>
        </el-table-column>
        <el-table-column label="State" width="160">
          <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium" :type="scope.row.State === 'exited' ? 'primary' : 'success'"
              >{{ scope.row.State }}</el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="Image">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.Image }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Created">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.Created }}</span>
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
      </el-table>
    </el-row>
  </div>
</template>

<script>
import { getContainers } from "@/api/container.js";
import { startContainer } from "@/api/container.js";
import { stopContainer } from "@/api/container.js";
export default {
  data() {
    return {
      tableData: [],
      containerId: "",
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    getAllContainers() {
      getContainers().then((res) => {
        this.tableData = res.data;
      });
    },
    handleSelectionChange(val) {
      this.containerId = val[0].Id;
    },
    startContainerClick() {
      startContainer(this.containerId).then(() => {
        this.getAllContainers()
      })
    },
    stopContainerClick() {
      stopContainer(this.containerId).then(() => {
        this.getAllContainers()
      })
    }
  },
  created() {
    this.getAllContainers();
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