import Respuesta from "../models/Respuesta";

export const renderIndex = (req, res) => {
  res.render("index");
};

export const renderAbout = (req, res) => {
  

  res.render("about");
};
export const renderRespuestaForm = (req, res) => {
  res.render("respuesta/new-respuesta");
}

export const createNewRepuesta = async (req, res) => {
  const { ambicion, energico, paciente, realista, sociable, imaginacion, justo, intuitivo, seguridad, analitica, adaptable,
    misterio, entusiasmo, tranquilo, espiritual, aventurero, liderazgo, etico, empatico, critica  } = req.body;
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
      critica
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
      critica
    });
    // newRespuesta.user = req.user.id;
    await newRespuesta.save();
    req.flash("success_msg", "Respuesta Añadida Correctamente Gracias!!");
    res.redirect("/");
  }
};