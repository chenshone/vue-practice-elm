<template>
  <city-list-item title="热门城市" :list="hotCities" :changeBlue="true" />
</template>

<script>
  import CityListItem from '../cityList/CityListItem'

  import { getCity } from 'api/city'
  export default {
    name: 'HotCity',
    components: {
      CityListItem
    },
    props: {
      hotCities: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style lang="less" scoped></style>
