<template>
  <div class="home">
    <PlanetCard
        v-for="(planet,index) in allResponse"
        :key="index"
        :planet="planet"
        class="card">
    </PlanetCard>
  </div>
</template>

<script>
import PlanetCard from "@/components/planet/PlanetCard";
export default {
  name: "PlanetHome",
  components: {PlanetCard},
  data(){
    return{
      allResponse: []
    }
  },
  async created() {
    let tempArray = []
    let url = "https://swapi.dev/api/planets"
    while (url){
      let response = await fetch(url).then(data => {
        return data.json()
      })
      url = response.next
      tempArray.push(response.results)
    }
    for(let i = 0; i < tempArray.length; i++){
      for(let j = 0; j < tempArray[i].length; j++){
        this.allResponse.push(tempArray[i][j])
      }
    }
  }

}
</script>

<style scoped>

</style>