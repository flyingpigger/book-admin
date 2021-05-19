import {request} from "@/network/request"

export function getBooks(page) {
  return request({
    url: "/allBooks/" + page
  })
}

export function deleteBook(book) {
  return request({
    url: "/deleteBook",
    method: "DELETE",
    data: book
  })
}

export function editBook(book) {
  return request({
    url: "/editBook",
    method: "PUT",
    data: book
  })
}