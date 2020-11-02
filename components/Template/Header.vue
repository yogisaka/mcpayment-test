<template>
  <div class="header fix-top">
    <div class="container">
      <div class="logo">
        <img src="/images/logo/ms-icon-310x310.png" alt="R" />
      </div>
      <div class="search">
        <form @submit="getResult">
          <input
            v-model="query"
            class="form-control"
            type="text"
            name="q"
            placeholder="Enter key word..."
          />
        </form>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    const query: string = ''

    return {
      query,
    }
  },
  mounted() {
    this.query =
      typeof this.$nuxt.$route.query.q !== 'undefined'
        ? this.$nuxt.$route.query.q.toString()
        : ''
  },
  methods: {
    getResult(event: any) {
      event.preventDefault()
      this.$emit('getquery', this.query)
    },
  },
})
</script>
