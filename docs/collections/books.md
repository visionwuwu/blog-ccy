---
title: 爱看的书
sidebar: false
isTimeLine: false
isShowComments: false
---

<template>
    <Collections-List :listData="bookData" />
</template>

<script>
import bookData from '@/data/booksData.js'
export default {
    data() {
        return {
            bookData
        }
    }
}  
</script>
