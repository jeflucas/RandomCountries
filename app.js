const app = Vue.createApp({
  data() {
    return {
      countryName: "Brazil",
      capital: "Brasília",
      region: "Americas",
      flag: "https://restcountries.eu/data/bra.svg",
      code: "BRA",
      population: 206135893,
      area: 8515767.0
    };
  },
  methods: {
    randomNumber(max) {
      return Math.floor(Math.random() * max);
    },

    async getCountry() {
      const res = await fetch("https://restcountries.eu/rest/v2/all");
      const data = await res.json();

      index = this.randomNumber(data.length);

      (this.countryName = data[index].name),
        (this.capital = data[index].capital),
        (this.region = data[index].region),
        (this.flag = data[index].flag);
        (this.code = data[index].alpha3Code);
        (this.population = data[index].population);
        (this.area = data[index].area);
    },
  },
});

app.mount("#app");
