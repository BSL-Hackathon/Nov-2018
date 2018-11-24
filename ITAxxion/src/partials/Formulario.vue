<template lang="html">
  <b-row>
    <b-col>
      <b-card title="Crear Bono">
        <b-row>
          <b-col md="6">
            <b-form-group label="Monto del bono" label-for="monto_bono">
              <b-input-group prepend="$">
                <Cleave :options="cleaveOptions" v-model="valorMonto" class="form-control"/>
              </b-input-group>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group label="Tasa de interés" label-for="tasaInteres">
              <b-input-group append="%">
                <Cleave :options="interesOptions" v-model="tasaInteres" class="form-control text-right"/>
              </b-input-group>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <b-form-group label="Período de pago" label-for="periodo_pago">
              <b-input-group :append="periodoPago == 1 ? 'Mes' : 'Meses'">
                <Cleave :options="periodoOptions" v-model="periodoPago" class="form-control text-right"/>
              </b-input-group>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group label="Corte de capital" label-for="corte_capital">
              <b-input-group prepend="$">
                <Cleave :options="cleaveOptions" v-model="corteCapital" class="form-control"/>
              </b-input-group>
            </b-form-group>
          </b-col>
        </b-row>
        <b-btn variant="outline-success" @click="authorize">
          Autorizar
        </b-btn>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import Cleave from 'vue-cleave'
import hash from 'object-hash'

export default {
  name: 'Formulario',
  components: {
    Cleave
  },
  methods: {
    async authorize () {
      console.log(`Monto: ${this.valorMonto}.
        Tasa interes: ${this.tasaInteres}.
        Periodo de pago: ${this.periodoPago}.
        Corte de capital: ${this.corteCapital}.`)
      var bono = {
        baseline: this.corteCapital.replace(/,/g, ''),
        price: this.valorMonto.replace(/,/g, ''),
        periodoPago: this.periodoPago.replace(/,/g, ''),
        tasaInteres: this.tasaInteres.replace(/,/g, '')
      }
      const hashBono = '0x' + hash(bono)
      const body = await this.$store.dispatch('createNewBono', {hashBono, ...bono})
      console.log(body)
    }
  },
  data () {
    return {
      cleaveOptions: {
        numeral: true,
        numeralIntegerScale: 12,
        numeralDecimalScale: 0
      },
      interesOptions: {
        numeral: true,
        numeralDecimalScale: 0,
        numeralIntegerScale: 3

      },
      periodoOptions: {
        numeral: true,
        numeralDecimalScale: 0,
        numeralIntegerScale: 3
      },
      valorMonto: null,
      tasaInteres: null,
      periodoPago: null,
      corteCapital: null
    }
  }
}
</script>

<style lang="css">
</style>
