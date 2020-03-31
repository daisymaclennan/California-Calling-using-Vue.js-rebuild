<template>
  <section>
    <article>
      <div class="grid">
        <div class="title">
          <p>001</p>
          <h1>The Golden Bear</h1>
        </div>
        <div class="quote">
          <h3>This design is all about the resilience of California to overcome difficult situations and come out stronger than before. It’s a flip of the UNC Tarheel mascot with added elements like the California poppy.</h3>
          <p class="artist">— Kevin Lam, Artist</p>
        </div>
      </div>
      <img class="main-img" src="../assets/img/goldenbear.png" alt="Golden Bear design created by Kevin Lam">

      <!--<img src="../assets/img/goldenbear.png" alt="Golden Bear design created by Kevin Lam">-->
      <div class="carousel--container">
        <div class="carousel--buttons">
          <svg class="prev--dark" viewBox="0 0 61 52" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display: inline;">
            <g id="2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="CC-v6-Desktop" transform="translate(-1329.000000, -5952.000000)" fill="#FFFFFF"><g id="Shirts" transform="translate(0.000000, 5232.000000)"><g id="Group-5-Copy-2" transform="translate(1329.000000, 720.000000)"><g id="Group-3"><rect id="Rectangle" x="0" y="25.2460385" width="60.8780488" height="1.77560976"></rect><polygon id="Rectangle" transform="translate(13.294013, 13.570732) rotate(-315.000000) translate(-13.294013, -13.570732) " points="12.4770836 -4.25624103 14.2601539 -4.26370158 14.110943 31.3977044 12.3278727 31.405165"></polygon><polygon id="Rectangle-Copy-2" transform="translate(13.294013, 38.429268) scale(1, -1) rotate(-315.000000) translate(-13.294013, -38.429268) " points="12.4770836 20.6022956 14.2601539 20.594835 14.110943 56.256241 12.3278727 56.2637016"></polygon></g></g></g></g></g>
          </svg>
          <svg class="next--dark" viewBox="0 0 61 52" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display: block;">
            <g id="2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="CC-v6-Desktop" transform="translate(-1406.000000, -5952.000000)" fill="#FFFFFF"><g id="Shirts" transform="translate(0.000000, 5232.000000)"><g id="Group-5" transform="translate(1436.439024, 746.000000) scale(-1, 1) translate(-1436.439024, -746.000000) translate(1406.000000, 720.000000)"><g id="Group-3"><rect id="Rectangle" x="0" y="25.2460385" width="60.8780488" height="1.77560976"></rect><polygon id="Rectangle" transform="translate(13.294013, 13.570732) rotate(-315.000000) translate(-13.294013, -13.570732) " points="12.4770836 -4.25624103 14.2601539 -4.26370158 14.110943 31.3977044 12.3278727 31.405165"></polygon><polygon id="Rectangle-Copy-2" transform="translate(13.294013, 38.429268) scale(1, -1) rotate(-315.000000) translate(-13.294013, -38.429268) " points="12.4770836 20.6022956 14.2601539 20.594835 14.110943 56.256241 12.3278727 56.2637016"></polygon></g></g></g></g></g>
          </svg>
        </div>
        <div class="carousel--dark">
          <img src="../assets/img/gb2.png" alt="Golden Bear pins" />
          <img src="../assets/img/gb3.png" alt="Golden Bear poster" />
          <img src="../assets/img/bianca.png" alt="Bianca Rivera modeling the Golden Bear shirt" />
        </div>
      </div>
    </article>
    <!--<div class="spinning-circle">
        <img src="../assets/img/cc-circle-2.png" alt="California Calling circle spinning" />
    </div>-->
  </section>
</template>

<script>
import Siema from 'siema';

document.addEventListener("DOMContentLoaded", function() {
  const darkSiema = new Siema({
    selector: '.carousel--dark',
    duration: 200,
    easing: 'ease-out',
    perPage: 1,
    startIndex: 0,
    draggable: true,
    multipleDrag: false,
    threshold: 20,
    loop: true,
    rtl: false
  });
  document.querySelector('.prev--dark').addEventListener('click', () => darkSiema.prev());
  document.querySelector('.next--dark').addEventListener('click', () => darkSiema.next());
});

export default {
  name: 'DarkDesign'
}
</script>

<style scoped>
section{
  background-color: #000;
  color: #fff;
  padding-top: 25%;
  position: relative;
  z-index: 10;
}


@media screen and (max-width: 991px){
  h3{
    font-size: 4.688vw;
    letter-spacing: -.065vw;
    line-height: 5.208vw;
  }
  .main-img{
    margin-bottom: 7vw;
  }
  .title{
    margin-bottom: 5vw;
  }
  .quote{
    margin-bottom: 7vw;
  }
  .artist{
    margin-top: 4vw;
  }
  img, .quote, .title{
    width: 66.66667%;
    display: block;
    margin-left: 16.66667%;
  }
  .carousel--buttons{
    display: none;
  }
}

@media screen and (min-width: 992px){
  section{
    padding-top: 11.25vw;
  }
  .grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 5vw;
    margin-left: 8.33333%;
    margin-right: 8.33333%;
  }
  .title{
    width: 25%;
  }
  .quote{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .artist{
    margin-top: 2vw;
  }
  .main-img{
    width: 58.33333%;
    margin-left: 8.33333%;
  }
  .carousel--container{
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 8.33333%;
    bottom: -100px;
  }
  .carousel--dark, .carousel--dark img{
    width: 298px;
  }
  .carousel--buttons{
    display: flex;
    margin-bottom: 30px;
    margin-left: auto;
  }
  .next--dark{
    margin-left: 15px;
  }
  .carousel--buttons svg{
    width: 40px;
  }
}
</style>
