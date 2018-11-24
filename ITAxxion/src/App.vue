<template>
  <div id="app">
    <AppHeader />
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
export default {
  name: 'App',
  components: {
    AppHeader
  },
  computed: {
    isUserAuthenticated: {
      get () {
        return this.$store.state.isUserAuthenticated
      },

      set (isUserAuthenticated) {
        this.$store.commit('SET_IS_USER_AUTHENTICATED', isUserAuthenticated)
      }
    }
  },
  methods: {
    deleteCookie: cookie => { document.cookie = `${cookie}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;` }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

#app {
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
