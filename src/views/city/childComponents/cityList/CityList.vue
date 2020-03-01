<template>
  <div>
    <city-list-item
      v-for="(val, key) in groupCities"
      :key="key"
      :title="key"
      :list="val"
    />
  </div>
</template>

<script>
  import CityListItem from './CityListItem'

  export default {
    name: 'CityList',
    components: {
      CityListItem
    },
    props: {
      groupCities: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped></style>
