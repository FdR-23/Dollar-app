//import { parseString } from "xml2js";


// export const getAllDolar = async () => {
//   const url = "https://www.dolarsi.com/api/dolarSiInfo.xml";
//   try {
//     const res = await fetch(url, { method: "GET" });
//     if (!res.ok) {
//       throw new Error(`Error en la solicitud: ${res.status}`);
//     }
//     const xmlString = await res.text();

//     return new Promise((resolve, reject) => {
//       parseString(xmlString, (err, result) => {
//         if (err) {
//           reject(`Error al analizar el XML: ${err}`);
//         } else {
//           resolve(result);
//         }
//       });
//     });
//   } catch (error) {
//     throw new Error(`Error al cargar el archivo XML: ${error}`);
//   }
// };
const Urlbluelytics = "https://api.bluelytics.com.ar/v2/latest";

export const getAllDollarsAndEuro = async () => {

    try {
        const response = await fetch(Urlbluelytics, {
            method: "GET",
        })
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }
        const data = await response.json();
        return data
    } catch (error) {
        return error
    }

}

// function parseDate(dateStr) {
//     const year = parseInt(dateStr.slice(0, 4), 10);
//     const month = parseInt(dateStr.slice(4, 6), 10) - 1;
//     const day = parseInt(dateStr.slice(6, 8), 10);
//     const hours = parseInt(dateStr.slice(9, 11), 10);
//     const minutes = parseInt(dateStr.slice(11, 13), 10);
//     const seconds = parseInt(dateStr.slice(13, 15), 10);
//     return new Date(Date.UTC(year, month, day, hours, minutes, seconds));
// }