import { letters as _ } from "../alphabet";
import { extendAll } from "../extendRules";

const table = {
  A: _.alif,
  aa: _.alif,
  b: _.ba,
  t: _.taw,
  c: _.ta,
  j: _.jim,
  H: _.het,
  K: _.kha,
  d: _.dal,
  "z'": _.dhal,
  r: _.ra,
  z: _.zayn,
  s: _.sin,
  x: _.shin,
  S: _.sad,
  D: _.dad,
  T: _.tha,
  Z: _.za,
  E: _.ayn,
  g: _.ghayn,
  f: _.fa,
  q: _.qaf,
  k: _.kaf,
  l: _.lam,
  m: _.mim,
  n: _.nun,
  h: _.ha,
  w: _.waw,
  uu: _.waw,
  y: _.ya,
  ii: _.ya
};

export default extendAll(table);
