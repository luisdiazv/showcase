precision mediump float;

uniform vec4 uMaterial1;
uniform vec4 uMaterial2;

void main() {
  gl_FragColor = vec4((uMaterial1.rgb + uMaterial2.rgb)*(0.5),1);
  }