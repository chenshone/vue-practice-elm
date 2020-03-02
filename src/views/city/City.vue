<template>
  <div id="city">
    <city-nav-bar />
    <scroll class="city-scroll" :probeType="3">
      <current-city :guessCity="guessCity" />
      <hot-city :hotCities="hotCities" />
      <city-list :groupCities="sortGroupCity" />
    </scroll>
  </div>
</template>

<script>
  import Scroll from 'components/common/Scroll'

  import CityNavBar from './childComponents/CityNavBar'
  import CurrentCity from './childComponents/CurrentCity'
  import HotCity from './childComponents/hotCity/HotCity'
  import CityList from './childComponents/cityList/CityList'

  import { getCity } from 'api/city'
  export default {
    name: 'City',
    components: {
      Scroll,
      CityNavBar,
      CurrentCity,
      HotCity,
      CityList
    },
    data() {
      return {
        hotCities: [],
        guessCity: '定位不成功',
        groupCities: {}
      }
    },
    created() {
      this.getCity('guess')
      this.getCity('hot')
      this.getCity('group')
    },
    methods: {
      async getCity(type) {
        try {
          let result = await getCity(type)
          // console.log(result)
          switch (type) {
            case 'hot':
              this.hotCities = result.map(val => val.name)
              break
            case 'group':
              this.groupCities = result
              break
          }
        } catch (error) {
          console.log(error)
        }
      }
    },
    computed: {
      //将获取的数据按照A-Z字母开头排序
      sortGroupCity() {
        let sortObj = {}
        for (let i = 65; i <= 90; i++) {
          if (this.groupCities[String.fromCharCode(i)]) {
            sortObj[String.fromCharCode(i)] = this.groupCities[
              String.fromCharCode(i)
            ]
          }
        }
        return sortObj
      }
    }
  }
</script>

<style lang="less" scoped>
  .city-scroll {
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    top: 46px;
    bottom: 0;
    z-index: 999;
  }
</style>
