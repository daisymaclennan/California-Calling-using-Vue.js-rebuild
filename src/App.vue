<template>
  <div id="app">
    <Header />

    <main>
      <section style="position: relative; background-color: #000000; color: #FFFFFF; padding-top: 9.375vw;">
        <BigFadeInText />
        <Map />
        <aside style="margin-top: -40vw;">
          <MapKey />
          <FireStatistics />
        </aside>
      </section>
    </main>
    <GalleryWithText />
    <DarkDesign />
    <LightDesign />
    <Footer />
    <Banner />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import BigFadeInText from './components/BigFadeInText.vue'
import Map from './components/Map.vue'
import MapKey from './components/MapKey.vue'
import Banner from './components/Banner.vue'
import GalleryWithText from './components/GalleryWithText.vue'
import Footer from './components/Footer.vue'
import FireStatistics from './components/FireStatistics.vue'
import DarkDesign from './components/DarkDesign.vue'
import LightDesign from './components/LightDesign.vue'

export default {
  name: 'App',
  components: {
    Header,
    BigFadeInText,
    Map,
    MapKey,
    Banner,
    GalleryWithText,
    Footer,
    FireStatistics,
    DarkDesign,
    LightDesign
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
  border: 1px solid transparent;
}

@media screen and (min-width: 992px){
  #app{
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
  }
}

a{
  text-decoration: none;
  color: inherit;
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

h1, h2, h3 {
  font-family: Larish Neue Semibold;
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
}

p{
  line-height: 100%;
}

@media screen and (min-width: 992px){
  h1 {
    font-size: 7.5vw;
    line-height: 6.25vw;
  }
  h2 {
    font-size: 3.25vw;
    letter-spacing: -.063vw;
    line-height: 3.5vw;
  }
  h3{
    font-size: 2.25vw;
    letter-spacing: -.031vw;
    line-height: 2.5vw;
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


@media screen and (max-width: 991px) and (min-width: 768px){
  p {
    font-size: 3.125vw;
  }
}

@media screen and (max-width: 992px){
  h1{
    font-size: 12.8vw;
    line-height: 12.8vw;
  }

  p{
    font-size: 4.267vw;
    letter-spacing: -.133vw;
    line-height: 6.4vw;
  }

  .button{
    padding: 19.5px 21px;
    font-size: 4.267vw;
    letter-spacing: -.133vw;
    line-height: 6.4vw;
  }
}
</style>
