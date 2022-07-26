export class EventManager {
  clickElimina(index, coleccion) {
    //const vIndex = this.estudiants.findIndex(function (valor) {
    const vIndex = coleccion.models.findIndex(function (valor) {
      return valor.id == index;
    });

    coleccion.models.splice(vIndex, 1);
  }

  veureDetalls(index) {
    this.estudiants.splice(this.estudiants.indexOf(index), 1);
  }
}
