<template lang="html">
  <b-navbar toggleable="md" type="dark" variant="info">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand :to="'/'">BonusTrack</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown right>
          <!-- Using button-content slot -->
          <template slot="button-content">
            <span v-if="!isUserAuthenticated">User</span>
            <span v-else-if="isUserAuthenticated && provider == 'uport'">
              <img :src="user.avatar.uri" alt="avatar" v-if="user.avatar" class="rounded-circle" height="50">
              <span>{{ user.name }}</span>
            </span>
            <div v-else>Metamask user</div>
          </template>
          <b-dropdown-item v-if="!isUserAuthenticated" :to="{ name: 'Login'}">Login</b-dropdown-item>
          <b-dropdown-item v-if="isUserAuthenticated" @click="signOut">Logout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>

  <!-- navbar-1.vue -->
</template>

<script>
export default {
  name: 'AppHeader',
  methods: {
    signOut () {
      this.isUserAuthenticated = false
      if (this.provider === 'uport') {
        this.provider = null
        this.uPort = null
      }
      localStorage.clear()
      this.$router.push({name: 'Login'})
    }
  },
  computed: {
    user () {
      return this.$store.state.uPort
    },
    isUserAuthenticated: {
      get () {
        return this.$store.state.isUserAuthenticated
      },

      set (isUserAuthenticated) {
        this.$store.commit('SET_IS_USER_AUTHENTICATED', isUserAuthenticated)
      }
    },
    provider: {
      get () {
        return this.$store.state.currentProvider
      },
      set (provider) {
        this.$store.commit('SET_LOGIN_PROVIDER', provider)
      }
    },
    uPort: {
      get () {
        return this.$store.state.uPort
      },
      set (data) {
        this.$store.commit('SET_UPORT_DATA', data)
      }
    }
  }
}
</script>

<style lang="css">
</style>
