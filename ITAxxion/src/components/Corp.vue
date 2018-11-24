<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <b-row>
      <b-col>
        <pre>Provider: {{provider}}</pre>
        <pre>User: {{user && user.name}}</pre>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card no-body>
          <b-tabs card>
            <b-tab title="Validar bono">
              <ValidarBono />
            </b-tab>
            <b-tab title="Emitir bono">
              Tab Contents 3
            </b-tab>
          </b-tabs>
        </b-card>
      </b-col>
    </b-row>

  </div>
</template>

<script>
import ValidarBono from '@/partials/ValidarBono'
export default {
  name: 'HelloWorld',
  components: {
    ValidarBono
  },
  data () {
    return {
      msg: 'Welcome to BonusTrack'
    }
  },
  computed: {
    provider () {
      return this.$store.state.currentProvider
    },
    user () {
      if (this.$store.state.currentProvider === 'uport') {
        return this.$store.state.uPort
      } else return null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
