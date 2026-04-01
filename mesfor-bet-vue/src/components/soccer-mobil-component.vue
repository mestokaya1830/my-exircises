<template>
  <div>
    <aside class="fixture-side-mobil">
      <div class="fjsaac-col">
        <div class="menu-1 fjsbac">
          <article class="fac">
            <img src="@/assets/img/soccer.webp" alt="" class="menu-icons">
            <span class="title-2 mr20">Futbol</span>
            <span class="cl-y">({{ leaguesLength }})</span>
          </article>
          <div class="fjeac">
            <img src="@/assets/img/switch.webp" class="menu-icons mr10 cp" alt="" @click="isLeagueOpen =! isLeagueOpen"  title="Hepsi">
            <img src="@/assets/img/all.webp" class="menu-icons cp mr10 ml10" alt="" @click="getLeagues()"  title="Hepsi">
          </div>
        </div>
        <select v-model="timeBox" @change="filterAsTime()" class="select-m-1 mtb2">
          <option value="all">Hepsi</option>
          <option value="Saat" disabled>Saat</option>
          <option :value="moment().format('YYYY-MM-DD HH')">1 Saat İçinde</option>
          <option :value="moment().add(1,'hours').format('YYYY-MM-DD HH')">2 Saat İçinde</option>
          <option :value="moment().add(2,'hours').format('YYYY-MM-DD HH')">3 Saat İçinde</option>
          <option :value="moment().add(3,'hours').format('YYYY-MM-DD HH')">4 Saat İçinde</option>
        </select>
        <select v-model="dateBox" @change="filterAsDay()" class="select-m-1 mtb2">
          <option value="Gün" disabled>Gün</option>
          <option value="all">Hepsi</option>
          <option value="today">Bügün</option>
          <option value="tomorrow">Yarın</option>
          <option value="nextday">3.Gün</option>
          <option value="afternextday">4.Gün</option>
        </select>
        <input v-model="searchInputMatch" type="search" ref="search"  @keydown.enter="searchMatch()" class="search-m-1" placeholder="Maç ara...">
       
      </div>
      <div  v-if="isLoader" class="loader-container">
        <LoaderComponent />
      </div>
      <div class="fixture-con-mobil">
        <details :open="isLeagueOpen" v-for="item in leagues" :key="item[0].Id">
          <summary class="fixture-title-mobil">
            <div><img :src="getFlagsMix(item[0].RegionName)" onerror="this.src='../../../img/Unknown.png'" alt=""  class="flags"></div>
            <div>{{ item[0].RegionName }} {{ item[0].LeagueName }}</div>
          </summary>
          <template  v-for="subitem in item" :key="subitem.FixtureId">
            <div class="fixture-list-mobil">
              <div class="match-mobil" @click="getOdds(subitem.FixtureId)">
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
                <div>X</div>
                <div>2</div>
                <div>A</div>
                <div>Ü</div>
                <div>V</div>
                <div>Y</div>
              </div>
              <div class="fixture-list-mobil-bottom">
                <div class="rate" :data-id="subitem.FixtureId" @click="addSlip($event, subitem.HomeTeam, subitem, 'Maç Bahsi')" v-if="subitem.MatchResult[0]">{{ subitem.MatchResult[0].options[0].price.odds }}</div>
                <div class="rate" v-else >&#128274;</div>
                <div class="rate" :data-id="subitem.FixtureId"  @click="addSlip($event, 'X', subitem, 'Maç Bahsi')" v-if="subitem.MatchResult[0]">{{ subitem.MatchResult[0].options[1].price.odds }}</div>
                <div class="rate" v-else >&#128274;</div>
                <div class="rate" :data-id="subitem.FixtureId"  @click="addSlip($event, subitem.AwayTeam, subitem, 'Maç Bahsi')" v-if="subitem.MatchResult[0]">{{ subitem.MatchResult[0].options[2].price.odds }}</div>
                <div class="rate" v-else >&#128274;</div>
                <!-- <div>{{ moment.utc(subitem.Date).tz('Europe/Istanbul').format('HH:mm')}}</div> -->
                <div class="rate" :data-id="subitem.FixtureId"  @click="addSlip($event, 'Alt 2.5', subitem, 'Toplam Gol Alt/Üst 2.5')" v-if="subitem.TotalGoals[0]">{{ subitem.TotalGoals[0].options[1].price.odds }}</div>
                <div class="rate" v-else >&#128274;</div>
                <div class="rate" :data-id="subitem.FixtureId"  @click="addSlip($event, 'Üst 2.5', subitem, 'Toplam Gol Alt/Üst 2.5')" v-if="subitem.TotalGoals[0]">{{subitem.TotalGoals[0].options[0].price.odds}}</div>
                <div class="rate" v-else >&#128274;</div>
                <div class="rate" :data-id="subitem.FixtureId"  @click="addSlip($event, 'Var', subitem, 'Karşılıklı Gol')" v-if="subitem.BothTeamsToScore[0]">{{ subitem.BothTeamsToScore[0].options[0].price.odds }}</div>
                <div class="rate" v-else >&#128274;</div>
                <div class="rate" :data-id="subitem.FixtureId"  @click="addSlip($event, 'Yok', subitem, 'Karşılıklı Gol')" v-if="subitem.BothTeamsToScore[0]">{{ subitem.BothTeamsToScore[0].options[1].price.odds }}</div>
                <div class="rate" v-else >&#128274;</div>
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
            <div class="cl-y">({{oddsLength}})</div>
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
              <summary class="sublist-header-mobil bg-g">
                <span>{{item.name.value}} <span class="cl-y ml10">{{ item.attr }}</span></span>
              </summary>
              <div class="subodds-list-mobil">
                <template v-for="subitem in item.options" :key="subitem">
                  <div class="subodds-wrapper-mobil fjsbac">
                    <span class="odds">{{subitem.name.value}}</span>
                    <span class="oddsrate ml5 cl-r" @click="addSlip($event, subitem.name.value, '', item.name.value)">{{subitem.price.odds}}</span>
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
import axios from "axios"
import mixins from '@/mixins/index.js'
import SlipComponent from "@/components/slip-component.vue";
import PageEndComponent from "@/components/page-end-component.vue";
import LoaderComponent from "@/components/loader-component.vue";

export default {
  name: 'SoccerPage',
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
      isLoader: false,
      isOddsLoader: false,
      subTime: 0
    }
  },
  mounted() {
    this.getLeaguesFunction()
    this.$refs.search.focus()
  },
  methods: {
    async getLeagues() {
      this.isLoader = true
      await axios.get('/api/games/soccer').then((result) => {
        const final = result.data.result
        this.transCountriesMix(final)
        this.leagues = this.setGroupMix(final, 'LeagueId')
        this.isLoader = false
      
        this.leaguesLength = final.length
        this.searchMatches = result.data.result
        this.timeBox = 'Saat'
        this.dateBox = 'Gün'
      })
    },
    async getOdds(id) {
      this.isOddsLoader = true
      let avoidMarkets = []
      this.subOdds = {}
      this.teamName = ''
      this.oddsLength = 0
      this.isSubOptions = true
      this.searchGames = null

      if(localStorage.getItem('set')){
        avoidMarkets = JSON.parse(localStorage.getItem('set')).map(item => {
          if(item.type == 'soccer-market') return item.marketId
        })
      }
      await axios.get('/api/games/odds/'+ id).then((result) => {
        if(avoidMarkets.length > 0){
          this.subOdds = result.data[0].optionMarkets.filter(item1 => {return !avoidMarkets.some(item2 => (item1.name.value.includes(item2)))})
        } else {
          this.subOdds = result.data[0].optionMarkets
        }
        this.subOdds.sort((a, b) => a.name.value > b.name.value ? 1 : -1)
        this.oddsLength = this.subOdds.length
        this.isOddsLoader = false

        this.teamName = result.data[0].HomeTeam + ' - ' + result.data[0].AwayTeam
        this.gameCode = id
        this.subTime = result.data[0].Date
        this.searchGames = this.subOdds
        this.transMarketsMix(this.subOdds)
        this.transOddsMix(this.subOdds)
      })
    },
    closeSub() {
      this.isSubOptions = false
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
      await axios.get(`/api/games/soccer-date-filter/${start}/${end}`).then (result => {
        this.transCountriesMix(result.data.result)
        this.leagues = this.setGroupMix(result.data.result, 'LeagueId')
        this.searchMatches = result.data.result
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
        await axios.get('/api/games/soccer-search/'+ this.searchInputMatch).then((result) => {
          this.leagues = this.setGroupMix(result.data.result, 'LeagueId')
          this.transCountriesMix(result.data.result)
          this.leaguesLength = result.data.result.length
          this.searchInputMatch = ''
        })
      } else {
        this.getLeagues()
      }
    },
    searchGame() {
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
            rate: event.target.innerText,
            stream: 'Bülten',
            state: 'Aktif',
            eventtime: eventTime,
            score: '-:-',
            branch:'soccerStyle'
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
              if (rateclass.includes('bg-lg')){
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
    getLeaguesFunction() {
      this.getLeagues()
      this.intervalLeagueList = setInterval(() => {
        this.getLeagues()
      }, 905 * 1000)
    }
  },
  beforeUnmount: function () {
    clearInterval(this.intervalLeagueList)
  }
}
</script>