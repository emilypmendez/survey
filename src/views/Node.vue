<template>
  <div id="container">
    <!-- HEADER -->
    <head id="header">
      <meta charset="UTF-8" />
      <title>ZingTree Front End Coding Challenge</title>
      <link
        href="//netdna.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        rel="stylesheet"
      />
    </head>
    <!-- MAIN CONTENT -->
    <div id="card" :class="baseCard">
      <div class="card text-center m-3">
        <!-- CARD HEADER -->
        <h3 class="card-header">ZingTree Front End Coding Challenge</h3>
        <div class="card-body">
          {{ content.page_title }}<br /><br /><br />

          <!-- CONTENT -->
        </div>
        <div id="nodeContent">
          <html v-html="content.content">
            {{
              content.content
            }}
          </html>
        </div>
        <div id="contents">
          <span v-for="item in pageOfItems" :key="item.id" class="content">
            <br />
          </span>
          <span>
            <!-- BUTTONS -->
            <html v-for="node in nodes" :key="node.id" v-html="content.buttons">
              <slot>{{ content.buttons }}</slot>
            </html>
            <br />
            <span class="btn-group">
              <input id="button1" type="submit" name="btnG" value="node()" />
            </span>
            <span class="btn-group">
              <input id="button1" type="submit" name="btnG" value="node()" />
            </span>

            <!-- NODES -->
            <p>
              <DefaultNode v-for="node in nodes" :key="node"></DefaultNode>
            </p>
            <br /><br />

            <!-- NODE ID -->
            <p>Node: {{ content.project_node_id }}</p>
          </span>
        </div>
      </div>
    </div>

    <!-- FOOTER -->
    <div id="footer" :class="baseFooter">
      <div class="card-footer pb-0 pt-3">
        <!-- Pagination -->
        <jw-pagination
          :items="pages"
          @changePage="onChangePage"
        ></jw-pagination>
      </div>
      <baseFooter></baseFooter>
    </div>
  </div>
</template>

<script>
import baseFooter from "../components/UI/BaseFooter.vue";
import store from "@/store/index.js";

// a hard coded array of node objects split into pages
// This demonatrates how the pagination component works.
const pages = [...Array(Node.nodes).keys()].map((i) => ({
  id: i + 1,
  name: "Page " + (i + 1)
}));

export default {
  name: "Node",
  components: {
    baseFooter
  },
  props: {
    id: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: false
    },
    nodes: []
  },
  data() {
    return {
      pages,
      pageOfItems: [],
      store: store,
      sharedState: store.state
    };
  },
  computed: {
    content() {
      // check if content is loading, return nodes by 'id'
      if (this.$store.getters.loading) {
        return "Loading ...";
      }
      return this.$store.getters.surveyNodeById(this.id);
    },
    buttons() {
      return this.node.buttons || [];
    }
  },
  methods: {
    onChangePage(pageOfItems) {
      //update page of items
      this.pageOfItems = pageOfItems;
    }
  }
};
</script>

<style>
@import "../assets/styles.css";

.content {
  p {
    flex-box: wrap;
  }
}
.card-header {
  font-size: 14px;
}

ul: {
  border: "2px solid red";
}

li: {
  display: inline-block;
  border: "2px dotted green";
}

a: {
  color: "blue";
}

#button1 {
  background-color: #f2f2f2;
  border: none;
  padding: 10px;
  margin: 10px;
  color: #757575;
  font-size: 10pt;
  font-weight: bold;
  font-family: arial;
  border-radius: 10px;
}
</style>
