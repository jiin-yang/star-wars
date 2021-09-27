<template>
  <div class="home">
    <PeopleCard
        v-for="(person,index) in allResponse"
        :key="index"
        :people="person"
        class="card">
    </PeopleCard>
  </div>
</template>

<script>

import PeopleCard from "@/components/people/PeopleCard";

export default {
  name: "PeopleHome",
  components: {
    PeopleCard,
  },
  data(){
    return{
      allResponse: [],
    }
  },
  created() {
    this.getPeople()
  },
  methods: {
    async getPeople(){

      let tempArray = []
      let url = "https://swapi.dev/api/people"
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
}
</script>

<style scoped>

</style>