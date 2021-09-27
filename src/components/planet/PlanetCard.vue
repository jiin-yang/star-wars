<template>
  <div class="card">
    <p id="Name">Name: {{planet.name}}</p>
    <p>Rotation Period: {{planet.rotation_period}}</p>
    <p>Orbital Period: {{planet.orbital_period}}</p>
    <p>Diameter: {{planet.diameter}}</p>
    <p>Climate: {{planet.climate}}</p>
    <p>Population: {{planet.population}}</p>
    <br>
    <div v-show="getResidents.length > 0">
      <h3>Residents</h3>
      <ul>
        <li v-for="(resident, index) in getResidents" :key="index">
          <a :href="resident.url" target="_blank">{{ resident.name }}</a>
        </li>
      </ul>
    </div>
    <div v-show="getFilms.length > 0">
      <h3>Films</h3>
      <ul>
        <li v-for="(film, index) in getFilms" :key="index">
          <a :href="film.url" target="_blank">{{ film.title }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlanetCard",
  props: {
    planet: {
      name: "",
      rotation_period: "",
      orbital_period: "",
      diameter: "",
      climate: "",
      population: "",
      residents: [],
      films: []
    },
  },
  data(){
    return{
      getResidents:[],
      getFilms:[]
    }
  },
  async created() {

    for (let i = 0; i < this.planet.films.length; i++) {
      let filmUrl = this.planet.films[i]
      let film = await fetch(filmUrl).then(data => {
        return data.json()
      })
      this.getFilms.push(film)
    }

    for (let i = 0; i < this.planet.residents.length; i++) {
      let residentUrl = this.planet.residents[i]
      let resident = await fetch(residentUrl).then(data => {
        return data.json()
      })
      this.getResidents.push(resident)
    }
  }
}
</script>

<style scoped>

</style>