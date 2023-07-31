import { Schema, model } from "mongoose";

const RespuestaSchema = new Schema(
  {
    ambicion: {
      type: Number,
      required: true,
    },
    energico: {
      type: Number,
      required: true,
    },
    paciente: {
      type: Number,
      required: true,
    },
    realista: {
        type: Number,
        required: true,
      },
      sociable: {
        type: Number,
        required: true,
      },
      imaginacion: {
        type: Number,
        required: true,
      },
      justo: {
        type: Number,
        required: true,
      },
      intuitivo: {
        type: Number,
        required: true,
      },
      seguridad: {
        type: Number,
        required: true,
      },
      analitica: {
        type: Number,
        required: true,
      },
      adaptable:{
        type: Number,
        required: true,
      },
      misterio:{
        type: Number,
        required: true,
      },
      entusiasmo:{
        type: Number,
        required: true,
      },
      tranquilo:{
        type: Number,
        required: true,
      },
      espiritual:{
        type: Number,
        required: true,
      },
      aventurero:{
        type: Number,
        required: true,
      },
      liderazgo:{
        type: Number,
        required: true,
      },
      etico:{
        type: Number,
        required: true,
      },
      empatico:{
        type: Number,
        required: true,
      },
      critica:{
        type: Number,
        required: true,
      },
  },
  {
    timestamps: true,
  }
);

export default model("Respuesta", RespuestaSchema);
