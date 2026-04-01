<template>
  <div>
    <aside class="live-fixture-left-mobil">
      <div class="menu-1 fjsbac">
        <article class="menu-icons-con">
          <img src="@/assets/img/live.webp" alt="" class="menu-icons">
          <span class="title-2">Futbol Canlı</span>
          <span class="cl-y">({{liveListLength}})</span>
        </article>
        <div class="fjeac">
          <img src="@/assets/img/switch.webp" class="menu-icons mr10 cp" alt="" @click="isLeagueOpen =! isLeagueOpen"  title="Hepsi">
          <img src="@/assets/img/all.webp" class="menu-icons cp mr10 ml10" alt="" @click="getLive()"  title="Hepsi">
        </div>
      </div>
      <div class="live-left-container">
        <div class="live-search-wrapper">
          <input type="search" class="search-m-1" v-model="searchInputMatch" @keydown.enter="searchMatch()" placeholder="Maç ara...">
        </div>
        <div class="fixture-con-mobil">
          <div  v-if="isLoader" class="loader-container">
            <LoaderComponent />
          </div>
          <details :open="isLeagueOpen" class="live-details" v-for="item in liveList" :key="item.Id">
            <summary class="fixture-title-mobil">
              <div><img :src="getFlagsMix(item[0].RegionName)" onerror="this.src='../../../img/Unknown.png'" alt="" class="flags ml10 mr10"></div>
              <div class="left-links-text">{{item[0].RegionName}} {{String(item[0].LeagueName)}}</div>
            </summary>
            <div v-for="(subitem, index) in item" :key="index" @click="getLiveOdds(subitem)" class="live-list soccer-bg">
              <div v-if="subitem.Scoreboard.period !== 'Finished'" class="left-list-con">
                <span class="left-list-items">
                  <span>{{subitem.HomeTeam}}</span>
                  <span>{{subitem.AwayTeam}}</span> 
                </span>
                <div class="left-list-items-time">
                  <span v-if="subitem.Scoreboard.period === '1H'">1.Devre</span>
                  <span v-if="subitem.Scoreboard.period === 'Halftime'">Devre Arası</span>
                  <span v-if="subitem.Scoreboard.period === '2H'">2.Devre</span>
                  <span>{{(subitem.Scoreboard.timer.seconds/60).toFixed(0) }} dk</span>
                  <span>{{subitem.Scoreboard.score}}</span>
                </div>
              </div>
            </div>
          </details>
          <PageEndComponent :length="liveListLength" />
        </div>
      </div>
    </aside>
    <div v-if="liveCenterMobil" class="live-fixture-center-mobil">
      <article class="menu-icons-con-mobil fjsbac">
        <div class="fac">
          <img src="@/assets/img/live.webp" alt="" class="menu-icons ml10">
          <span class="title-2">Canlı Pano</span>
          <span class="cl-y ml10">({{liveOddsLength}})</span>
        </div>
        <img src="@/assets/img/close.webp" alt="" title="Kapat" @click="closeOptions()" class="close">          
      </article>
      <div class="center-con">
        <div v-if="isLiveBet" class="live-center-bet-mobil">
          <div  class="live-center-bet-soccer">
            <div class="live-center-panel pr">
              <div @click="getEvents()" class="scores-board-mobil fjcac po-r cp">
                <span class="sbnh score-fonts">{{String(liveOddsEvent.HomeTeam).slice(0,25)}}</span>
                 <span class="sbs" v-if="liveOddsEvent.Scoreboard">{{liveOddsEvent.Scoreboard.score}}</span>
                <span class="sbna  score-fonts">{{String(liveOddsEvent.AwayTeam).slice(0,25)}}</span>
              </div>
              <div class="center-header">
                <img src="@/assets/img/bars.svg" class="live-timer"/>
                <span v-if="liveOddsEvent.Scoreboard && liveOddsEvent.Scoreboard == 'Halftime'">Devre Arası</span>
                <div v-else>
                  <span class="match-minutes" v-if="liveOddsEvent.Scoreboard">{{(liveOddsEvent.Scoreboard.timer.seconds/60).toFixed(0) }}. dakika</span>
                </div>
              </div>
              <div class="stats-mobil">
                <div class="stats-title">
                  <span class="sti">Gol</span>
                  <span class="sti">Penaltı</span>
                  <span class="sti">Kımızı</span>
                  <span class="sti">Sarı Kart</span>
                </div>
                <div class="stats-con">
                  <div class="sti">
                    <span 
                      v-if="liveOddsEvent.Scoreboard && liveOddsEvent.Scoreboard.score !== undefined"
                      class="stats-item">{{String(liveOddsEvent.Scoreboard.score).slice(0,1)}}
                    </span>
                    <span class="lcs-items-title" title="Goller">&#9917;</span>
                    <span 
                      v-if="liveOddsEvent.Scoreboard && liveOddsEvent.Scoreboard.score !== undefined" 
                      class="stats-item">{{String(liveOddsEvent.Scoreboard.score).slice(-1)}}
                    </span>
                  </div>
                  <div class="sti">
                    <span 
                      v-if="liveOddsEvent.Scoreboard && liveOddsEvent.Scoreboard.penalties !== undefined" 
                      class="stats-item">{{liveOddsEvent.Scoreboard.penalties.player1['255']}}
                    </span>
                    <span class="lcs-items-title" title="Penaltılar">&#129349;</span>
                    <span 
                      v-if="liveOddsEvent.Scoreboard && liveOddsEvent.Scoreboard.penalties !== undefined" 
                      class="stats-item">{{liveOddsEvent.Scoreboard.penalties.player2['255']}}
                    </span>
                  </div>
                  <div class="sti">
                    <span 
                      v-if="liveOddsEvent.Scoreboard && liveOddsEvent.Scoreboard.redCards !== undefined" 
                      class="stats-item">{{liveOddsEvent.Scoreboard.redCards.player1['255']}}
                    </span>
                    <span class="cl-r lcs-items-title" title="Kırmızı Kartlar">&#127074;</span>
                    <span 
                      v-if="liveOddsEvent.Scoreboard && liveOddsEvent.Scoreboard.redCards !== undefined"
                      class="stats-item">{{liveOddsEvent.Scoreboard.redCards.player2['255']}}
                    </span>
                  </div>
                  <div class="sti">
                    <span 
                      v-if="liveOddsEvent.Scoreboard && liveOddsEvent.Scoreboard.yellowCards !== undefined" 
                      class="stats-item">{{liveOddsEvent.Scoreboard.yellowCards.player1['255']}}
                    </span>
                    <span class="cl-y lcs-items-title" title="Sarı Kartlar">&#127074;</span>
                    <span 
                      v-if="liveOddsEvent.Scoreboard && liveOddsEvent.Scoreboard.yellowCards !== undefined" 
                      class="stats-item">{{liveOddsEvent.Scoreboard.yellowCards.player2['255']}}
                    </span>
                  </div>
                </div>
              </div>
              <div v-if="isEvent" class="live-events">
                <div class="event-title">Goller</div>
                <div class="event-wrapper">
                  <h3 class="event-con">
                    <span>Oyuncu</span> 
                    <span>Dakika</span>
                    <span>Evsahibi</span>
                    <span>Deplasman</span>
                  </h3>
                  <template v-if="liveOddsEvent.liveData" v-for="item in liveOddsEvent.liveData.goal" :key="item">
                      <div class="event-con">
                        <span>{{ item.scorerName }}</span>
                        <span>{{ item.timeMin }}</span>
                        <span>{{ item.homeScore }}</span>
                        <span>{{ item.awayScore }}</span>
                      </div>
                    </template>
                  </div>
                <div class="event-title">Kartlar</div>
                <div class="event-wrapper">
                  <h3 class="event-con">
                    <span>Oyuncu</span>
                    <span>Dakika</span>
                    <span>Tip</span>
                    <span>Neden</span>
                  </h3>
                  <template v-if="liveOddsEvent.liveData" v-for="item in liveOddsEvent.liveData.card" :key="item">
                      <div class="event-con">
                        <span>{{ item.playerName }}</span>
                        <span>{{ item.timeMin }}</span>
                        <span>{{ item.type }}</span>
                        <span>{{ item.cardReason }}</span>
                      </div>
                    </template>
                  </div>
              </div>
            </div>
          </div>
          <div class="live-suboptions">
            <header class="fixture-live-menu-mobil">
              <img src="@/assets/img/switch.webp" class="menu-icons cp" alt="" @click="isMarketOpen =! isMarketOpen"  title="Hepsi">
              <input type="search"  v-model="searchInputGame" @keydown.enter="searchGame()" class="search-2 ml10" placeholder="Bahis ara...">
            </header>
            <ul class="nav nav-tabs">
              <li class="live-navbar">
                <a 
                class="live-navbar-items bg-g" 
                @click.prevent="setActive('all'), marketFilter()" 
                :class="{ activeLiveFilter: isActive('all') }" 
                href="#all">Hepsi
              </a>
             
                <a 
                  class="live-navbar-items bg-g" 
                  @click.prevent="setActive('firsthalf'), marketFilter('Devre 1')" 
                  :class="{ activeLiveFilter: isActive('firsthalf') }" 
                  href="#firsthalf">D-1
                </a>
                <a 
                  class="live-navbar-items bg-g" 
                  @click.prevent="setActive('secondhalf'), marketFilter('Devre 2')" 
                  :class="{ activeLiveFilter: isActive('secondhalf') }" 
                  href="#secondhalf">D-2
                </a>
                <a 
                  class="live-navbar-items bg-g" 
                  @click.prevent="setActive('totals'), marketFilter('Toplam Gol')" 
                  :class="{ activeLiveFilter: isActive('totals') }" 
                  href="#totals">Goller
                </a>
              </li>
            </ul>
            <div class="scores-statistics-con">
              <div class="live-tab">
                <div  v-if="isOddsLoader" class="loader-container">
                  <LoaderComponent />
                </div>
                <template v-for="item in liveOdds" :key="item.id">
                  <details :open="isMarketOpen">
                    <summary :class="{suspendClass: item.status == 'Suspended'}" class="sublist-header-mobil bg-g">
                      <span>{{item.name.value}} <span class="cl-y ml10">{{ item.attr }}</span></span>
                    </summary>
                    <div v-if="item.status == 'Visible'" class="subodds-list-mobil">
                      <template v-for="subitem in item.options" :key="subitem">
                        <div class="subodds-wrapper-mobil fjsbac fjsbac">
                          <span class="odds">{{subitem.name.value}}</span>
                          <span class="oddsrate ml5 cl-r" @click="addSlip(item.id, subitem.name.value, subitem.price.odds, item.name.value)">{{subitem.price.odds}}</span>
                        </div>
                      </template>
                    </div>
                  </details>
                </template>
                <PageEndComponent :length="liveOddsLength" />
              </div>
            </div>
          </div>
        </div>
        <div v-else class="live-center-no-bet">
          <h3>Henüz Bir Karşılaşma Seçmediniz..</h3>
          <i class="fas fa-arrow-circle-left cl-r fa-5x"></i>
        </div>
      </div>
    </div>
    <aside v-if="$store.state.openslip" class="slip-side">
      <SlipComponent />
    </aside>
  </div>
</template>
<script>
import axios from "axios"
import mixins from '@/mixins/index'
import SlipComponent from "@/components/slip-component.vue";
import PageEndComponent from "@/components/page-end-component.vue";
import LoaderComponent from "@/components/loader-component.vue";
import { socket } from "@/socket"
export default {
  name: 'Soccerlive',
  mixins: [mixins],
  inject:['moment'],
  components: {
    SlipComponent,
    PageEndComponent,
    LoaderComponent
  },
  data () {
    return {
      liveList: {},
      liveOdds: {},
      liveEvents: {},
      liveOddsEvent: {},
      liveListLength: 0,
      liveOddsLength: 0,
      slip: {},
      searchMatches: {},
      searchGames: {},
      searchInputMatch: '',
      searchInputGame: '',
      intervalLiveList: null,
      intervalLiveOdds: null,
      totalRate: 1,
      isLiveBet: false,
      isBetSlip: false,
      isLeagueOpen: true,
      isMarketOpen: true,
      isLoader: false,
      isOddsLoader: false,
      isEvent: false,
      liveCenterMobil: false,
      activeItem: 'all'
    }
  },
  mounted () {
    this.getLive()
    this.intervalLiveList = setInterval(() => {
      this.getLive()
    }, 60 * 1000)
  },
  methods: {
    async getLive() {
      this.isLoader = true
      await axios.get("/api/games/soccer-live").then((result) => {
        const final = result.data.filter(item =>  !item.LeagueName.includes('eSoccer') && !item.LeagueName.includes('Price Boost') && !item.LeagueName.includes('Enhanced Accas'))
        this.liveList =  this.setGroupMix(final, 'LeagueId')
        this.isLoader = false

        this.searchMatches = final
        this.liveListLength = final.length
        this.transCountriesMix(result.data)

        result.data.forEach(el => {
          if( el.Scoreboard.period == 'Finished'){
            socket.emit("Finished", el)
          }
        });
      })
    },
    getLiveOdds(value) {
      this.isOddsLoader = true
      this.liveOdds = {}
      this.liveEvents = value
      this.isLiveBet = true
      this.liveCenterMobil = true
      if (this.isLiveBet) {
        this.liveOddsFunc()
        this.intervalLiveOdds = setInterval(() => {
          this.liveOddsFunc()
        }, 10 * 1000)
      }
      this.goTop()
    },
    async liveOddsFunc (){
      let avoidMarkets = []
      if(localStorage.getItem('set')){
        avoidMarkets = JSON.parse(localStorage.getItem('set')).map(item => {
          if(item.type == 'soccer-live-market') return item.marketId
        })
      }
      await axios.get(`/api/games/live-odds/${this.liveEvents.Id}`).then((result) => {
        if(avoidMarkets.length > 0){
          this.liveOdds = result.data[0].optionMarkets.filter(item1 => {return !avoidMarkets.some(item2 => (item1.name.value.includes(item2)))})
        } else {
          this.liveOdds = result.data[0].optionMarkets
        }

        this.isOddsLoader = false
        this.liveOdds.sort((a, b) => a.name.value > b.name.value ? 1 : -1)
        this.liveOddsEvent = result.data[0]
        this.searchGames = this.liveOdds
        this.liveOddsLength = this.liveOdds.length
        this.transMarketsMix(this.liveOdds)
        this.transOddsMix(this.liveOdds)
        this.activeItem = 'all'
      })
    },
    async getEvents(){
      this.isEvent = ! this.isEvent
    },
    searchMatch () {
      const temp = this.searchMatches.filter(item => item.HomeTeam.toLowerCase().includes(this.searchInputMatch.toLowerCase()) || item.AwayTeam.toLowerCase().includes(this.searchInputMatch.toLowerCase()))
      this.liveList = this.setGroupMix(temp, 'LeagueId')
      this.liveListLength = temp.length
      this.searchInputMatch = ''
    },
    searchGame () {
      const temp = this.searchGames.filter(item => item.name.value.toLowerCase().includes(this.searchInputGame.toLowerCase()))
      this.liveOdds = temp
      this.liveOddsLength = temp.length
      this.searchInputGame = ''
    },
    addSlip (marketId, option, rate, game) {
      this.slip = {
        betid: this.liveEvents.Id,
        user: this.$store.state.auth.user,
        admin: this.$store.state.auth.admin,
        superadmin: this.$store.state.auth.superadmin,
        matches: this.liveEvents.HomeTeam +' - '+ this.liveEvents.AwayTeam,
        games: game,
        options: option,
        rate: rate,
        stream: 'Canlı',
        state: 'Aktif',
        eventtime:'D-' + (this.liveEvents.Scoreboard.timer.seconds/60).toFixed(0) +'  S-'+ this.liveOddsEvent.Scoreboard.score,
        score:this.liveOddsEvent.Scoreboard.score,
        branch:'soccerStyle',
        marketId:marketId
      }
      if (!this.$store.state.betslip){
        this.$store.commit('setBetSlip', true)
      }
      setTimeout(() => {
        let indexHolder = 0
        if (this.$store.state.slips.length > 0) {
        const findSlip = this.$store.state.slips.find((item,index) =>{
          indexHolder = index
          return item.betid === this.liveEvents.Id
        })
        if (findSlip == undefined) {
          this.$store.commit('setSlips', this.slip)
        } else {
          this.$store.commit('removeSlipItem', indexHolder)
          setTimeout(() => {
            this.$store.commit('setSlips', this.slip)
          }, 10)
        }
      } else {
        this.$store.commit('setSlips', this.slip)
      }
      }, 20)
      this.liveCenterMobil = false
    },
    goTop(){
      window.scrollTo(0, 540)
    },
    isActive (menuItem) {
      return this.activeItem === menuItem
    },
    setActive (menuItem) {
      this.activeItem = menuItem
    },
    marketFilter(marketname){
      if(marketname == undefined){
        this.liveOdds = this.searchGames
        this.liveOddsLength = this.liveOdds.length
      } else {
        this.liveOdds = this.searchGames.filter(item => item.name.value.includes(marketname))
        this.liveOddsLength = this.liveOdds.length
      }
    },
    closeOptions(){
      this.liveCenterMobil = false
    }
  },
  beforeDestroy: function() {
    clearInterval(this.intervalLiveList)
    clearInterval(this.intervalLiveOdds)
  }
}
</script>