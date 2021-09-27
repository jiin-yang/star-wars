<template>
  <div class="card">
    <p id="Name">Name: {{starship.name}}</p>
    <p>Model: {{starship.model}}</p>
    <p>Manufacturer: {{starship.manufacturer}}</p>
    <p>Cost in Credits: {{starship.cost_in_credits}}</p>
    <p>Length: {{starship.length}}</p>
    <p>Passengers: {{starship.passengers}}</p>
    <p>Hyperdrive Rating: {{starship.hyperdrive_rating}}</p>
    <br>
    <h3>Films</h3>
    <ul>
      <li v-for="(film, index) in getFilms" :key="index">
        <a :href="film.url" target="_blank">{{ film.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "StarshipCard",
  props: {
    starship: {
      name: "",
      model: "",
      manufacturer: "",
      cost_in_credits: "",
      length: "",
      passengers: "",
      hyperdrive_rating: "",
      films: []
    }
  },
  data(){
    return{
      getFilms:[]
    }
  },
  async created() {
    for (let i = 0; i < this.starship.films.length; i++) {
      let filmUrl = this.starship.films[i]
      let film = await fetch(filmUrl).then(data => {
        return data.json()
      })
      this.getFilms.push(film)
    }
  }

}
</script>

<style scoped>

</style>