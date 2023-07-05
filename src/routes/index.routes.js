import { Router } from "express";
import { renderIndex, renderAbout, createNewRepuesta, renderRespuestaForm } from "../controllers/index.controller";

const router = Router();

router.get("/", renderRespuestaForm);
router.get("/renderRespuestaForm", renderIndex, createNewRepuesta);
router.post("/respuesta/new-respuesta", createNewRepuesta);
router.get("/about", renderAbout);

export default router;
