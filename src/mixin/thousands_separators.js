export default {
  computed: {
    thousands() {
      return (number) => { return !(number + "").includes(".")
        ? (number + "").replace(/\d{1,3}(?=(\d{3})+$)/g, (match) => match + ",")
        : (number + "").replace(/\d{1,3}(?=(\d{3})+(\.))/g, (match) => match + ",")}
    }
  }
}