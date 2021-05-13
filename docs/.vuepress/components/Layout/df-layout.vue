<template>
  <div>
    <df-row>
      <df-col :span="24">
        <div class="layout-content bg-purple-dark"></div>
      </df-col>
    </df-row>
    <df-row>
      <df-col :span="12">
        <div class="layout-content bg-purple-dark"></div>
      </df-col>
      <df-col :span="12">
        <div class="layout-content bg-purple-light"></div>
      </df-col>
    </df-row>
    <df-row>
      <df-col :span="8">
        <div class="layout-content bg-purple-dark"></div>
      </df-col>
      <df-col :span="8">
        <div class="layout-content bg-purple-light"></div>
      </df-col>
      <df-col :span="8">
        <div class="layout-content bg-purple-dark"></div>
      </df-col>
    </df-row>
    <df-row>
      <df-col :span="6">
        <div class="layout-content bg-purple-dark"></div>
      </df-col>
      <df-col :span="6">
        <div class="layout-content bg-purple-light"></div>
      </df-col>
      <df-col :span="6">
        <div class="layout-content bg-purple-dark"></div>
      </df-col>
      <df-col :span="6">
        <div class="layout-content bg-purple-light"></div>
      </df-col>
    </df-row>
  </div>
</template>

<script>
import Col from '../../../../src/components/layout/col'
import Row from '../../../../src/components/layout/row'
export default {
  name: "df-layout",
  components:{
    "df-col":Col,
    "df-row":Row
  }
}
</script>

<style scoped>

</style>
