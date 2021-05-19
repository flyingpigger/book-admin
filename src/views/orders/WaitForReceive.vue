<template>
  <div>

    <div v-if="orderList.length!==0">
      <div class="order" v-for="order in orderList">
        <div style="background-color: #bbb; margin: 8px"></div>
        <div class="order_top">
          <span>{{ order.date.split(" ")[0] }}</span>
          <span>收货人：{{ order.name }}</span>
          <span>收货地址：{{ order.address }}</span>
          <span>电话：{{ order.tel }}</span>
          <span>待收货</span>
        </div>
        <div class="order_item">
          <van-card style="background-color: white"
                    v-for="item in JSON.parse(order.bookList)"
                    :num="item.count"
                    :price="item.price"
                    :desc="item.description"
                    :title="item.title"
                    :thumb="item.imgUrl"
          />
        </div>
        <div class="total_price">合计实付：￥<span style="font-size: 1.2rem">{{ order.totalPrice }}</span></div>

      </div>
    </div>

    <div v-else class="hint">
      没有此类订单
    </div>

  </div>

</template>

<script>

import {getOrderDelivered} from "@/network/orders"

export default {
  name: "WaitForReceive",
  components: {},
  data() {
    return {
      orderList: []
    }
  },
  created() {
    getOrderDelivered().then((res) => {
      this.orderList = res
    })
  },
  methods: {
  }
}
</script>

<style scoped>

.order {
  background-color: white;
  font-size: 0.9rem;
}

.order_top {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border: solid #ddd;
  border-width: 0 0 1px 0;
}

.total_price {
  width: 100%;
  text-align: right;
  padding: 10px;
  color: black;
  border: solid #ddd;
  border-width: 1px 0;
}

.hint {
  margin-top: 35vh;
  text-align: center;
}
</style>
