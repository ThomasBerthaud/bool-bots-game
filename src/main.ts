import "./style.css";
import { initShaderProgram } from "./iniShaderProgram";
import { fsSource } from "./shaders/fSource";
import { vsSource } from "./shaders/vSource";
import { initBuffers } from "./initBuffers";
import { drawScene } from "./drawScene";

function main() {
  const controls = document.querySelector<HTMLDivElement>("#controls");
  const canvas = document.querySelector<HTMLCanvasElement>("#main-canvas");

  if (!controls || !canvas) {
    // TODO display errors to user
    throw new Error("controls tags not found");
  }

  const gl = canvas.getContext("webgl");

  if (gl === null) {
    throw new Error("WebGL not supported");
  }

  // Set clear color to black, fully opaque
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // Clear the color buffer with specified clear color
  gl.clear(gl.COLOR_BUFFER_BIT);

  // Vertex shader program
  const shaderProgram = initShaderProgram(gl, vsSource, fsSource);

  const programInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
    },
    uniformLocations: {
      projectionMatrix: gl.getUniformLocation(shaderProgram, "uProjectionMatrix"),
      modelViewMatrix: gl.getUniformLocation(shaderProgram, "uModelViewMatrix"),
    },
  };

  const buffers = initBuffers(gl);

  drawScene(gl, programInfo, buffers);
}

window.onload = main;
