<template>
  <div>
    <button
      v-for="(node, index) in nodes"
      :key="index"
      :item="node"
      class="btn"
      @click="nextPage"
    >
      {{ content.buttons.button_text }}
    </button>
  </div>
</template>

<script>
/* import { reactive, computed } from "vue"; */

export default {
  name: "BaseButton",
  data() {
    return {
      store: store,
      sharedState: store.state,
      buttons: []
    };
  },
  setup() {
    // declare and return properties
    const state = reactive({
      buttons: ""
    });
  },
  computed: {}
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul.answers {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

ul.answers li {
  padding: 0;
  margin: 10px 0;
}

a.btn {
  display: flex;
  padding: 10px 7px;
  background: #0e5a38;
  border-radius: 5px;
  color: #fff;
  text-decoration: none;
  justify-content: center;
}

a.btn .col-2 {
  width: 50%;
}

.nodeContent {
  text-align: justify;
}

.nodeQuestion {
  background: azure;
  font-weight: bold;
  font-style: italic;
  padding: 10px;
  margin-top: 20px;
}
</style>
