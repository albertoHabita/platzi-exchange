const url = "https://api.coincap.io/v2";

function getAssets() {
  //const myRequest = new Request("./estudiants.json");

  //return fetch("./data/estudiants.json").then((res) => res.data);
  return [
    {
      id: "D4E88C6A85F83DCD460DB06386F555485EF19C7A0683CEC0A329534D3A52E914",
      num_document_est: "H9613334",
      nom_est: "KHUSHI",
      cognoms_est: ".",
      usuari_estudiant_simulacio: "khushi.khushi",
      estudiant_simulable: "TRUE",
      tipus_aplicacio: "ESEC",
      est_info_etiqueta: "Estudiant: ",
      est_info_dades: "H9613334 KHUSHI .",
    },
    {
      id: "D4E88C6A85F83DCD460DB06386F555485EF19C7A0683CEC0F5DD5DFCFF2AA07F",
      num_document_est: "OR216480",
      nom_est: "ASHIQULLAH",
      cognoms_est: "....",
      usuari_estudiant_simulacio: "",
      estudiant_simulable: "FALSE",
      tipus_aplicacio: "ESEC",
      est_info_etiqueta: "Estudiant: ",
      est_info_dades: "OR216480 ASHIQULLAH ....",
    },
    {
      id: "D4E88C6A85F83DCD460DB06386F555485EF19C7A0683CEC06EEBC0EE87D1831F",
      num_document_est: "211199154",
      nom_est: "LÍGGJAS",
      cognoms_est: "Á VÁLI",
      usuari_estudiant_simulacio: "liggjas.a.vali",
      estudiant_simulable: "TRUE",
      tipus_aplicacio: "ESEC",
      est_info_etiqueta: "Estudiant: ",
      est_info_dades: "211199154 LÍGGJAS Á VÁLI",
    },
    {
      id: "D4E88C6A85F83DCD460DB06386F555485EF19C7A0683CEC08B654EB1E7723245",
      num_document_est: "06303053H",
      nom_est: "KHALID",
      cognoms_est: "AABOUCH AZOUGARH",
      usuari_estudiant_simulacio: "khalid.aabouch",
      estudiant_simulable: "TRUE",
      tipus_aplicacio: "ESEC",
      est_info_etiqueta: "Estudiant: ",
      est_info_dades: "06303053H KHALID AABOUCH AZOUGARH",
    },
    {
      id: "D4E88C6A85F83DCD460DB06386F555485EF19C7A0683CEC0BCF5215895AC30BC",
      num_document_est: "K035294",
      nom_est: "RAFIK",
      cognoms_est: "AABOUD",
      usuari_estudiant_simulacio: "",
      estudiant_simulable: "FALSE",
      tipus_aplicacio: "ESEC",
      est_info_etiqueta: "Estudiant: ",
      est_info_dades: "K035294 RAFIK AABOUD",
    },
    {
      id: "D4E88C6A85F83DCD460DB06386F555485EF19C7A0683CEC0A0369BC50E01D933",
      num_document_est: "X3674246L",
      nom_est: "OMAIMA",
      cognoms_est: "AACH CHOUBA ",
      usuari_estudiant_simulacio: "omaima.aach.chouba",
      estudiant_simulable: "TRUE",
      tipus_aplicacio: "ESEC",
      est_info_etiqueta: "Estudiant: ",
      est_info_dades: "X3674246L OMAIMA AACH CHOUBA ",
    },
    {
      id: "D4E88C6A85F83DCD460DB06386F555485EF19C7A0683CEC08ABF10214B9F128D",
      num_document_est: "45794816E",
      nom_est: "ELISA",
      cognoms_est: "AAGAARD GARCIA",
      usuari_estudiant_simulacio: "elisa.aagaard",
      estudiant_simulable: "TRUE",
      tipus_aplicacio: "ESEC",
      est_info_etiqueta: "Estudiant: ",
      est_info_dades: "45794816E ELISA AAGAARD GARCIA",
    },
    {
      id: "D4E88C6A85F83DCD460DB06386F555485EF19C7A0683CEC01033414B6DF0D8D1",
      num_document_est: "39438806Q",
      nom_est: "DANIEL",
      cognoms_est: "AAGAARD PÉREZ",
      usuari_estudiant_simulacio: "daniel.aagaard",
      estudiant_simulable: "TRUE",
      tipus_aplicacio: "ESEC",
      est_info_etiqueta: "Estudiant: ",
      est_info_dades: "39438806Q DANIEL AAGAARD PÉREZ",
    },
    {
      id: "D4E88C6A85F83DCD460DB06386F555485EF19C7A0683CEC053AAF0AD5E2E70DD",
      num_document_est: "42373428E",
      nom_est: "OUSSAMA",
      cognoms_est: "AALLAOUI EL MOKADMI",
      usuari_estudiant_simulacio: "oussama.aallaoui",
      estudiant_simulable: "TRUE",
      tipus_aplicacio: "ESEC",
      est_info_etiqueta: "Estudiant: ",
      est_info_dades: "42373428E OUSSAMA AALLAOUI EL MOKADMI",
    },
    {
      id: "D4E88C6A85F83DCD460DB06386F555485EF19C7A0683CEC00789C22CA5CA32D8",
      num_document_est: "13894480",
      nom_est: "ANTTI ILMARI",
      cognoms_est: "AALTONEN",
      usuari_estudiant_simulacio: "antti.ilmari.aaltonen",
      estudiant_simulable: "TRUE",
      tipus_aplicacio: "ESEC",
      est_info_etiqueta: "Estudiant: ",
      est_info_dades: "13894480 ANTTI ILMARI AALTONEN",
    },
  ];
}

function getAsset(coin) {
  return fetch(`${url}/assets/${coin}`)
    .then((res) => res.json())
    .then((res) => res.data);
}

function getAssetHistory(coin) {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);
  const start = now.getTime();

  return fetch(
    `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  )
    .then((res) => res.json())
    .then((res) => res.data);
}

function getMarkets(coin) {
  return fetch(`${url}/assets/${coin}/markets?limit=5`)
    .then((res) => res.json())
    .then((res) => res.data);
}

function getExchange(id) {
  return fetch(`${url}/exchanges/${id}`)
    .then((res) => res.json())
    .then((res) => res.data);
}

export default {
  getAssets,
  getAsset,
  getMarkets,
  getExchange,
  getAssetHistory,
};
