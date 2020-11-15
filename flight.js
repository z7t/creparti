const vols = [{
  destination: 'Martinique',
  date_depart: '01/25/2019',
  compagnie_aerienne: 'Ryanair',
  numVol: 'xxxxx',
  prix: '350',
  dureeTrajet: '6'
},
{
  destination: 'Londres',
  date_depart: '07/25/2019',
  compagnie_aerienne: 'Air france',
  numVol: 'xxxxx',
  prix: '150',
  dureeTrajet: '2'
},
{
  destination: 'Paris',
  date_depart: '08/12/2019',
  compagnie_aerienne: 'Air france',
  numVol: 'xxxxx',
  prix: '50',
  dureeTrajet: '1'
},
{
  destination: 'Mexico',
  date_depart: '09/03/2019',
  compagnie_aerienne: 'Lufthansa',
  numVol: 'xxxxx',
  prix: '1350',
  dureeTrajet: '8'
},
{
  destination: 'Tokyo',
  date_depart: '12/12/2020',
  compagnie_aerienne: 'Air france',
  numVol: 'xxxxx',
  prix: '750',
  dureeTrajet: '14'
},
{
  destination: 'Tokyo',
  date_depart: '12/11/2020',
  compagnie_aerienne: 'Lufthansa',
  numVol: 'xxxxx',
  prix: '850',
  dureeTrajet: '14'
}
];


//Affichez tous les vols (destination - Date de départ- compagnie aérienne -
//numero de vol - prix - durée du trajet)
// vols.forEach((element) => {
//   console.log(element)
// })

//Afficher tous les vols dont le trajet est inférieur à 7h. (idem)
// vols.forEach((element) => {
//   if (element.dureeTrajet < 7){
//       console.log(element)
//   }
// })
//Afficher les vols à destination de Tokyo et qui voyagent avec Air france (idem)
// vols.forEach((element) => {
//   if (element.destination == "Tokyo" & element.compagnie_aerienne == "Air france"){
//       console.log(element)
//   }
// })
//Afficher tous les vols dont le tarif est inférieur à 700 euros et qui
//voyagent avec Air france
// vols.forEach((element) => {
//   if (element.prix < 700 & element.compagnie_aerienne == "Air france"){
//       console.log(element)
//   }
// })
//Afficher tous les vols qui voyagent avec 'Lufthansa' dont le prix est inférieur à 900 euros
//et dont la durée du trajet est inférieur à 15 heures
// vols.forEach((element) => {
//   if (element.prix < 900 & element.compagnie_aerienne == "Lufthansa" & element.dureeTrajet < 15){
//       console.log(element)
//   }
// })
//Appliquer une reduc de 20% sur chaque vol organiser après 2019 et les afficher
// vols.forEach((caca) => {
//   if (caca.date_depart.split("/")[2] >= new Date("01/01/2020").getFullYear()){
//     console.log(caca.prix / 20)
//   }
// })
//Afficher tous les vols pour Paris prévus entre le "06/02/2019" et le "".
// vols.forEach((caca) => {
//   if (new Date(caca.date_depart) > new Date("06/02/2019") && new Date(caca.date_depart) < new Date("09/06/2019")){
//     console.log(caca)
//   }
// })
//----------------------------------------------------------------------------------



//Afficher tous les vols à partir de la date d'aujourd'hui

//Un petit coup de main...
//Il faut récupèrer la date du jour avec l'objet 'date' (new Date()) fournis par Javascript.

//La fonction suivante permet de comparer deux dates et renvoie 'true' si date1 est supérieur à date2
//Pour comparer deux, celles-ci doivent avoir le même format.
const date1SupDate2 = (date1, date2) => {
  startDate = new Date(date1);
  endDate = new Date(date2);
  if (startDate > endDate) {
    return true;
  } else {
    return false;
  };
};

vols.forEach((caca) => {
  if (date1SupDate2(caca.date_depart, new Date())){
    console.log(caca)
  }
})
console.log(date1SupDate2("12/13/2020", "12/12/2020"));



//Allez voir ce qu'est un JSON !
//https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/JSON