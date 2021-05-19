<template>
  <div>

    <el-table
        :data="bookList"
        style="width: 100%">
      <el-table-column
          label="图片">
        <template slot-scope="props">
          <el-image :src="props.row.imgUrl"></el-image>
        </template>
      </el-table-column>
      <el-table-column
          prop="title"
          label="标题"
          width="300">
      </el-table-column>
      <el-table-column
          prop="description"
          label="描述"
          width="400">
      </el-table-column>
      <el-table-column
          prop="price"
          label="价格">
      </el-table-column>
      <el-table-column
          prop="type"
          label="分类">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑
          </el-button>
          <el-popconfirm
              confirm-button-text='好的'
              cancel-button-text='不用了'
              icon="el-icon-info"
              icon-color="red"
              title="确定删除此商品吗？"
              @confirm="handleDelete(scope.$index, scope.row)"
          >
            <el-button
                slot="reference"
                size="mini"
                type="danger">删除
            </el-button>
          </el-popconfirm>
        </template>
      </el-table-column>

    </el-table>

    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
    </el-pagination>

    <el-dialog title="新增菜单" :visible.sync="showEdit">
      <el-form ref="form" :model="form">

        <el-row>
          <el-col>
            <el-form-item label="标题">
              <el-input v-model="form.title" placeholder="填写标题" type="textarea"></el-input>
            </el-form-item>
          </el-col>

          <el-col>
            <el-form-item label="描述">
              <el-input v-model="form.description" placeholder="填写描述" type="textarea"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="价格" style="padding-right: 20px">
              <el-input v-model="form.price" placeholder="填写价格" size="mini"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="分类">
              <el-input v-model="form.type" placeholder="填写分类" size="mini"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="作者">
              <el-input v-model="form.author" placeholder="填写作者" size="mini"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="出版日期">
              <el-input v-model="form.publishDate" placeholder="填写出版日期" size="mini"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">保存</el-button>
              <el-button @click="showEdit = false">取消</el-button>
            </el-form-item>
          </el-col>
        </el-row>

      </el-form>
    </el-dialog>

  </div>
</template>

<script>
import {deleteBook, editBook, getBooks} from "@/network/books"

export default {
  name: "BookList",
  data() {
    return {
      bookList: [],
      currentPage: 1,
      total: 1,
      showEdit: false,
      form: {},
    }
  },
  created() {
    getBooks(1).then((res) => {
      this.bookList = res.data
      this.total = res.total
    })
  },

  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      getBooks(val).then((res) => {
        this.bookList = res.data
        this.total = res.total
      })
    },
    handleEdit(index, row) {
      this.showEdit = true
      this.form = row
    },
    handleDelete(index, row) {
      deleteBook(row).then((res) => {
        if (res.code === 200) {
          location.reload()
        } else {}
      })
    },
    onSubmit() {
      editBook(this.form).then((res) => {
        if (res.code === 200) {
          this.showEdit = false
          this.$notify({
            title: '提示',
            message: '修改成功',
          });
        } else {}
      })
    }
  }
}
</script>

<style scoped>

.hidden {
  display: none;
}

</style>