// ---------- CONFIGURACIÓN ----------

// Dirección de tu Sheet publicado como CSV
export const CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTDaKnSja4euNW7KTTvIvyB5lmrijXcssDAJhzLQktFXk_FhjFW8HEgr5rd0UrvqHO_bv7B0bVH1rnG/pub?gid=420871835&single=true&output=csv";

// Qué columna del Sheet es cada dato (se cuenta desde 0: A=0, B=1, C=2...)
export const COL = {
  id: 0,
  sem: 4,
  estadoAl: 5,
  proceso: 6,
  tipo: 7,
  fecha: 8,
  cliente: 12,
  proyecto: 13,
  cant: 15,
};
