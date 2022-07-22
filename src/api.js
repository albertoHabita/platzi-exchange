function getEstudiants() {
  return fetch("estudiants.json").then((res) => res.json());
}

function getEstudiant(idEst) {
  return fetch("estudiants.json")
    .then((res) => res.json())
    .then((res) => res.filter((est) => est.id == idEst));
}

export default {
  getEstudiants,
  getEstudiant,
};
