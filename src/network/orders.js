import {request} from "@/network/request"

export function getOrderPaid() {
  return request({
    url: "/orderPaid"
  })
}

export function getOrderDelivered() {
  return request({
    url: "/orderDelivered"
  })
}

export function getOrderReceived() {
  return request({
    url: "/orderReceived"
  })
}

export function deliverOrder(oid) {
  return request({
    url: '/orderDelivered',
    method: 'PUT',
    params: {
      oid
    }
  })
}
