<template>
  <div id="container">
    <center>
      <br />
      <br />
      <slot>Copyright and disclaimer content goes here.</slot>
      <br /><br /><br />
      <!-- credits -->
      <div class="text-center">
        <p>
          <a href="https://zingtree.com" target="_blank"
            >Zingtree - Front End Coding Challenge Solution</a
          >
        </p>
        <p>
          <a href="http://emilypmendez.com" target="_blank"
            >www.emilypmendez.com</a
          >
        </p>
      </div>
    </center>
  </div>
</template>

<script>
export default {
  name: "BaseFooter",
  components: {},
  data() {
    return {
      prevPage: 0,
      nextPage: 0
    };
  },
  modules: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin: 2rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
a {
  cursor: pointer;
  font-size: 12px;
}
.pagination {
  justify-content: center;
  flex-wrap: wrap;
}
</style>
