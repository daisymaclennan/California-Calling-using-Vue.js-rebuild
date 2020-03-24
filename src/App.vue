<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Vollkorn|Work+Sans&display=swap');
*{
  margin:0;
}
body{
  font-family: 'Work Sans', sans-serif;
  margin: 0;
  width: 100%;
  overflow-x: hidden;
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.outline-text--white{
  font-kerning: none;
  -webkit-text-stroke: 1px #fff;
  color: hsla(0,0%,100%,0);
}

.button{
  background-color: transparent;
  color: #fff;
  border: 1px solid #aaa;
  letter-spacing: -.5px;
  text-align: center;
  transition: .5s;
  text-decoration: none;
}

.button:hover{
  background-color: #FFF;
  color: #000;
}

@media screen and (min-width: 992px){
  h1, h2, h3 {
    font-family: Larish Neue Semibold;
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
  }
  h1 {
    font-size: 7.5vw;
    line-height: 6.25vw;
  }
  p {
    font-size: 1.5vw;
    letter-spacing: -.031vw;
    line-height: 2.25vw;
  }
  .button {
    padding: 19.5px 42px;
    font-size: 1.5vw;
    letter-spacing: -.031vw;
    line-height: 1.75vw;
  }
}
</style>
