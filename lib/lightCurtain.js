// Light Curtain: WebGL shader effect
const MAX_DPR = 2, TRAIL = 8, HIST = TRAIL - 1, TRAIL_LIFE = 0.62, TRAIL_STEP = 0.022;
const PULSES = 3, PULSE_LIFE = 1.15, PULSE_SPEED = 1.05, SWAY_W = 9.5, SWAY_Z = 0.3;

const VERT_SRC = `
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`;
const FRAG_SRC = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
const int TRAIL = 8;
const int PULSES = 3;
uniform vec2 uRes; uniform float uTime; uniform vec2 uMouse; uniform float uHover;
uniform float uReach; uniform float uSway; uniform float uRush;
uniform vec3 uTrail[TRAIL]; uniform vec3 uPulse[PULSES];
uniform vec3 uBg; uniform vec3 uBase; uniform vec3 uAccent; uniform vec3 uHigh;
uniform float uDensity; uniform float uWidth; uniform float uSpread; uniform float uStriation;
float sat(float x) { return clamp(x, 0.0, 1.0); }
float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 34.56); return fract(p.x * p.y); }
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = h21(i), b = h21(i + vec2(1.0, 0.0));
  float c = h21(i + vec2(0.0, 1.0)), d = h21(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}
float fbm5(vec2 p) {
  float s = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++) { s += a * vnoise(p); p = p * 2.03 + vec2(1.7, 9.2); a *= 0.5; }
  return s;
}
void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  float t = uTime;
  float rx = max(uReach, 0.02);
  float rx2 = rx * rx;
  float lift = 0.0, blob = 0.0, cenY = 0.0, cenW = 0.0;
  for (int i = 0; i < TRAIL; i++) {
    vec3 s = uTrail[i];
    float dx = uv.x - s.x;
    float dy = uv.y - s.y;
    float gx = s.z * exp(-(dx * dx) / rx2);
    lift += gx;
    blob += gx * exp(-(dy * dy) / (rx2 * 2.6));
    cenY += gx * s.y;
    cenW += gx;
  }
  float trailY = cenY / max(cenW, 1e-4);
  float ring = 0.0;
  for (int i = 0; i < PULSES; i++) {
    vec3 p = uPulse[i];
    float d = abs(uv.x - p.x) - p.y;
    ring += p.z * exp(-(d * d) / 0.0012);
  }
  lift = (min(lift, 2.0) + ring * 0.9) * uHover;
  blob = min(blob, 1.5) * uHover;
  float nearP = exp(-pow(uv.x - uMouse.x, 2.0) / (rx2 * 4.0));
  float xw = uv.x - uSway * 0.09 * (0.25 + 0.75 * nearP) * uHover;
  float n1 = fbm5(vec2(xw * 6.5 * uDensity, t * 0.045));
  float n2 = fbm5(vec2(xw * 24.0 * uDensity + 3.1, t * 0.075));
  float n3 = vnoise(vec2(xw * 210.0 * uDensity, t * 0.04));
  float n4 = vnoise(vec2(xw * 70.0 * uDensity, 4.0 + t * 0.03));
  float band = pow(sat(n1 * 1.30 + n2 * 0.80 - 0.58 + lift * 0.34), 1.95);
  band *= 0.62 + 0.70 * n4;
  float yc = 0.50 + 0.24 * uSpread * (fbm5(vec2(xw * 3.1 * uDensity, 11.0)) - 0.5) * 2.0;
  yc = mix(yc, trailY, sat(cenW * 1.1) * uHover * 0.45);
  float wdt = uWidth * (0.22 + 0.28 * n2 + 0.10 * n1) * (1.0 + 0.5 * uRush * sat(lift));
  float prof = exp(-pow(abs(uv.y - yc) / max(wdt, 0.02), 1.75));
  float inten = band * prof * (1.0 - uStriation * 0.5 + uStriation * n3);
  float blend = sat(n1 * 1.30 - n2 * 0.55 + 0.28);
  vec3 c = mix(uBase, uAccent, blend);
  float amber = sat((n2 - 0.70) * 5.2) * sat(n1 * 1.6 - 0.35);
  c = mix(c, uHigh, amber * 0.85);
  vec3 col = uBg;
  col += c * pow(inten, 0.88) * 1.42;
  col += vec3(1.0, 0.94, 1.0) * pow(inten, 4.5) * 0.65;
  col += c * 0.30 * pow(sat(prof * band * 3.0), 0.70);
  col += c * 0.10 * pow(sat(prof * 1.2), 1.3);
  col += mix(uAccent, uHigh, sat(uRush)) * blob * (0.22 + 0.16 * uRush);
  col += mix(uAccent, uHigh, 0.35) * ring * prof * 0.75 * uHover;
  col += vec3(1.0, 0.95, 0.92) * pow(ring, 3.0) * prof * 0.35 * uHover;
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`;

function parseColor(str) {
  const h = str.slice(1);
  return [parseInt(h.slice(0,2),16)/255, parseInt(h.slice(2,4),16)/255, parseInt(h.slice(4,6),16)/255];
}
const clampN = (v, lo, hi) => v < lo ? lo : v > hi ? hi : v;

const DEFAULTS = {
  background: "#171F2D",
  baseColor: "#004B49",
  accentColor: "#00D2C4",
  highlight: "#14E81E",
  density: 150,
  speed: 50,
  hover: 100,
  reach: 30,
  curtain: { curtainWidth: 30, spread: 0, striation: 100 },
};

/**
 * Mounts the effect inside any element (e.g. a div) and fills it.
 * Returns a function that stops the effect and removes the canvas.
 * Pass any subset of DEFAULTS as `config`; edit DEFAULTS above to change the look.
 */
export function initLightCurtain(container, config = {}) {
  if (getComputedStyle(container).position === "static") container.style.position = "relative";
  container.style.overflow = "hidden";
  const canvas = document.createElement("canvas");
  Object.assign(canvas.style, {
    position: "absolute", inset: "0", width: "100%", height: "100%",
    display: "block", pointerEvents: "none",
  });
  container.appendChild(canvas);
  // Props (with the preset: spread 0, striation 100, curtainWidth 30)
  const cfg = { ...DEFAULTS, ...config, curtain: { ...DEFAULTS.curtain, ...(config.curtain || {}) } };
  const P = { background: cfg.background, base: cfg.baseColor, accent: cfg.accentColor, high: cfg.highlight };
  const v = {
    density: clampN(cfg.density, 10, 150) / 50,
    speed: clampN(cfg.speed, 0, 100) / 50,
    cw: clampN(cfg.curtain.curtainWidth, 30, 250) / 100,
    spread: clampN(cfg.curtain.spread, 0, 200) / 100,
    striation: clampN(cfg.curtain.striation, 0, 100) / 100,
    hover: clampN(cfg.hover, 0, 200) / 100,
    reach: 0.02 + (clampN(cfg.reach, 0, 100) / 100) * 0.18,
  };

  const gl = canvas.getContext("webgl", { antialias: false, alpha: false, depth: false });
  if (!gl) { console.error("LightCurtain: WebGL unavailable"); canvas.remove(); return () => {}; }

  function compile(type, src) {
    const sh = gl.createShader(type);
    gl.shaderSource(sh, src); gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) console.error(gl.getShaderInfoLog(sh));
    return sh;
  }
  const prog = gl.createProgram();
  gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT_SRC));
  gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG_SRC));
  gl.linkProgram(prog);
  gl.useProgram(prog);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 3,-1, -1,3]), gl.STATIC_DRAW);
  const posLoc = gl.getAttribLocation(prog, "a_pos");
  gl.enableVertexAttribArray(posLoc);
  gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

  const locs = {};
  const u = n => (n in locs ? locs[n] : (locs[n] = gl.getUniformLocation(prog, n)));

  const ptr = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5, on: 0, onTarget: 0 };
  const hx = new Float32Array(HIST), hy = new Float32Array(HIST);
  const hAge = new Float32Array(HIST).fill(TRAIL_LIFE * 2);
  let head = 0, lastEmitX = 0.5, lastEmitY = 0.5;
  const trailData = new Float32Array(TRAIL * 3);
  const pulseX = new Float32Array(PULSES);
  const pulseAge = new Float32Array(PULSES).fill(PULSE_LIFE * 2);
  let pulseHead = 0;
  const pulseData = new Float32Array(PULSES * 3);
  const sway = { p: 0.5, v: 0 };
  let raf = 0, rush = 0, prevX = 0.5, prevY = 0.5, last = performance.now(), clock = 0;

  const bg = parseColor(P.background), base = parseColor(P.base),
        accent = parseColor(P.accent), high = parseColor(P.high);

  function render(now) {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    clock = (clock + dt * v.speed) % 3600;

    ptr.on += (ptr.onTarget - ptr.on) * (1 - Math.exp(-6 * dt));
    const kHead = 1 - Math.exp(-22 * dt);
    ptr.x += (ptr.tx - ptr.x) * kHead;
    ptr.y += (ptr.ty - ptr.y) * kHead;

    const inst = Math.hypot(ptr.tx - prevX, ptr.ty - prevY) / Math.max(dt, 1e-3);
    prevX = ptr.tx; prevY = ptr.ty;
    const rushTarget = clampN(inst / 2.0, 0, 1) * ptr.on;
    rush += (rushTarget - rush) * (1 - Math.exp(-(rushTarget > rush ? 14 : 3.2) * dt));

    sway.v += (-2 * SWAY_Z * SWAY_W * sway.v - SWAY_W * SWAY_W * (sway.p - ptr.x)) * dt;
    sway.p += sway.v * dt;
    const lag = clampN((ptr.x - sway.p) * 3.0, -1, 1);

    const my = 1 - ptr.y;
    if (ptr.on > 0.02 && Math.hypot(ptr.x - lastEmitX, my - lastEmitY) > TRAIL_STEP) {
      head = (head + 1) % HIST;
      hx[head] = ptr.x; hy[head] = my; hAge[head] = 0;
      lastEmitX = ptr.x; lastEmitY = my;
    }
    trailData[0] = ptr.x; trailData[1] = my; trailData[2] = ptr.on;
    for (let i = 0; i < HIST; i++) {
      const idx = (head - i + HIST * 2) % HIST;
      hAge[idx] += dt;
      const a = hAge[idx];
      const w = a >= TRAIL_LIFE ? 0 : Math.pow(1 - a / TRAIL_LIFE, 1.6) * ptr.on * 0.8;
      trailData[(i+1)*3] = hx[idx]; trailData[(i+1)*3+1] = hy[idx]; trailData[(i+1)*3+2] = w;
    }
    for (let i = 0; i < PULSES; i++) {
      pulseAge[i] += dt;
      const a = pulseAge[i];
      pulseData[i*3] = pulseX[i];
      pulseData[i*3+1] = a * PULSE_SPEED;
      pulseData[i*3+2] = a >= PULSE_LIFE ? 0 : Math.pow(1 - a / PULSE_LIFE, 2.0);
    }

    const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
    const bw = Math.max(1, Math.round((canvas.clientWidth || 1200) * dpr));
    const bh = Math.max(1, Math.round((canvas.clientHeight || 800) * dpr));
    if (canvas.width !== bw || canvas.height !== bh) { canvas.width = bw; canvas.height = bh; }
    gl.viewport(0, 0, bw, bh);

    gl.uniform2f(u("uRes"), bw, bh);
    gl.uniform1f(u("uTime"), clock);
    gl.uniform2f(u("uMouse"), ptr.x, my);
    gl.uniform1f(u("uHover"), Math.min(1, ptr.on) * v.hover);
    gl.uniform1f(u("uReach"), v.reach);
    gl.uniform1f(u("uSway"), lag);
    gl.uniform1f(u("uRush"), rush);
    gl.uniform3fv(u("uTrail[0]"), trailData);
    gl.uniform3fv(u("uPulse[0]"), pulseData);
    gl.uniform3f(u("uBg"), ...bg);
    gl.uniform3f(u("uBase"), ...base);
    gl.uniform3f(u("uAccent"), ...accent);
    gl.uniform3f(u("uHigh"), ...high);
    gl.uniform1f(u("uDensity"), v.density);
    gl.uniform1f(u("uWidth"), v.cw);
    gl.uniform1f(u("uSpread"), v.spread);
    gl.uniform1f(u("uStriation"), v.striation);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    raf = requestAnimationFrame(render);
  }

  const track = e => {
    const w = canvas.offsetWidth, h = canvas.offsetHeight;
    if (w <= 0 || h <= 0) return;
    ptr.tx = clampN(e.offsetX / w, 0, 1);
    ptr.ty = clampN(e.offsetY / h, 0, 1);
    if (ptr.on < 0.02) {
      ptr.x = ptr.tx; ptr.y = ptr.ty;
      sway.p = ptr.tx; sway.v = 0;
      prevX = ptr.tx; prevY = ptr.ty;
      lastEmitX = ptr.tx; lastEmitY = 1 - ptr.ty;
      hAge.fill(TRAIL_LIFE * 2);
    }
    ptr.onTarget = 1;
  };
  canvas.addEventListener("pointermove", track);
  canvas.addEventListener("pointerenter", track);
  canvas.addEventListener("pointerdown", e => {
    track(e);
    pulseHead = (pulseHead + 1) % PULSES;
    pulseX[pulseHead] = ptr.tx;
    pulseAge[pulseHead] = 0;
  });
  canvas.addEventListener("pointerleave", () => { ptr.onTarget = 0; });

  raf = requestAnimationFrame(render);

  return () => { cancelAnimationFrame(raf); canvas.remove(); };
}
