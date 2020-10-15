<template>
  <div>
    <div v-for="(item, index) in items"
         :key="index">
      <column-chart ytitle="Size"
                    :data="item"></column-chart>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chart",
  props: {
    items: {
      type: Object,
      default: () => { },
      required: true
    }
  }

}
</script>

<style lang="scss" scoped>
</style>