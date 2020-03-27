<template>
  <section>
    <img src="../assets/img/action1.jpg" alt="" />
    <img src="../assets/img/action2.jpg" alt="" />
    <article>
      <h1>Stuck in <br />the middle.</h1>
      <p>Surrounded by smoke and inspired by the communities’ resilience, our design team reimagined the California Grizzly and used it to create custom tees, pins and posters.</p>
    </article>
    <img src="../assets/img/action3.jpg" alt="" />
    <img src="../assets/img/action4.jpg" alt="" />
    <img src="../assets/img/action5.jpg" alt="" />
    <article class="action-copy-2">
      <p>Our t-shirts (kids and adult sizes), pins, and posters will be available for purchase at our exclusive pop-up shop during our SF Design Week Studio Crawl this Friday, June 21. You can choose what amount to donate. All proceeds will go to the American Red Cross to help the communities that are still displaced.</p>
    </article>
    <img src="../assets/img/action6.jpg" alt="" />
    <img src="../assets/img/action7.jpg" alt="" />
  </section>
</template>

<script>
export default {
  name: 'GalleryWithText'
}
</script>

<style scoped>
section{
  background-color: #FFFFFF;
  overflow-y: visible;
  position: relative;
  z-index: 12;
}



@media screen and (max-width: 1000px){
  article{
    margin-top: 3vw;
    margin-bottom: 3vw;
  }

  article{
    margin-top: 10.4%;
    margin-bottom: 10.4%;
  }
  h1, p
  {
    margin-left: 16.66667%;
  }

  h1{
    margin-top: -1.5vw;
    margin-bottom: 4vw;
  }
  img, p{
    width: 66.66667%;
    margin-left: 16.66667%;
  }

  img + img {
    margin-top: 10.4%;
  }

  img:first-of-type{
    margin-top: -12%;
  }

  img:last-of-type{
    margin-bottom: -12%;
  }

  img + p{
    margin-top: 10.4%;
  }
}

@media screen and (min-width: 1000px){
  section{
    display: flex;
    flex-direction: column;
  }

  article{
    margin-left: 33.33333%;
  }
  h1{
    font-size: 7.5vw;
    line-height: 6.25vw;
    letter-spacing: -.094vw;
    margin-bottom: 1.5%;
  }
  p{
    width: 33.33333%;
  }
  img{
    width: 20.83333%;
  }

  img:first-of-type, img:nth-of-type(4), img:nth-of-type(5){
    width: 25%;
  }

  img:first-of-type{
    margin-top: -5vw;
    margin-left: 66.66667%;
  }

  img:nth-of-type(2){
    margin-top: -3.25vw;
    margin-left: 4.16667%;
  }

  img:nth-of-type(3){
    margin-bottom: 3.25vw;
    margin-top: -6.5vw;
    margin-left: 79.16667%;
  }

  img:nth-of-type(4){
    margin-left: 16.66667%;
  }

  img:nth-of-type(5){
    margin-left: 62.5%;
    margin-top: -3vw;
    margin-bottom: 6.625vw;
  }

  img:nth-of-type(6){
    margin-top: -12vw;
    margin-bottom: 7vw;
  }

  img:last-of-type{
    margin-left: 45.83333%;
    margin-bottom: -3.5vw;
    width: 33.33333%;
  }
}
</style>
