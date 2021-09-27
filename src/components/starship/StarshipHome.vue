<template>
  <div class="home">
    <StarshipCard
        v-for="(starship,index) in allResponse"
        :key="index"
        :starship="starship"
        class="card">
    </StarshipCard>
  </div>
</template>

<script>
import StarshipCard from "@/components/starship/StarshipCard";
export default {
  name: "StarshipHome",
  components: {StarshipCard},
  data(){
    return{
      allResponse: []
    }
  },
  async created() {
    let tempArray = []
    let url = "https://swapi.dev/api/starships"
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