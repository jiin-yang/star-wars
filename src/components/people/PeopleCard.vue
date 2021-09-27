<template>
  <div class="card">
    <p id="Name">Name: {{people.name}}</p>
    <p>Height: {{people.height}}</p>
    <p>Mass: {{people.mass}}</p>
    <p>Hair Color: {{people.hair_color}}</p>
    <p>Eye Color : {{people.eye_color}}</p>
    <p>Skin Color : {{people.skin_color}}</p>
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
  name: "PeopleCard",
  props:{
    people:{
      name: "",
      height: "",
      mass: "",
      hair_color: "",
      skin_color: "",
      eye_color: "",
      films: []
    }
  },
  data() {
    return {
      getFilms: []
    }
  },
  async created() {
    for (let i = 0; i < this.people.films.length; i++) {
      let filmUrl = this.people.films[i]
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