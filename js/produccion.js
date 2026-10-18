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

  // Esto se ejecuta una vez, cuando la tabla ya está lista
  initComplete: function () {
    this.api().columns().every(function () {
      const columna = this;
      const celda = columna.footer();

      if (columnasConLista.includes(columna.index())) {
        // Lista desplegable con los valores que existen en esa columna
        const select = document.createElement("select");
        select.className = "form-select form-select-sm";
        select.add(new Option("Todos", ""));
        columna.data().unique().sort().each(valor => {
          if (valor) select.add(new Option(valor));
        });
        select.addEventListener("change", () => {
          columna.search(select.value, { exact: true }).draw();
        });
        celda.replaceChildren(select);
      } else {
        // Cuadro de texto
        const input = document.createElement("input");
        input.className = "form-control form-control-sm";
        input.placeholder = "Buscar";
        input.addEventListener("input", () => {
          columna.search(input.value).draw();
        });
        celda.replaceChildren(input);
      }
    });
  },
});
