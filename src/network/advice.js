import {request} from "@/network/request"

export function getAdvice() {
  return request({
    url: "/adviceBooks"
  })
}
