const app = Vue.createApp({
  data() {
    return {
      countryName: "Brazil",
      capital: "Brasília",
      region: "Americas",
      flag: "https://restcountries.eu/data/bra.svg",
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
    },
  },
});

app.mount("#app");
