<template>
  <input
    @click="buttonClick"
    class="boton b_rojo"
    type="submit"
    id="boton"
    name="boton"
    :value="text"
  />
</template>

<script>
export default {
  name: "BotonRojo",

  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: "Elimina",
    },
    codiModel: {
      type: String,
      default: "",
    },
  },

  methods: {
    buttonClick() {
      this.$emit("click-btn-rojo", this.codiModel);
    },
  },
};
</script>
