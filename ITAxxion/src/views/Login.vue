<template lang="html">
  <div class="">
    <b-row>
      <b-col class="my-2">
        <b-card title="Login">
          <b-row>
            <b-col>
              <b-btn @click="logIn('uport')">Use uPort
              </b-btn>
            </b-col>
            <b-col>
              <b-btn @click="logIn('metamask')">
                Use MetaMask
              </b-btn>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Login',
  components: {
    //
  },
  methods: {
    async logIn (provider) {
      console.log(`I entered in ${provider}`)
      switch (provider) {
        case 'uport':
          const body = await this.$store.dispatch('signIn')
          console.log(body)
          this.setIsUserAuthenticated(true)
          this.setLoginProvider(provider)
          this.setUportUser(body.payload)
          this.$emit('userLoggedIn')
          this.$router.push({name: 'Home'})
          break
        case 'metamask':
          this.setIsUserAuthenticated(true)
          this.$emit('userLoggedIn')
          this.$router.push({name: 'Corp'})
          break
        default:
          break
      }
    },

    ...mapMutations({
      setIsUserAuthenticated: 'SET_IS_USER_AUTHENTICATED',
      setLoginProvider: 'SET_LOGIN_PROVIDER',
      setUportUser: 'SET_UPORT_DATA'
    })
  },
  computed: {
    currentProvider: {
      get () {
        return this.$store.state.currentProvider
      }
    }
  }
}
</script>

<style lang="css">
</style>
