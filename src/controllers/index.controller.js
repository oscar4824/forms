import Respuesta from "../models/Respuesta";

export const renderIndex = (req, res) => {
  res.render("index");
};

export const renderAbout = (req, res) => {
  res.render("about");
};
export const renderRespuestaForm = (req, res) => {
  res.render("respuesta/new-Respuesta");
}

export const createNewRepuesta = async (req, res) => {
  const { pregunta1, pregunta2, pregunta3, pregunta4, pregunta5, pregunta6, pregunta7, pregunta8, pregunta9, pregunta10 } = req.body;
  const errors = [];
  if (!pregunta1) {
    errors.push({ text: "Porfavor Selecciona una Respuesta para la Pregunta 1" });
  }
  if (!pregunta2) {
    errors.push({ text: "Porfavor Selecciona una Respuesta para la Pregunta 2" });
  }
  if (!pregunta3) {
    errors.push({ text: "Porfavor Selecciona una Respuesta para la Pregunta 3" });
  }
  if (!pregunta4) {
    errors.push({ text: "Porfavor Selecciona una Respuesta para la Pregunta 4" });
  }
  if (!pregunta5) {
    errors.push({ text: "Porfavor Selecciona una Respuesta para la Pregunta 5" });
  }
  if (!pregunta6) {
    errors.push({ text: "Porfavor Selecciona una Respuesta para la Pregunta 6" });
  }
  if (!pregunta7) {
    errors.push({ text: "Porfavor Selecciona una Respuesta para la Pregunta 7" });
  }
  if (!pregunta8) {
    errors.push({ text: "Porfavor Selecciona una Respuesta para la Pregunta 8" });
  }
  if (!pregunta9) {
    errors.push({ text: "Porfavor Selecciona una Respuesta para la Pregunta 9" });
  }
  if (!pregunta10) {
    errors.push({ text: "Porfavor Selecciona una Respuesta para la Pregunta 10" });
  }
  if (errors.length > 0) {
    res.render("respuesta/new-respuesta", {
      errors,
    pregunta1,
    pregunta2,
    pregunta3,
    pregunta4,
    pregunta5,
    pregunta6,
    pregunta7,
    pregunta8,
    pregunta9,
    pregunta10
    });
  } else {
    const newRespuesta= new Respuesta({ pregunta1, pregunta2, pregunta3, pregunta4, pregunta5, pregunta6, pregunta7, pregunta8, pregunta9, pregunta10});
    // newRespuesta.user = req.user.id;
    await newRespuesta.save();
    req.flash("success_msg", "Respuesta Añadida Correctamente");
    res.redirect("/");
  }
};