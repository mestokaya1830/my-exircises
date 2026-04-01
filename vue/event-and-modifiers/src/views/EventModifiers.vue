<template>
  <div>
    <h2>{{ title }}</h2>
    <div class="wrapper">
      <article>
        <h3>Standart</h3>
        <p>Click on each box and see result</p>
        <div class="outer" @click="outer()">
          <div class="middle" @click="middle()">
            <div class="inner" @click="inner()"></div>
          </div>
        </div>
      </article>
      <article>
        <h3>Self</h3>
        <p>Click on each box and see result</p>
        <div class="outer" @click.self="outer()">
          <div class="middle" @click.self="middle()">
            <div class="inner" @click="inner()"></div>
          </div>
        </div>
      </article>
      <article>
        <h3>Stop</h3>
        <p>Click on each box and see result</p>
        <div class="outer" @click="outer()">
          <div class="middle" @click.stop="middle()">
            <div class="inner" @click.stop="inner()"></div>
          </div>
        </div>
      </article>
      <article>
        <h3>Capture</h3>
        <!-- capture event modifier helps to change the bubbling sequence -->
        <p>Click on each box and see result</p>
        <div class="outer" @click.capture="outer()">
          <div class="middle" @click.capture="middle()">
            <div class="inner" @click="inner()"></div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EventModifiers',
  data() {
    return {
      title: 'Event Modifiers'
    }
  },
  methods: {
    outer() {
      alert('Outer')
    },
    middle() {
      alert('Middle')
    },
    inner() {
      alert('Inner')
    }
  }
}
</script>
<style>
.wrapper {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.outer,
.middle,
.inner {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.middle {
  width: 200px;
  height: 200px;
}

.inner {
  width: 100px;
  height: 100px;
}
</style>