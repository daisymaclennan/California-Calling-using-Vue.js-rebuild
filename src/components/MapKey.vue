<template>
  <div class="map-key">
    <div class="office">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12">
        <circle cx="284" cy="514" r="6" fill="#FFF" fill-rule="evenodd" transform="translate(-278 -508)"></circle>
      </svg>
      <p>Elephant Offices</p>
    </div>
    <div class="wildfire">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20">
        <path fill="none" fill-rule="evenodd" stroke="#FFF" d="M12 .972L.883 19.5h22.234L12 .972z"></path>
      </svg>
      <p>Wildfires</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MapKey'
}
</script>

<style scoped>
@media screen and (max-width: 1000 im px){
  .map-key{
    position: relative;
    z-index: 6;
    margin-left: 16.66667%;
    display: block;
    margin-bottom: 10vw;
  }
}
@media screen and (min-width: 1000px){
  .map-key{
    position: absolute;
    top: 55%;
    left: 52vw;
  }

  .wildfire{
    padding-left: 15%;
    padding-top: 8%;
  }
}

p{
  padding-left: 2.1%;
  margin: 8px 0;
  white-space: nowrap;
}

div > div{
  display: flex;
}
</style>
