<template>
  <section>
    <LazyHeader @getquery="getQdata" />
    <div class="container space-fx">
      <div v-if="resultData.length === 0" class="no-list text-center">
        <img src="/images/icon/search.png" alt="search.png" />
        <h1>...No Data...</h1>
      </div>
      <div class="list">
        <div v-for="(itm, idx) in resultData" :key="idx" class="content">
          <div class="link">
            <img v-if="itm.thumbnail != ''" :src="itm.thumbnail" alt="" />
            <div>
              <a
                :href="itm.href"
                target="_blank"
                rel="noopener noreferrer"
                class="title"
              >
                <h3>{{ itm.title }}</h3>
              </a>
              <a :href="itm.href">{{ itm.href }}</a>
            </div>
          </div>
          <p>{{ itm.ingredients }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    const resultData: Array<Object> = []
    const page: number = 1
    const waitLoad: boolean = false

    return {
      resultData,
      page,
      waitLoad,
    }
  },

  mounted() {
    this.getData(this.$nuxt.$route.query.q.toString())
    this.scrollWindow()
  },
  methods: {
    async getQdata(q: string = '') {
      this.page = 1
      this.$router.push({ query: { p: this.page.toString(), q } })
      window.scroll(0, 0)
      await this.getData(q)
    },
    async getData(q: string) {
      console.log('srs', q)
      this.$router.push({ query: { p: this.page.toString(), q } })
      if (typeof q === 'undefined' || q === '') {
        this.resultData = []
      } else {
        this.waitLoad = true
        await this.$axios
          .$get('/api', {
            params: {
              q,
              p: this.page,
            },
          })
          .then((res: any) => {
            this.waitLoad = false
            if (typeof res.results !== 'undefined') {
              if (this.page > 1) {
                res.results.map((itm: any) => {
                  this.resultData.push(itm)
                })
                if (res.results.length === 0) {
                  if (this.page > 1) {
                    this.page--
                  }
                }
              } else {
                this.resultData = res.results
              }
            }
          })
          .catch((err: any) => {
            if (this.page > 1) {
              this.page--
            }
            this.waitLoad = true
            console.log('err', err)
          })
      }
    },
    scrollWindow() {
      window.onscroll = async () => {
        const bottomOfWindow: boolean =
          document.documentElement.scrollTop + window.innerHeight >=
          document.documentElement.offsetHeight -
            (window.screen.availWidth < 600 ? 100 : 0)
        if (bottomOfWindow && !this.waitLoad) {
          this.page++
          await this.getData(this.$nuxt.$route.query.q.toString())
        }
      }
    },
  },
})
</script>
