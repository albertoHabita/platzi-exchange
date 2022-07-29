export class Model {
  atributs = {};
  constructor(atributs) {
    this.atributs = atributs;
  }
  get(nomAtribut) {
    if (this.atributs) return this.atributs[nomAtribut];
    else return null;
  }
}
