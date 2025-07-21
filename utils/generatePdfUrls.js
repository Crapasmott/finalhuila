// src/utils/generatePdfUrls.js
export const generatePossibleUrls = ({ tipo, year }) => {
  const base = "https://electrohuila.net/descargar";
  const entries = [
    {
      id: 7360,
      filename: "06-junio-cot",
    },
    // Puedes agregar más manualmente o automatizar si tienes metadatos
  ];

  return entries.map(entry => ({
    url: `${base}/${tipo}/${year}/${entry.id}/${entry.filename}.pdf`,
    filename: entry.filename,
  }));
};
