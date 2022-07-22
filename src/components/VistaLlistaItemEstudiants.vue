<template>
  <tr :class="classe">
    <td>{{ numDocumentEst }}</td>
    <td>{{ nomEst }}</td>
    <td>{{ cognomsEst }}</td>
    <td class="derecha">
      <input
        class="boton b_rojo"
        type="submit"
        id="boton"
        name="boton"
        value="Elimina"
      />
    </td>
  </tr>
</template>

<script>
export default {
  name: "VistaLlistaItemEstudiants",

  props: {
    numDocumentEst: {
      type: String,
      default: "",
    },
    nomEst: {
      type: String,
      default: "",
    },
    cognomsEst: {
      type: String,
      default: "",
    },
    classe: {
      type: Number,
      default: 0,
    },
  },
};
</script>
