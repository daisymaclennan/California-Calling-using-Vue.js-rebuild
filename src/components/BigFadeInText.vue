<template>
  <h1>
    <div class="text--line">
      <div>Last</div>
      <div>year,</div>
      <div>nearly</div>
      <div>2</div>
    </div>
    <div class="text--line">
      <div>million</div>
      <div>acres</div>
      <div>were</div>
    </div>
    <div class="text--line">
      <div>devastated</div>
      <div>by</div>
      <div>the</div>
    </div>
    <div class="text--line">
      <div>deadliest,</div>
      <div>most</div>
    </div>
    <div class="text--line">
      <div>destructive</div>
      <div>wildfires</div>
      <div>in</div>
    </div>
    <div class="text--line">
      <div>California</div>
      <div>history.</div>
    </div>
  </h1>
</template>

<script>
export default {
  name: 'BigFadeInText'
}
</script>

<style scoped>
  h1{
    line-height: 8.25vw;
    letter-spacing: -.188vw;
    margin-left: auto;
    margin-right: auto;
  }
  .text--line{
    display: block;
  }
  .text--line > div{
    position: relative;
    display: inline-block;
    padding-right: 20px;
  }

  @media screen and (min-width: 992px){
    h1{
      width: 83.33333%;
      margin-left: 8.33333%;
    }
  }

  @media screen and (max-width: 992px){
    h1{
      width: 66.66667%;
      margin-left: 16.66667%;
      font-size: 7.467vw;
      letter-spacing: -.133vw;
      line-height: 8.533vw;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px){
    h1{
      font-size: 6.771vw;
      letter-spacing: -.13vw;
      line-height: 8.333vw;
    }
  }
</style>
