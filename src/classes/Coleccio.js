import { Model } from "@/classes/Model";
export class Coleccio {
  models = [];
  constructor(arrayItems) {
    this.models = arrayItems.map((x) => new Model(x));
  }
}
