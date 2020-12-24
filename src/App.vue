<template>
  <div id="app" class="app">
    <div class="header">
      <h1>Sistema de gestión de información</h1>
      <nav>
        <button v-on:click="getSearchProduct" v-if="is_auth">
          Buscar Producto
        </button>
        <button v-on:click="getSearchClient" v-if="is_auth">
          Buscar Cliente
        </button>
        <button v-on:click="logOut" v-if="is_auth">Cerrar Sesión</button>
      </nav>
    </div>

    <div class="main-component">
      <router-view v-on:log-in="logIn"></router-view>
    </div>

    <div class="footer">
      <h2>Misión TIC 2022</h2>
    </div>
  </div>
</template>

<script>
import vueRouter from "vue-router";

export default {
  name: "App",

  data: function() {
    return {
      is_auth: localStorage.getItem("isAuth") || false
    };
  },

  components: {},

  methods: {
    updateAuth: function() {
      var self = this;
      self.is_auth = localStorage.getItem("isAuth") || false;

      if (self.is_auth == false) self.$router.push({ name: "user_auth" });
      else {
        let username = localStorage.getItem("current_username");
        self.$router.push({
          name: "user_main",
          params: { username: username }
        });
      }
    },

    logIn: function(username) {
      localStorage.setItem("current_username", username);
      localStorage.setItem("isAuth", true);
      this.updateAuth();
    },

    logOut: function() {
      localStorage.removeItem("isAuth");
      localStorage.removeItem("current_username");
      this.updateAuth();
    },

    init: function() {
      if (this.$route.name != "user") {
        let username = localStorage.getItem("current_username");
        this.$router.push({ name: "user", params: { username: username } });
      }
    },

    getSearchProduct: function() {
      if (this.$route.name != "search_product") {
        this.$router.push({
          name: "search_product"
        });
      }
    },

    getSearchClient: function() {
      this.$router.push({
        name: "search_client"
      });
    }
  },

  created: function() {
    this.$router.push({ name: "root" });
    this.updateAuth();
  }
};
</script>

<style>
body {
  margin: 0 0 0 0;
}

.header {
  margin: 0%;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 80px;

  background-color: #003975;
  color: #e5e7e9;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header h1 {
  width: 40%;
  text-align: center;
}

.header nav {
  height: 100%;
  width: 40%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  font-size: 20px;
}

.header nav button {
  color: #ffffff;
  background: #2a4c8f;
  border: 1px solid #e5e7e9;
  border-radius: 5px;
  padding: 9px 40px;
  cursor: pointer;
}

.header nav button:hover {
  color: #ffffff;
  background: #4599ee;
  border: 1px solid #e5e7e9;
}

.main-component {
  background: #fdfefe;
}

.footer {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 50px;

  background-color: #003975;
  color: #e5e7e9;

  position: fixed;
  left: 0;
  bottom: 0;
  text-align: center;
}

.footer h2 {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
