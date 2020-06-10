<template>
  <div class="no-thing">{{text}}</div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "当前没有项目"
    }
  }
};
</script>

<style scoped>
.no-thing {
  padding: 10px;
  text-align: center;
  font-size: 18px;
  color: var(--text-color);
  font-weight: bold;
}
</style>