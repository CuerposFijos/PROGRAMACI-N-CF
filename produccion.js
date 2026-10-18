import { cargarDatos } from "./datos.js";

const datos = await cargarDatos();

new DataTable("#tabla-produccion", {
  data: datos,
  columns: [
    { data: "id",         title: "ID" },
    { data: "sem",        title: "Sem" },
    { data: "estadoAl",   title: "Estado AL" },
    { data: "estadoPK",   title: "Estado PK" },
    { data: "tipo",       title: "Tipo" },
    { data: "fecha",      title: "Fecha" },
    { data: "proyecto",   title: "Proyecto" },
    { data: "produccion", title: "Producción" },
    { data: "cant",       title: "Cant." },
  ],
  pageLength: 25,
  language: { url: "libs/es-ES.json" },
});
