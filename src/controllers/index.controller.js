import Respuesta from "../models/Respuesta";
const exceljs = require("exceljs");

export const renderIndex = (req, res) => {
  res.render("index");
};

export const renderAbout = async (req, res) => {
  try {
    const inforespuesta = await Respuesta.find({}).lean();
    const exportExcel = req.query.export === "excel";

    if (exportExcel) {
      // Validar los datos antes de generar el archivo Excel
      if (!Array.isArray(inforespuesta) || inforespuesta.length === 0) {
        throw new Error("No hay datos para exportar a Excel.");
      }

      // Crear un nuevo libro de Excel
      const workbook = new exceljs.Workbook();

      // Agregar una nueva hoja al libro
      const hoja = workbook.addWorksheet("Datos de Respuesta");

      // Agregar encabezados a la hoja
      hoja.columns = [
        // Asegúrate de que los encabezados coincidan con los nombres de las propiedades en `datosParaExcel`
        { header: "ambicion", key: "ambicion" },
        { header: "energico", key: "energico" },
        { header: "paciente", key: "paciente" },
        { header: "realista", key: "realista" },
        { header: "sociable", key: "sociable" },
        { header: "imaginacion", key: "imaginacion" },
        { header: "justo", key: "justo" },
        { header: "intuitivo", key: "intuitivo" },
        { header: "seguridad", key: "seguridad" },
        { header: "analitica", key: "analitica" },
        { header: "adaptable", key: "adaptable" },
        { header: "misterio", key: "misterio" },
        { header: "entusiasmo", key: "entusiasmo" },
        { header: "tranquilo", key: "tranquilo" },
        { header: "espiritual", key: "espiritual" },
        { header: "aventurero", key: "aventurero" },
        { header: "liderazgo", key: "liderazgo" },
        { header: "etico", key: "etico" },
        { header: "empatico", key: "empatico" },
        { header: "critica", key: "critica" },
        { header: "signo", key: "signo" },
      ];

      // Agregar los datos a la hoja
      hoja.addRows(inforespuesta);

      // Especificar el nombre del archivo Excel
      const nombreArchivo = "datos_respuesta.xlsx";

      // Configurar las cabeceras del archivo de respuesta para la descarga en Excel
      res.setHeader(
        "Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      );
      res.setHeader("Content-Disposition", `attachment; filename=${nombreArchivo}`);

      // Escribir el libro en la respuesta para descargar
      await workbook.xlsx.write(res);

      console.log(`Los datos se han descargado correctamente en ${nombreArchivo}.`);
    } else {
      // Si no se solicita la descarga en Excel, simplemente renderiza la página "about"
      res.render("about", { inforespuesta });
    }
  } catch (error) {
    console.error("Error al renderizar o descargar los datos:", error);
    res.status(500).send("Error al procesar la solicitud.");
  }
};

export const renderRespuestaForm = (req, res) => {
  res.render("respuesta/new-respuesta");
}

export const createNewRepuesta = async (req, res) => {
  const { ambicion, energico, paciente, realista, sociable, imaginacion, justo, intuitivo, seguridad, analitica, adaptable,
    misterio, entusiasmo, tranquilo, espiritual, aventurero, liderazgo, etico, empatico, critica, signo  } = req.body;
  const errors = [];
  if (!ambicion) {
    errors.push({ text: "Porfavor Selecciona una Respuesta para la Pregunta " });
  }
  if (!energico) {
    errors.push({ text: "Porfavor Selecciona una Respuesta para la Pregunta " });
  }
  if (!paciente) {
    errors.push({ text: "Porfavor Selecciona una Respuesta para la Pregunta " });
  }
  if (!realista) {
    errors.push({ text: "Porfavor Selecciona una Respuesta para la Pregunta " });
  }
  if (!sociable) {
    errors.push({ text: "Porfavor Selecciona una Respuesta para la Pregunta " });
  }
  if (!imaginacion) {
    errors.push({ text: "Porfavor Selecciona una Respuesta para la Pregunta " });
  }
  if (!justo) {
    errors.push({ text: "Porfavor Selecciona una Respuesta para la Pregunta" });
  }
  if (!intuitivo) {
    errors.push({ text: "Porfavor Selecciona una Respuesta para la Pregunta " });
  }
  if (!seguridad) {
    errors.push({ text: "Porfavor Selecciona una Respuesta para la Pregunta " });
  }
  if (!analitica) {
    errors.push({ text: "Porfavor Selecciona una Respuesta para la Pregunta " });
  }
  if (!adaptable) {
    errors.push({ text: "Porfavor Selecciona una Respuesta para la Pregunta " });
  }
  if (!misterio) {
    errors.push({ text: "Porfavor Selecciona una Respuesta para la Pregunta " });
  }
  if (!entusiasmo) {
    errors.push({ text: "Porfavor Selecciona una Respuesta para la Pregunta " });
  }
  if (!tranquilo) {
    errors.push({ text: "Porfavor Selecciona una Respuesta para la Pregunta " });
  }
  if (!espiritual) {
    errors.push({ text: "Porfavor Selecciona una Respuesta para la Pregunta " });
  }
  if (!aventurero) {
    errors.push({ text: "Porfavor Selecciona una Respuesta para la Pregunta" });
  }
  if (!liderazgo) {
    errors.push({ text: "Porfavor Selecciona una Respuesta para la Pregunta" });
  }
  if (!etico) {
    errors.push({ text: "Porfavor Selecciona una Respuesta para la Pregunta " });
  }
  if (!empatico) {
    errors.push({ text: "Porfavor Selecciona una Respuesta para la Pregunta" });
  }
  if (!critica) {
    errors.push({ text: "Porfavor Selecciona una Respuesta para la Pregunta" });
  }
  if (!signo) {
    errors.push({ text: "Porfavor Selecciona tu Signo Real" });
  }
  if (errors.length > 0) {
    res.render("respuesta/new-respuesta", {
      errors,
      ambicion,
      energico,
      paciente,
      realista,
      sociable,
      imaginacion,
      justo,
      intuitivo,
      seguridad,
      analitica,
      adaptable,
      misterio, 
      entusiasmo,
      tranquilo,
      espiritual,
      aventurero, 
      liderazgo,
      etico,
      empatico, 
      critica, 
      signo
    });
  } else {
    const newRespuesta= new Respuesta({
      ambicion,
      energico,
      paciente,
      realista,
      sociable,
      imaginacion,
      justo,
      intuitivo,
      seguridad,
      analitica,
      adaptable,
      misterio, 
      entusiasmo,
      tranquilo,
      espiritual,
      aventurero, 
      liderazgo,
      etico,
      empatico, 
      critica,
      signo
    });
    // newRespuesta.user = req.user.id;
    await newRespuesta.save();
    req.flash("success_msg", "Respuesta Añadida Correctamente Gracias!!");
    res.redirect("/");
  }
};