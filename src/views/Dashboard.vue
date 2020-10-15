<template>
  <div class="container">
    <Chart :items="getMetrics" />
  </div>
</template>

<script>
import Chart from "../components/Chart"
import { mapActions, mapGetters } from "vuex"
export default {
  name: 'LineChartContainer',
  components: { Chart },
  computed: {
    ...mapGetters({
      getMetrics: "getMetrics"
    })
  },
  methods: {
    ...mapActions({
      handleMetrics: "handleMetrics"
    })
  },
  mounted() {
    this.handleMetrics()
  }
} 
</script>