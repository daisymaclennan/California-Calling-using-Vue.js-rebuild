<template>
  <footer>
    <section class="rotating-banner">
      <h1 class="date-list--one">June  21, <span>2019</span> June  21, <span>2019</span> June  21, <span>2019</span></h1>
      <h1 class="date-list--two">June  21, <span>2019</span> June  21, <span>2019</span> June  21, <span>2019</span></h1>
    </section>
    <section class="footer-content">
      <p>Join us</p>
      <h2 style="">Mark your calendar for our SF Design Week Studio Crawl. In addition to custom swag, we’ll also have a DJ, a mixologist, and other cool surprises we can’t tell you about yet.</h2>
      <a class="button" href="https://www.eventbrite.com/e/elephant-studio-crawl-san-francisco-design-week-2019-tickets-63313109214" target="_blank" rel="noopener">RSVP</a>
    </section>
  </footer>
</template>

<script>
import infinityRotateBackwards from '../lib/infinityRotateBackwards'

document.addEventListener("DOMContentLoaded", function() {
  const textOne = document.querySelector('.date-list--one')
  const textTwo = document.querySelector('.date-list--two')

  infinityRotateBackwards(textOne, textTwo, 10000)

  window.addEventListener("resize", function(){
    infinityRotateBackwards(textOne, textTwo, 10000)
  })
});


export default {
  name: 'Footer'
}
</script>

<style scoped>
footer{
  width: 100vw;
  display: block;
  background-color: #000;
  color: #fff;
}

.footer-content{
  padding-top: 240px;
  padding-bottom: 80px;
}

.rotating-banner{
  background-color: #eee;
  color: #000;
  transform: rotate(45deg);
  padding: 8px 0;
  width: 150%;
  margin-top: 10vh;
  position: absolute;
  text-align: center;
  white-space: nowrap;
  text-transform: uppercase;
}

.rotating-banner h1{
  position: absolute;
}

@media screen and (min-width: 992px){
  .rotating-banner{
    height: 7vw;
  }
}

@media screen and (max-width: 992px){
  .rotating-banner{
    height: 12.8vw;
  }
}

.rotating-banner span{
  -webkit-text-stroke: 1px #000;
  color: hsla(0,0%,100%,0);
}

@media screen and (min-width: 1000px){
  .footer-content{
    margin-left: 8.33333%;
  }

  .footer-content h2 {
    margin-top: 1.5vw;
    margin-bottom: 5vw;
    width: 45.83333%;
  }
}

@media screen and (max-width: 1000px){
  .footer-content{
    margin-left: 8.33333%;
    margin-right: 8.33333%;
  }

  .footer-content h2{
    font-size: 6.771vw;
    letter-spacing: -.13vw;
    line-height: 7.292vw;
    margin-bottom: 12vw;
    margin: 0 0 24px;
  }

  .footer-content p{
    margin-bottom: 5vw;
  }
}
</style>