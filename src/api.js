function getEstudiants() {
  return fetch("estudiants.json").then((res) => res.json());
}

function getEstudiant(idEst) {
  return fetch("estudiant_detall.json")
    .then((res) => res.json())
    .then((res) => res.filter((est) => est.id == idEst)[0]);
}

export default {
  getEstudiants,
  getEstudiant,
};
