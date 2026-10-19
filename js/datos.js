// ---------- CONFIGURACIÓN ----------

// Dirección de tu Sheet publicado como CSV
export const CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTDaKnSja4euNW7KTTvIvyB5lmrijXcssDAJhzLQktFXk_FhjFW8HEgr5rd0UrvqHO_bv7B0bVH1rnG/pub?gid=420871835&single=true&output=csv";

// Qué columna del Sheet es cada dato (se cuenta desde 0: A=0, B=1, C=2...)
export const COL = {
  id: 0,
  sem: 4,
  estadoAl: 5,
  estadoPK: 6,
  tipo: 7,
  fecha: 8,
  proyecto: 13,
  produccion: 14,
  cant: 16,
  saldoEmsb: 17,
};

// ---------- TOMA DE DATOS ----------

export async function cargarDatos() {
  // 1. Pedir el contenido del enlace
  const respuesta = await fetch(CSV_URL);
  const texto = await respuesta.text();

  // 2. Convertir el texto en una lista de filas
  const crudo = Papa.parse(texto, { skipEmptyLines: true }).data;

  // 3. Quedarnos solo con filas reales y darles nombres
  return crudo
    .slice(1)
    .filter(fila => /^\d+$/.test((fila[COL.id] || "").trim()))
    .map(fila => ({
      id: fila[COL.id].trim(),
      sem: (fila[COL.sem] || "").trim(),
      estadoAl: (fila[COL.estadoAl] || "").trim(),
      estadoPK: (fila[COL.estadoPK] || "").trim(),
      tipo: (fila[COL.tipo] || "").trim(),
      fecha: (fila[COL.fecha] || "").trim(),
      proyecto: (fila[COL.proyecto] || "").trim(),
      produccion: (fila[COL.produccion] || "").trim(),
      cant: parseInt(fila[COL.cant], 10) || 0,
      saldoEmsb: parseInt(fila[COL.saldoEmsb], 10) || 0,
    }));
}
