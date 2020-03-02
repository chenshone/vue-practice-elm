export const goBackMixin = {
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
