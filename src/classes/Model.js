export class Model {
  atributs = {};
  constructor(atributs) {
    this.atributs = atributs;
  }
  get(nomAtribut) {
    return this.atributs[nomAtribut];
  }
}
