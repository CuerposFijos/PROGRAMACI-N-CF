import { cargarDatos } from "./datos.js";

const datos = await cargarDatos();

// Columnas con lista desplegable (se cuenta desde 0)
// 1=sem, 2=estadoAl, 3=estadoPK, 4=tipo, 5=fecha
const columnasConLista = [1, 2, 3, 4, 5];

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

  initComplete: function () {
    const api = this.api();

    // Una fila nueva, vacía, que luego pondremos bajo los títulos
    const filaFiltros = document.createElement("tr");

    api.columns().every(function () {
      const columna = this;
      const celda = document.createElement("th");
      let control;

      if (columnasConLista.includes(columna.index())) {
        // Lista desplegable con los valores que existen en esa columna
        control = document.createElement("select");
        control.className = "form-select form-select-sm";
        control.add(new Option("Todos", ""));
        columna.data().unique().sort().each(valor => {
          if (valor) control.add(new Option(valor));
        });
        control.addEventListener("change", () => {
          columna.search(control.value, { exact: true }).draw();
        });
      } else {
        // Cuadro de texto
        control = document.createElement("input");
        control.className = "form-control form-control-sm";
        control.placeholder = "Buscar";
        control.addEventListener("input", () => {
          columna.search(control.value).draw();
        });
      }

      celda.appendChild(control);
      filaFiltros.appendChild(celda);
    });

    // Poner la fila de filtros dentro de los encabezados
    api.table().header().appendChild(filaFiltros);
  },
});
