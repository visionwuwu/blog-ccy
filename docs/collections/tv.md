---
title: 爱追的剧
sidebar: false
isTimeLine: false
isShowComments: false
---

<template>
    <Collections-List :listData="tvData" />
</template>

<script>
import tvData from 'data/tvData.js'
export default {
    data () {
        return {
            tvData
        }
    }
}
</script>


