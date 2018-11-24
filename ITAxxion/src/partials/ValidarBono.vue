<template lang="html">
  <b-row>
    <b-col>
      <b-card title="Validar Bono">
        <b-row>
          <b-col md="6">
            <b-form-group label="Hash del bono" label-for="monto_bono">
              <b-form-input type="text" name="bono_hash" v-model="bono.hashBono" />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group label="Indice de riesgo" label-for="tasaInteres">
              <b-form-radio-group id="radios2" v-model="bono.indiceRiesgo" name="radioSubComponent">
                <b-form-radio v-for="i in 5" :value="i" :key="i">{{ i }}</b-form-radio>
              </b-form-radio-group>
            </b-form-group>
          </b-col>
        </b-row>
        <b-btn variant="outline-success" @click="validateBono">Validar Bono
        </b-btn>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'ValidarBono',
  data () {
    return {
      bono: {
        hashBono: null,
        indiceRiesgo: null
      }
    }
  },
  methods: {
    async validateBono () {
      const body = await this.$store.dispatch('validateBono', this.bono)
      console.log(body)
    }
  }
}
</script>

<style lang="css">
</style>
