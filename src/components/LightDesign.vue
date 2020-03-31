<template>
  <section>
    <img class="rotate" src="../assets/img/cc-circle-2.png" alt="" />
    <article>
      <div class="grid">
        <div class="title">
          <p>002</p>
          <h1>The Poppy Bear</h1>
        </div>
        <div class="quote">
          <h3>This design is inspired by the quote ‘grow through what you go through’ and represents the strength of Californians and how we will continue to thrive, regardless of what knocks us down.</h3>
          <p class="artist">— Alyssa Wigant, Artist</p>
        </div>
      </div>
      <div class="carousel--container">
        <div class="carousel--buttons">
          <svg class="prev--light" viewBox="0 0 61 52" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display: inline;">
            <g id="2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="CC-v6-Desktop" transform="translate(-1329.000000, -5952.000000)" fill="#000000"><g id="Shirts" transform="translate(0.000000, 5232.000000)"><g id="Group-5-Copy-2" transform="translate(1329.000000, 720.000000)"><g id="Group-3"><rect id="Rectangle" x="0" y="25.2460385" width="60.8780488" height="1.77560976"></rect><polygon id="Rectangle" transform="translate(13.294013, 13.570732) rotate(-315.000000) translate(-13.294013, -13.570732) " points="12.4770836 -4.25624103 14.2601539 -4.26370158 14.110943 31.3977044 12.3278727 31.405165"></polygon><polygon id="Rectangle-Copy-2" transform="translate(13.294013, 38.429268) scale(1, -1) rotate(-315.000000) translate(-13.294013, -38.429268) " points="12.4770836 20.6022956 14.2601539 20.594835 14.110943 56.256241 12.3278727 56.2637016"></polygon></g></g></g></g></g>
          </svg>
          <svg class="next--light" viewBox="0 0 61 52" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display: block;">
            <g id="2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="CC-v6-Desktop" transform="translate(-1406.000000, -5952.000000)" fill="#000000"><g id="Shirts" transform="translate(0.000000, 5232.000000)"><g id="Group-5" transform="translate(1436.439024, 746.000000) scale(-1, 1) translate(-1436.439024, -746.000000) translate(1406.000000, 720.000000)"><g id="Group-3"><rect id="Rectangle" x="0" y="25.2460385" width="60.8780488" height="1.77560976"></rect><polygon id="Rectangle" transform="translate(13.294013, 13.570732) rotate(-315.000000) translate(-13.294013, -13.570732) " points="12.4770836 -4.25624103 14.2601539 -4.26370158 14.110943 31.3977044 12.3278727 31.405165"></polygon><polygon id="Rectangle-Copy-2" transform="translate(13.294013, 38.429268) scale(1, -1) rotate(-315.000000) translate(-13.294013, -38.429268) " points="12.4770836 20.6022956 14.2601539 20.594835 14.110943 56.256241 12.3278727 56.2637016"></polygon></g></g></g></g></g>
          </svg>
        </div>
        <div class="carousel--light">
          <img src="../assets/img/michael.png" alt="Golden Bear pins" />
          <img src="../assets/img/pb2.png" alt="Golden Bear poster" />
          <img src="../assets/img/pb3.png" alt="Bianca Rivera modeling the Golden Bear shirt" />
        </div>
      </div>
      <img class="main-img" src="../assets/img/rosebear.png" alt="Golden Bear design created by Kevin Lam">

      <!--<img src="../assets/img/goldenbear.png" alt="Golden Bear design created by Kevin Lam">-->

    </article>
    <!--<div class="spinning-circle">
        <img src="../assets/img/cc-circle-2.png" alt="California Calling circle spinning" />
    </div>-->
  </section>
</template>

<script>
import Siema from 'siema';

document.addEventListener("DOMContentLoaded", function() {
  const lightSiema = new Siema({
    selector: '.carousel--light',
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
  document.querySelector('.prev--light').addEventListener('click', () => lightSiema.prev());
  document.querySelector('.next--light').addEventListener('click', () => lightSiema.next());
});

export default {
  name: 'LightDesign'
}
</script>

<style scoped>
/*Rotation animation*/
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

.rotate{
  animation: rotation 5s infinite linear;
}

section{
  background-color: #fff;
  color: #000;
  overflow: hidden;
  position: relative;
  z-index: 3;
}

@media screen and (max-width: 991px){
  h3{
    font-size: 4.688vw;
    letter-spacing: -.065vw;
    line-height: 5.208vw;
  }
  .carousel--container{
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

  .rotate{
    margin-right: -30%;
    margin-left: auto;
    margin-top: -25%;
  }
}

@media screen and (min-width: 992px){
  .rotate{
    height: 31.25vw;
    display: block;
    margin-bottom: -5px;
    margin-top: -8vw;
    margin-right: -13vw;
    margin-left: auto;
  }
  section{
    padding-bottom: 11.25vw;
    padding-top: 0;
  }

  .grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 5vw;
    margin-left: 8.33333%;
    margin-right: 8.33333%;
    padding-top: 5%;
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
    margin-left: 33.33333%;
  }
  .carousel--container{
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 8.33333%;
    bottom: 8vw;
    transform: translateX(4vw);
  }
  .carousel--light, .carousel--light img{
    width: 298px;
  }
  .carousel--buttons{
    display: flex;
    margin-bottom: 30px;
  }
  .next--light{
    margin-left: 15px;
  }
  .carousel--buttons svg{
    width: 40px;
  }
}
</style>
