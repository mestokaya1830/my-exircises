<template>
  <div>
    <aside class="fixture-side-mobil">
      <div class="fjsaac-col">
        <div class="menu-1 fjsbac">
          <article class="fac">
            <img src="@/assets/img/basket.webp" alt="" class="menu-icons">
            <span class="title-2 mr20">Basketbol</span>
            <span class="cl-y">({{ leaguesLength }})</span>
          </article>
          <div class="fjeac">
            <img src="@/assets/img/switch.webp" class="menu-icons mr10 cp" alt="" @click="isLeagueOpen =! isLeagueOpen"  title="Hepsi">
            <img src="@/assets/img/all.webp" class="menu-icons cp mr10 ml10" alt="" @click="getLeagues()"  title="Hepsi">
          </div>
        </div>
        <div>
          <select v-model="timeBox" @change="filterAsTime()" class="select-m-1 mtb2">
            <option value="all">Hepsi</option>
            <option value="Saat" disabled>Saat</option>
            <option :value="moment().format('YYYY-MM-DD HH')">1 Saat İçinde</option>
            <option :value="moment().add(1,'hours').format('YYYY-MM-DD HH')">2 Saat İçinde</option>
            <option :value="moment().add(2,'hours').format('YYYY-MM-DD HH')">3 Saat İçinde</option>
            <option :value="moment().add(3,'hours').format('YYYY-MM-DD HH')">4 Saat İçinde</option>
          </select>
        </div>
        <div>
          <select v-model="dateBox" @change="filterAsDay()" class="select-m-1 mtb2">
            <option value="Gün" disabled>Gün</option>
            <option value="all">Hepsi</option>
            <option value="today">Bügün</option>
            <option value="tomorrow">Yarın</option>
            <option value="nextday">3.Gün</option>
            <option value="afternextday">4.Gün</option>
          </select>
          <input v-model="searchInputMatch" type="search"  @keydown.enter="searchMatch()" class="search-m-1" placeholder="Maç ara...">
        </div>
      </div>
      <div  v-if="isLoader" class="loader-container">
        <LoaderComponent />
      </div>
      <div class="fixture-con-mobil">
        <details :open="isLeagueOpen" v-for="item in leagues" :key="item[0].FixtureId">
          <summary class="fixture-title-mobil">
            <div><img :src="getFlagsMix(item[0].RegionName)" onerror="this.src='../../../img/Unknown.png'" alt="" class="flags"></div>
            <div>{{ item[0].RegionName }} {{ item[0].LeagueName }}</div>
          </summary>
          <template  v-for="subitem in item" :key="subitem.FixtureId">
            <div class="fixture-list-mobil">
              <div class="match-mobil-basket" @click="getOdds(subitem.FixtureId)">
                <div class="fixture-date-con">
                  <span class="fixture-date">{{ moment(subitem.Date).format('MM-DD')}}</span>
                  <span>{{ moment(subitem.Date).format('HH:mm')}}</span>
                </div>
                <div class="teams-con">
                  <div class="cl-w">{{ subitem.HomeTeam }}</div>
                  <div class="cl-w">{{ subitem.AwayTeam }}</div>
                </div>
              </div>
              <div class="fixture-list-mobil-top">
                <div>1</div>
                <div>2</div>
                <div>H-</div>
                <div>H+</div>
                <div>A</div>
                <div>Ü</div>
              </div>
              <div class="fixture-list-mobil-bottom">
                <div class="rate outer-rate" :data-id="subitem.FixtureId"  @click="addSlip($event, subitem.HomeTeam, subitem, 'Maç Bahsi')" v-if="subitem.MatchResult[0]">{{ subitem.MatchResult[0].results[0].odds }}</div>
                <div class="rate outer-rate cl-r" v-else >&#128274;</div>
                <div class="rate outer-rate" :data-id="subitem.FixtureId"  @click="addSlip($event, subitem.AwayTeam, subitem, 'Maç Bahsi')" v-if="subitem.MatchResult[0]">{{ subitem.MatchResult[0].results[1].odds }}</div>
                <div class="rate outer-rate cl-r" v-else >&#128274;</div>
                <div class="rate basket-rate" v-if="subitem.Handicap[0]" :data-id="subitem.FixtureId"  @click="addSlip($event, subitem.HomeTeam, subitem, 'Handikap ' + subitem.Handicap[0].results[0].name.value.split(' ').pop())">
                  {{ subitem.Handicap[0].results[0].odds }}
                  <span class="basket-odds-name">{{ subitem.Handicap[0].results[0].name.value.split(' ').pop() }}</span>
                </div>
                <div class="rate cl-r" v-else >&#128274;</div>
                <div class="rate basket-rate" v-if="subitem.Handicap[0]" :data-id="subitem.FixtureId"  @click="addSlip($event, subitem.HomeTeam, subitem, 'Handikap ' + subitem.Handicap[0].results[1].name.value.split(' ').pop())" >
                  {{ subitem.Handicap[0].results[1].odds }}
                  <span class="basket-odds-name">{{ subitem.Handicap[0].results[1].name.value.split(' ').pop() }}</span>
                </div>
                <div class="rate cl-r" v-else >&#128274;</div>

                <div class="rate basket-rate" v-if="subitem.Totals[0]" :data-id="subitem.FixtureId"  @click="addSlip($event, subitem.HomeTeam, subitem, 'Toplam Basket Alt ' + subitem.Totals[0].attr)">
                  {{ subitem.Totals[0].results[0].odds }}
                  <span class="basket-odds-name">{{ subitem.Totals[0].attr }}</span>
                </div>
                <div class="rate cl-r" v-else >&#128274;</div>
                
                <div class="rate basket-rate" v-if="subitem.Totals[0]" :data-id="subitem.FixtureId"  @click="addSlip($event, subitem.HomeTeam, subitem, 'Toplam Basket Üst ' + subitem.Totals[0].attr)">
                  {{ subitem.Totals[0].results[1].odds }}
                  <span class="basket-odds-name">{{ subitem.Totals[0].attr }}</span>
                </div>
                <div class="rate cl-r" v-else >&#128274;</div>
              </div>
            </div>
          </template>
        </details>
        <PageEndComponent :length="leaguesLength" />
      </div>
    </aside>
    <aside v-if="$store.state.openslip" class="slip-side">
      <SlipComponent />
    </aside>
    <div v-if="isSubOptions" class="suboptions-model-mobil">
      <div class="suboptions-mobil">
        <header class="suboptions-menu-mobil fjsbac">
          <div class="suboptions-menu-tools-mobil">
            <img src="@/assets/img/switch.webp" class="menu-icons mr10 cp" alt="" @click="isMarketOpen =! isMarketOpen"  title="Hepsi">
            <img src="@/assets/img/all.webp" class="menu-icons cp mr10 ml10" alt="" @click="resetGame()"  title="Hepsi">
            <div class="cl-y">({{ oddsLength }})</div>
          </div>
          <img src="@/assets/img/close.webp" alt="" title="Kapat" @click="closeSub()" class="close">
        </header>
        <div class="suboptions-header-mobil">
          <input type="text" class="search-m-1" v-model="searchInputGame" @keydown.enter="searchGame()" placeholder="Bahis ara...">
        </div>
        <div class="suboptions-con-mobil">
          <div  v-if="isOddsLoader" class="loader-container">
            <LoaderComponent />
          </div>
          <details :open="isMarketOpen" v-for="item in subOdds" :key="item">
            <summary class="sublist-header-mobil bg-o">
              <span>{{item.name.value}}
                <span class="cl-y ml10">{{ item.attr }}</span>
                <span class="cl-y ml10" v-if="item.name.value.includes('Handikap')">{{ item.results[0].attr }}</span>
                <span class="cl-y ml10" v-if="item.name.value.includes('Handikap')">{{ item.results[1].attr }}</span>
                <span class="cl-y ml10" v-if="item.name.value.includes('Spread')">{{ item.results[0].attr}}  </span><span class="cl-y ml10" v-if="item.name.value.includes('Spread')">{{ item.results[1].attr }}</span>
              </span>
            </summary>
            <div class="subodds-list-mobil">
              <template v-for="subitem in item.results" :key="subitem">
                <div class="subodds-wrapper-mobil fjsbac" >
                  <span class="odds">{{subitem.name.value}}</span>
                  <span class="oddsrate ml5 cl-r" @click="addSlip($event, subitem.name.value, '', item.name.value)">{{subitem.odds}}</span>
                </div>
              </template>
            </div>
          </details>
          <PageEndComponent :length="oddsLength" />
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
import axios from "axios";
import mixins from "@/mixins/index";
import SlipComponent from "@/components/slip-component.vue";
import PageEndComponent from "@/components/page-end-component.vue";
import LoaderComponent from "@/components/loader-component.vue";
export default {
  name: "Basket",
  mixins: [mixins],
  inject:['moment'],
  components: {
    SlipComponent,
    PageEndComponent,
    LoaderComponent
  },
  data() {
    return {
      leagues: {},
      subOdds: {},
      leaguesLength: 0,
      oddsLength: 0,
      searchMatches:{},
      searchGames:{},
      searchInputMatch: '',
      searchInputGame:'',
      slips: {},
      timeBox: 'Saat',
      dateBox: 'Gün',
      isSubOptions: false,
      betSlip: false,
      teamName: '',
      gameCode: '',
      isLeagueOpen: true,
      isMarketOpen: true,
      intervalLeagueList: '',
      marketId: 0,
      subTime: 0,
      isLoader: false,
      isOddsLoader: false,
    };
  },
  mounted() {
    this.getLeaguesFunction()
  },
  methods: {
    async getLeagues() {
      this.isLoader = true;
      await axios.get('/api/games/basket').then((result) => {
        const final = result.data.result
        this.transCountriesMix(final)
        this.leagues = this.setGroupMix(final, 'LeagueId')
        this.isLoader = false;
        this.leaguesLength = final.length;
        this.searchMatches = final;
        this.timeBox = 'Saat'
        this.dateBox = 'Gün'
      })
    },
    async getOdds(id) {
      this.isOddsLoader = true;
      this.subOdds = {}
      this.teamName = ''
      this.oddsLength = 0
      this.isSubOptions = true
      let avoidMarkets = []
      if(localStorage.getItem('set')){
        avoidMarkets = JSON.parse(localStorage.getItem('set')).map(item => {
          if(item.type == 'basket-market') return item.marketId
        })
      }
      await axios.get('/api/games/odds/' + id).then((result) => {
        if(avoidMarkets.length > 0){
          this.subOdds = result.data[0].Markets.filter(item1 => {return !avoidMarkets.some(item2 => (item1.name.value.includes(item2)))})
        } else {
          this.subOdds = result.data[0].Markets
        }

        this.subOdds.sort((a, b) => a.name.value > b.name.value ? 1 : -1)
        this.oddsLength = this.subOdds.length
        this.isOddsLoader = false

        this.teamName = result.data[0].HomeTeam + ' - ' + result.data[0].AwayTeam
        this.gameCode = id
        this.subTime = result.data[0].Date
        this.searchGames = this.subOdds
        this.transMarketsMixBasket(this.subOdds)
        this.transOddsMixBasket(this.subOdds)
      });
    },
    async filterAsDay() {
      let start = ''
      let end = ''
      if(this.dateBox == 'today'){
        this.getLeagues()
        return false
      }
      if(this.dateBox == 'tomorrow'){
        start = this.moment().add(1,'days').format('YYYY MM DD 00:00:00')
        end = this.moment().add(1,'days').format('YYYY MM DD 24:00:00')
      }
      if(this.dateBox == 'nextday'){
        start = this.moment().add(2,'days').format('YYYY MM DD 00:00:00')
        end = this.moment().add(2,'days').format('YYYY MM DD 24:00:00')
      }
      if(this.dateBox == 'afternextday'){
        start = this.moment().add(3,'days').format('YYYY MM DD 00:00:00')
        end = this.moment().add(3,'days').format('YYYY MM DD 24:00:00')
      }
      if(this.dateBox == 'all'){
        start = this.moment().format()
        end = this.moment().add(3,'days').format('YYYY MM DD 24:00:00')
      }
      await axios.get(`/api/games/basket-date-filter/${start}/${end}`).then (result => {
        this.transCountriesMix(result.data.result)
        this.leagues = this.setGroupMix(result.data.result, 'LeagueId')
        this.leaguesLength = result.data.result.length
      })
    },
    filterAsTime() {
      if (this.timeBox == 'all') {
        const temp = this.searchMatches.filter(item => this.moment(item.Date).format('YYYY MM DD') == this.moment().format('YYYY MM DD'))
        this.leagues = this.setGroupMix(temp, 'LeagueId')
        this.leaguesLength = temp.length
        this.timeBox = 'all'
        return false
      }
      const temp = this.searchMatches.filter(item => this.moment(item.Date).format('YYYY-MM-DD HH') == this.timeBox)
      this.leagues = this.setGroupMix(temp, 'LeagueId')
      this.leaguesLength = temp.length
    },
    async searchMatch() {
      if(this.searchInputMatch){
        await axios.get('/api/games/basket-search/'+ this.searchInputMatch).then((result) => {
          this.leagues = this.setGroupMix(result.data.result, 'LeagueId')
          this.transCountriesMix(result.data.result)
          this.leaguesLength = result.data.result.length
          this.searchInputMatch = ''
        })
      } else {
        this.getLeagues()
      }
    },
    searchGame () {
      const temp = this.searchGames.filter(item => item.name.value.toLowerCase().includes(this.searchInputGame.toLowerCase()))
      this.subOdds = temp
      this.oddsLength = temp.length
      this.searchInputGame = ''
    },
    resetGame() {
      const temp = this.searchGames
      this.subOdds = temp
      this.oddsLength = temp.length
      this.searchInputGame = ''
    },
    closeSub() {
      this.isSubOptions = false;
      this.isSubSlip = false;
      this.isLoader = false;
    },
    addSlip(event, option, subitem, game) {
      const rateclass = event.target.className
      const parent = event.target.parentElement
      event.target.classList.toggle('bg-lg')
      parent.querySelectorAll('.bg-lg').forEach(item => {
        item.classList.remove('bg-lg')
        if(subitem != ''){
          event.target.classList.add('bg-lg')
        }
      })
      this.selectedId = true
      let gameCode = ''
      let match = this.teamName
      let eventTime = ''
      if (subitem == '') {
        match = this.teamName
        gameCode = this.gameCode
      } else {
        match = subitem.HomeTeam + ' - ' + subitem.AwayTeam
        gameCode = subitem.FixtureId
      }
      const finishedSlip = () => {
        if (event !== '-') {
          this.slips = {
            betid: gameCode,
            user: this.$store.state.auth.user,
            admin: this.$store.state.auth.admin,
            superadmin: this.$store.state.auth.superadmin,
            matches: match,
            games: game,
            options: option,
            rate: event.target.innerText.split('\n')[0],
            stream: 'Bülten',
            state: 'Aktif',
            eventtime: eventTime,
            score: '-:-',
            branch:'basketStyle'
          }
          if (!this.$store.state.betslip) {
            this.$store.commit('setBetSlip', true)
          }
          if (this.$store.state.slips.length > 0) {
            let indexHolder = 0
            const findSlip = this.$store.state.slips.find((item, index) => {
              indexHolder = index
              return item.betid == gameCode
            })
            if (findSlip == undefined) {
              this.$store.commit('setSlips', this.slips)
            } else {
              if (rateclass.includes('bg-lg')) {
                this.$store.commit('removeSlipItem', indexHolder)
                if (this.$store.state.slips < 1) {
                  this.$store.commit('setBetSlip', false)
                }
              } else {
                this.$store.commit('removeSlipItem', indexHolder)
                setTimeout(() => {
                  this.$store.commit('setSlips', this.slips)
                }, 10)
              }
            }
          } else {
            this.$store.commit('setSlips', this.slips)
          }
        }
      }
      if (subitem) {
        eventTime = this.moment(subitem.Date).format('YYYY-MM-DD HH:mm')
        // eventTime = moment(subitem.Date).tz('Europe/Istanbul').format('YYYY-MM-DD HH:mm')
        finishedSlip()
        return false
      }
      eventTime = this.moment(this.subTime).format('YYYY-MM-DD HH:mm')
      // eventTime = moment(this.subTime).tz('Europe/Istanbul').format('YYYY-MM-DD HH:mm')
      finishedSlip()
      this.isSubOptions = false
    },
    getLeaguesFunction(){
      this.getLeagues();
      this.intervalLeagueList = setInterval(() => {
        this.getLeagues()
      }, 905 * 1000)
    }
  },
  beforeDestroy: function () {
    clearInterval(this.intervalLeagueList);
  },
};
</script>
