<template>
  <div id="SearchProduct">
    <div class="continer_search_product">
      <h2>Buscar Producto</h2>
      <form v-on:submit.prevent="searchProduct">
        <input type="tetx" v-model="value" placeholder="Referencia" />
        <br />
        <button type="submit">Buscar</button>
      </form>

      <table
        v-if="seen"
        style="border-collapse: collapse; width: 70%"
        border="1"
        class="table"
      >
        <tbody>
          <tr class="row">
            <td
              style="width: 50%; text-align: center; background-color: darkgray"
              colspan="2"
            >
              Producto encontrado
            </td>
          </tr>
          <tr>
            <td style="width: 50%">&nbsp;</td>
            <td style="width: 50%">&nbsp;</td>
          </tr>
          <tr>
            <td style="width: 50%">Producto</td>
            <td style="width: 50%">{{ data.name_product }}</td>
          </tr>
          <tr style="background-color: #efeaea">
            <td style="width: 50%">Descripci&oacute;n</td>
            <td style="width: 50%">{{ data.description }}</td>
          </tr>
          <tr>
            <td style="width: 50%">Referencia</td>
            <td style="width: 50%">{{ data.reference }}</td>
          </tr>
          <tr style="background-color: #efeaea">
            <td style="width: 50%">Precio</td>
            <td style="width: 50%">{{ data.price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SearchProduct",
  data: function () {
    return {
      value: "",
      data: "",
      seen: false,
    };
  },

  methods: {
    searchProduct: function () {
      var self = this;
      axios
        .get(
          "https://g3m3e10frontend.herokuapp.com/user/product/" + this.value,
          {
            headers: {},
          }
        )
        .then((result) => {
          self.data = result.data;
          self.seen = true;
        })
        .catch((error) => {
          self.seen = false;
        });
    },
  },
};
</script>

<style>
#SearchProduct {
  margin-top: 3%;
  padding: 0%;
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.continer_search_product {
  border: 3px solid #18589c;
  border-radius: 10px;

  width: 50%;
  height: 60%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#SearchProduct h2 {
  color: #283747;
}

#SearchProduct form {
  width: 50%;
}

#SearchProduct input {
  height: 40px;
  width: 100%;

  box-sizing: border-box;
  padding: 10px 20px;
  margin: 5px 0;

  border: 1px solid #283747;
}

#SearchProduct button {
  width: 100%;
  height: 40px;

  color: #e5e7e9;
  background: #283747;
  border: 1px solid #e5e7e9;

  border-radius: 5px;
  padding: 10px 25px;
  margin: 5px 0;
}

#SearchProduct button:hover {
  color: #e5e7e9;
  background: crimson;
  border: 1px solid #283747;
}

.wrapper {
  margin: 0 auto;
  padding: 40px;
  max-width: 800px;
}

.table {
  margin: 0 0 40px 0;
  width: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  display: table;
}
</style>
