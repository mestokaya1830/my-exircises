<template>
  <div>
    <BetsMobilComponent  v-if="$store.state.auth.mobil" route="bet-summary" title="Tek Maça Kalanlar"/>
    <BetsComponent route="bet-summary" title="Tek Maça Kalanlar" />
  </div>
</template>

<script>
  import BetsComponent from "@/components/bets-component.vue";
  import BetsMobilComponent from "@/components/bets-mobil-component.vue";

  export default {
    name:'Bets',
    components:{
      BetsComponent,
      BetsMobilComponent
    }
  }
</script>
