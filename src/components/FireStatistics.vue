<template>
  <div>
    <p>Total Fires</p>
    <h1>8,527</h1>
    <p>Insurance Claim Damages</p>
    <h1>$12B</h1>
    <p>Acres Burned</p>
    <h1>1,893,913</h1>
  </div>
</template>

<script>
export default {
  name: 'FireStatistics'
}
</script>

<style scoped>
h1{
  margin-bottom: 6.4%;
}
p{
  margin: 8px 0;
}

@media screen and (max-width: 992px){
  div{
    margin-left: 16.66667%;
    padding-bottom: 25vw;
  }
}

@media screen and (min-width: 992px){
  div{
    margin-left: 8.33333%;
    margin-top: -30vw;
    padding-bottom: 21.75vw;
  }
  h1 {
    margin-top: 1.25vw;
    margin-bottom: 3%;
  }

  p{
    margin: 0;
  }
}
</style>
