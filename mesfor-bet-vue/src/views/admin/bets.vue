<template>
  <div>
    <BetsMobilComponent  v-if="$store.state.auth.mobil" :route="'bet-summary'" :title="'Kuponlar'"/>
    <BetsComponent v-else :route="'bet-summary'" :title="'Kuponlar'" />
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
