import React, { useEffect, useRef } from 'react';
import {
  Vector3 as a,
  MeshPhysicalMaterial as c,
  InstancedMesh as d,
  Clock as e,
  AmbientLight as f,
  SphereGeometry as g,
  ShaderChunk as h,
  Scene as i,
  Color as l,
  Object3D as m,
  SRGBColorSpace as n,
  MathUtils as o,
  PMREMGenerator as p,
  Vector2 as r,
  WebGLRenderer as s,
  PerspectiveCamera as t,
  PointLight as u,
  ACESFilmicToneMapping as v,
  Plane as w,
  Raycaster as y
} from 'three';
import { RoomEnvironment as z } from 'three/examples/jsm/environments/RoomEnvironment.js';

export interface BallpitProps {
  className?: string;
  count?: number;
  gravity?: number;
  friction?: number;
  wallBounce?: number;
  followCursor?: boolean;
  colors?: number[];
  ambientColor?: number;
  ambientIntensity?: number;
  lightIntensity?: number;
  materialParams?: {
    metalness?: number;
    roughness?: number;
    clearcoat?: number;
    clearcoatRoughness?: number;
  };
  minSize?: number;
  maxSize?: number;
  size0?: number;
  maxVelocity?: number;
  maxX?: number;
  maxY?: number;
  maxZ?: number;
}

class ThreeCanvasApp {
  #e: any;
  canvas!: HTMLCanvasElement;
  camera!: any;
  cameraMinAspect?: number;
  cameraMaxAspect?: number;
  cameraFov!: number;
  maxPixelRatio?: number;
  minPixelRatio?: number;
  scene!: any;
  renderer!: any;
  #t: any;
  size = { width: 0, height: 0, wWidth: 0, wHeight: 0, ratio: 0, pixelRatio: 0 };
  render = this.#i;
  onBeforeRender = (_h: any) => {};
  onAfterRender = (_h: any) => {};
  onAfterResize = (_size: any) => {};
  #s = false;
  #n = false;
  #boundResize = this.#f.bind(this);
  #boundVisibilityChange = this.#v.bind(this);
  isDisposed = false;
  #o: any;
  #r: any;
  #a: any;
  #c = new (e as any)();
  #h = { elapsed: 0, delta: 0 };
  #l: any;
  constructor(options: any) {
    this.#e = { ...options };
    this.#m();
    this.#d();
    this.#p();
    this.resize();
    this.#g();
  }
  #m() {
    this.camera = new (t as any)();
    this.cameraFov = this.camera.fov;
  }
  #d() {
    this.scene = new (i as any)();
  }
  #p() {
    if (this.#e.canvas) {
      this.canvas = this.#e.canvas;
    } else if (this.#e.id) {
      this.canvas = document.getElementById(this.#e.id) as HTMLCanvasElement;
    } else {
      console.error('Three: Missing canvas or id parameter');
    }
    this.canvas.style.display = 'block';
    const opts = {
      canvas: this.canvas,
      powerPreference: 'high-performance',
      ...(this.#e.rendererOptions ?? {})
    };
    this.renderer = new (s as any)(opts);
    this.renderer.outputColorSpace = n;
  }
  #g() {
    if (!(this.#e.size instanceof Object)) {
      window.addEventListener('resize', this.#boundResize);
      if (this.#e.size === 'parent' && this.canvas.parentNode) {
        this.#r = new ResizeObserver(this.#f.bind(this));
        this.#r.observe(this.canvas.parentNode as Element);
      }
    }
    this.#o = new IntersectionObserver(this.#u.bind(this), {
      root: null,
      rootMargin: '0px',
      threshold: 0
    });
    this.#o.observe(this.canvas);
    document.addEventListener('visibilitychange', this.#boundVisibilityChange);
  }
  #y() {
    window.removeEventListener('resize', this.#boundResize);
    this.#r?.disconnect();
    this.#o?.disconnect();
    document.removeEventListener('visibilitychange', this.#boundVisibilityChange);
  }
  #u(entries: IntersectionObserverEntry[]) {
    this.#s = entries[0].isIntersecting;
    this.#s ? this.#w() : this.#z();
  }
  #v() {
    if (this.#s) {
      document.hidden ? this.#z() : this.#w();
    }
  }
  #f() {
    if (this.#a) clearTimeout(this.#a);
    this.#a = setTimeout(this.resize.bind(this), 100);
  }
  resize() {
    let width: number, height: number;
    if (this.#e.size instanceof Object) {
      width = this.#e.size.width;
      height = this.#e.size.height;
    } else if (this.#e.size === 'parent' && this.canvas.parentNode) {
      width = (this.canvas.parentNode as HTMLElement).offsetWidth;
      height = (this.canvas.parentNode as HTMLElement).offsetHeight;
    } else {
      width = window.innerWidth;
      height = window.innerHeight;
    }
    this.size.width = width;
    this.size.height = height;
    this.size.ratio = width / height;
    this.#x();
    this.#b();
    this.onAfterResize(this.size);
  }
  #x() {
    this.camera.aspect = this.size.width / this.size.height;
    if (this.camera.isPerspectiveCamera && this.cameraFov) {
      if (this.cameraMinAspect && this.camera.aspect < this.cameraMinAspect) {
        this.#A(this.cameraMinAspect);
      } else if (this.cameraMaxAspect && this.camera.aspect > this.cameraMaxAspect) {
        this.#A(this.cameraMaxAspect);
      } else {
        this.camera.fov = this.cameraFov;
      }
    }
    this.camera.updateProjectionMatrix();
    this.updateWorldSize();
  }
  #A(aspect: number) {
    const tangent = Math.tan(o.degToRad(this.cameraFov / 2)) / (this.camera.aspect / aspect);
    this.camera.fov = 2 * o.radToDeg(Math.atan(tangent));
  }
  updateWorldSize() {
    if (this.camera.isPerspectiveCamera) {
      const fovRad = (this.camera.fov * Math.PI) / 180;
      this.size.wHeight = 2 * Math.tan(fovRad / 2) * this.camera.position.length();
      this.size.wWidth = this.size.wHeight * this.camera.aspect;
    } else if (this.camera.isOrthographicCamera) {
      this.size.wHeight = this.camera.top - this.camera.bottom;
      this.size.wWidth = this.camera.right - this.camera.left;
    }
  }
  #b() {
    this.renderer.setSize(this.size.width, this.size.height);
    this.#t?.setSize(this.size.width, this.size.height);
    let ratio = window.devicePixelRatio;
    if (this.maxPixelRatio && ratio > this.maxPixelRatio) {
      ratio = this.maxPixelRatio;
    } else if (this.minPixelRatio && ratio < this.minPixelRatio) {
      ratio = this.minPixelRatio;
    }
    this.renderer.setPixelRatio(ratio);
    this.size.pixelRatio = ratio;
  }
  get postprocessing() {
    return this.#t;
  }
  set postprocessing(val: any) {
    this.#t = val;
    this.render = val.render.bind(val);
  }
  #w() {
    if (this.#n) return;
    const animate = () => {
      this.#l = requestAnimationFrame(animate);
      this.#c.update();
      this.#h.delta = this.#c.getDelta();
      this.#h.elapsed += this.#h.delta;
      this.onBeforeRender(this.#h);
      this.render();
      this.onAfterRender(this.#h);
    };
    this.#n = true;
    this.#c.reset();
    animate();
  }
  #z() {
    if (this.#n) {
      cancelAnimationFrame(this.#l);
      this.#n = false;
    }
  }
  #i() {
    this.renderer.render(this.scene, this.camera);
  }
  clear() {
    this.scene.traverse((obj: any) => {
      if (obj.isMesh && typeof obj.material === 'object' && obj.material !== null) {
        Object.keys(obj.material).forEach(key => {
          const mat = obj.material[key];
          if (mat !== null && typeof mat === 'object' && typeof mat.dispose === 'function') {
            mat.dispose();
          }
        });
        obj.material.dispose();
        obj.geometry.dispose();
      }
    });
    this.scene.clear();
  }
  dispose() {
    this.#y();
    this.#z();
    this.#c?.dispose?.();
    this.clear();
    this.#t?.dispose();
    this.renderer.dispose();
    this.renderer.forceContextLoss();
    this.isDisposed = true;
  }
}

const interactionMap = new Map();
const tempVec2 = new (r as any)();
let globalListenersAttached = false;

function setupPointerInteraction(options: any) {
  const handler = {
    position: new (r as any)(),
    nPosition: new (r as any)(),
    hover: false,
    touching: false,
    onEnter() {},
    onMove() {},
    onClick() {},
    onLeave() {},
    ...options
  };
  (function (elem: HTMLElement, h: any) {
    if (!interactionMap.has(elem)) {
      interactionMap.set(elem, h);
      if (!globalListenersAttached) {
        document.body.addEventListener('pointermove', handlePointerMove);
        document.body.addEventListener('pointerleave', handlePointerLeave);
        document.body.addEventListener('click', handlePointerClick);

        document.body.addEventListener('touchstart', handleTouchStart, { passive: false });
        document.body.addEventListener('touchmove', handleTouchMove, { passive: false });
        document.body.addEventListener('touchend', handleTouchEnd, { passive: false });
        document.body.addEventListener('touchcancel', handleTouchEnd, { passive: false });

        globalListenersAttached = true;
      }
    }
  })(options.domElement, handler);

  handler.dispose = () => {
    const elem = options.domElement;
    interactionMap.delete(elem);
    if (interactionMap.size === 0) {
      document.body.removeEventListener('pointermove', handlePointerMove);
      document.body.removeEventListener('pointerleave', handlePointerLeave);
      document.body.removeEventListener('click', handlePointerClick);

      document.body.removeEventListener('touchstart', handleTouchStart);
      document.body.removeEventListener('touchmove', handleTouchMove);
      document.body.removeEventListener('touchend', handleTouchEnd);
      document.body.removeEventListener('touchcancel', handleTouchEnd);

      globalListenersAttached = false;
    }
  };
  return handler;
}

function handlePointerMove(e: PointerEvent) {
  tempVec2.x = e.clientX;
  tempVec2.y = e.clientY;
  processInteractions();
}

function processInteractions() {
  for (const [elem, handler] of interactionMap) {
    const rect = elem.getBoundingClientRect();
    if (isInsideRect(rect)) {
      updatePositions(handler, rect);
      if (!handler.hover) {
        handler.hover = true;
        handler.onEnter(handler);
      }
      handler.onMove(handler);
    } else if (handler.hover && !handler.touching) {
      handler.hover = false;
      handler.onLeave(handler);
    }
  }
}

function handlePointerClick(e: MouseEvent) {
  tempVec2.x = e.clientX;
  tempVec2.y = e.clientY;
  for (const [elem, handler] of interactionMap) {
    const rect = elem.getBoundingClientRect();
    updatePositions(handler, rect);
    if (isInsideRect(rect)) handler.onClick(handler);
  }
}

function handlePointerLeave() {
  for (const handler of interactionMap.values()) {
    if (handler.hover) {
      handler.hover = false;
      handler.onLeave(handler);
    }
  }
}

function handleTouchStart(e: TouchEvent) {
  if (e.touches.length > 0) {
    e.preventDefault();
    tempVec2.x = e.touches[0].clientX;
    tempVec2.y = e.touches[0].clientY;

    for (const [elem, handler] of interactionMap) {
      const rect = elem.getBoundingClientRect();
      if (isInsideRect(rect)) {
        handler.touching = true;
        updatePositions(handler, rect);
        if (!handler.hover) {
          handler.hover = true;
          handler.onEnter(handler);
        }
        handler.onMove(handler);
      }
    }
  }
}

function handleTouchMove(e: TouchEvent) {
  if (e.touches.length > 0) {
    e.preventDefault();
    tempVec2.x = e.touches[0].clientX;
    tempVec2.y = e.touches[0].clientY;

    for (const [elem, handler] of interactionMap) {
      const rect = elem.getBoundingClientRect();
      updatePositions(handler, rect);

      if (isInsideRect(rect)) {
        if (!handler.hover) {
          handler.hover = true;
          handler.touching = true;
          handler.onEnter(handler);
        }
        handler.onMove(handler);
      } else if (handler.hover && handler.touching) {
        handler.onMove(handler);
      }
    }
  }
}

function handleTouchEnd() {
  for (const [, handler] of interactionMap) {
    if (handler.touching) {
      handler.touching = false;
      if (handler.hover) {
        handler.hover = false;
        handler.onLeave(handler);
      }
    }
  }
}

function updatePositions(handler: any, rect: DOMRect) {
  const { position: pos, nPosition: nPos } = handler;
  pos.x = tempVec2.x - rect.left;
  pos.y = tempVec2.y - rect.top;
  nPos.x = (pos.x / rect.width) * 2 - 1;
  nPos.y = (-pos.y / rect.height) * 2 + 1;
}

function isInsideRect(rect: DOMRect) {
  const { x, y } = tempVec2;
  const { left, top, width, height } = rect;
  return x >= left && x <= left + width && y >= top && y <= top + height;
}

const { randFloat, randFloatSpread } = o;
const vecF = new (a as any)();
const vecI = new (a as any)();
const vecO = new (a as any)();
const vecV = new (a as any)();
const vecB = new (a as any)();
const vecN = new (a as any)();
const vecUnderscore = new (a as any)();
const vecJ = new (a as any)();
const vecH = new (a as any)();
const vecT = new (a as any)();

class PhysicsSimulation {
  config: any;
  positionData: Float32Array;
  velocityData: Float32Array;
  sizeData: Float32Array;
  center = new (a as any)();
  constructor(config: any) {
    this.config = config;
    this.positionData = new Float32Array(3 * config.count).fill(0);
    this.velocityData = new Float32Array(3 * config.count).fill(0);
    this.sizeData = new Float32Array(config.count).fill(1);
    this.#initPositions();
    this.setSizes();
  }
  #initPositions() {
    const { config, positionData } = this;
    this.center.toArray(positionData, 0);
    for (let idx = 1; idx < config.count; idx++) {
      const base = 3 * idx;
      positionData[base] = randFloatSpread(2 * config.maxX);
      positionData[base + 1] = randFloatSpread(2 * config.maxY);
      positionData[base + 2] = randFloatSpread(2 * config.maxZ);
    }
  }
  setSizes() {
    const { config, sizeData } = this;
    sizeData[0] = config.size0;
    for (let idx = 1; idx < config.count; idx++) {
      sizeData[idx] = randFloat(config.minSize, config.maxSize);
    }
  }
  update(timeState: any) {
    const { config, center, positionData, sizeData, velocityData } = this;
    let startIdx = 0;
    if (config.controlSphere0) {
      startIdx = 1;
      vecF.fromArray(positionData, 0);
      vecF.lerp(center, 0.1).toArray(positionData, 0);
      vecV.set(0, 0, 0).toArray(velocityData, 0);
    }
    for (let idx = startIdx; idx < config.count; idx++) {
      const base = 3 * idx;
      vecI.fromArray(positionData, base);
      vecB.fromArray(velocityData, base);
      vecB.y -= timeState.delta * config.gravity * sizeData[idx];
      vecB.multiplyScalar(config.friction);
      vecB.clampLength(0, config.maxVelocity);
      vecI.add(vecB);
      vecI.toArray(positionData, base);
      vecB.toArray(velocityData, base);
    }
    for (let idx = startIdx; idx < config.count; idx++) {
      const base = 3 * idx;
      vecI.fromArray(positionData, base);
      vecB.fromArray(velocityData, base);
      const radius = sizeData[idx];
      for (let jdx = idx + 1; jdx < config.count; jdx++) {
        const otherBase = 3 * jdx;
        vecO.fromArray(positionData, otherBase);
        vecN.fromArray(velocityData, otherBase);
        const otherRadius = sizeData[jdx];
        vecUnderscore.copy(vecO).sub(vecI);
        const dist = vecUnderscore.length();
        const sumRadius = radius + otherRadius;
        if (dist < sumRadius) {
          const overlap = sumRadius - dist;
          vecJ.copy(vecUnderscore)
            .normalize()
            .multiplyScalar(0.5 * overlap);
          vecH.copy(vecJ).multiplyScalar(Math.max(vecB.length(), 1));
          vecT.copy(vecJ).multiplyScalar(Math.max(vecN.length(), 1));
          vecI.sub(vecJ);
          vecB.sub(vecH);
          vecI.toArray(positionData, base);
          vecB.toArray(velocityData, base);
          vecO.add(vecJ);
          vecN.add(vecT);
          vecO.toArray(positionData, otherBase);
          vecN.toArray(velocityData, otherBase);
        }
      }
      if (config.controlSphere0) {
        vecUnderscore.copy(vecF).sub(vecI);
        const dist = vecUnderscore.length();
        const sumRadius0 = radius + sizeData[0];
        if (dist < sumRadius0) {
          const diff = sumRadius0 - dist;
          vecJ.copy(vecUnderscore.normalize()).multiplyScalar(diff);
          vecH.copy(vecJ).multiplyScalar(Math.max(vecB.length(), 2));
          vecI.sub(vecJ);
          vecB.sub(vecH);
        }
      }
      if (Math.abs(vecI.x) + radius > config.maxX) {
        vecI.x = Math.sign(vecI.x) * (config.maxX - radius);
        vecB.x = -vecB.x * config.wallBounce;
      }
      if (config.gravity === 0) {
        if (Math.abs(vecI.y) + radius > config.maxY) {
          vecI.y = Math.sign(vecI.y) * (config.maxY - radius);
          vecB.y = -vecB.y * config.wallBounce;
        }
      } else if (vecI.y - radius < -config.maxY) {
        vecI.y = -config.maxY + radius;
        vecB.y = -vecB.y * config.wallBounce;
      }
      const maxBoundary = Math.max(config.maxZ, config.maxSize);
      if (Math.abs(vecI.z) + radius > maxBoundary) {
        vecI.z = Math.sign(vecI.z) * (config.maxZ - radius);
        vecB.z = -vecB.z * config.wallBounce;
      }
      vecI.toArray(positionData, base);
      vecB.toArray(velocityData, base);
    }
  }
}

class PhysicalMaterialWithScattering extends (c as any) {
  uniforms: any;
  defines: any;
  onBeforeCompile2: any;
  constructor(options: any) {
    super(options);
    this.uniforms = {
      thicknessDistortion: { value: 0.1 },
      thicknessAmbient: { value: 0 },
      thicknessAttenuation: { value: 0.1 },
      thicknessPower: { value: 2 },
      thicknessScale: { value: 10 }
    };
    this.defines = this.defines || {};
    this.defines.USE_UV = '';
    this.onBeforeCompile = (shader: any) => {
      Object.assign(shader.uniforms, this.uniforms);
      shader.fragmentShader =
        '\n        uniform float thicknessPower;\n        uniform float thicknessScale;\n        uniform float thicknessDistortion;\n        uniform float thicknessAmbient;\n        uniform float thicknessAttenuation;\n      ' +
        shader.fragmentShader;
      shader.fragmentShader = shader.fragmentShader.replace(
        'void main() {',
        '\n        void RE_Direct_Scattering(const in IncidentLight directLight, const in vec2 uv, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, inout ReflectedLight reflectedLight) {\n          vec3 scatteringHalf = normalize(directLight.direction + (geometryNormal * thicknessDistortion));\n          float scatteringDot = pow(saturate(dot(geometryViewDir, -scatteringHalf)), thicknessPower) * thicknessScale;\n          #ifdef USE_COLOR\n            vec3 scatteringIllu = (scatteringDot + thicknessAmbient) * vColor;\n          #else\n            vec3 scatteringIllu = (scatteringDot + thicknessAmbient) * diffuse;\n          #endif\n          reflectedLight.directDiffuse += scatteringIllu * thicknessAttenuation * directLight.color;\n        }\n\n        void main() {\n      '
      );
      const targetChunk = 'RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );';
      const replacementChunk = '\n          RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n          RE_Direct_Scattering(directLight, vUv, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, reflectedLight);\n        ';
      const replacedChunk = h.lights_fragment_begin.split(targetChunk).join(replacementChunk);
      shader.fragmentShader = shader.fragmentShader.replace('#include <lights_fragment_begin>', replacedChunk);
      if (this.onBeforeCompile2) this.onBeforeCompile2(shader);
    };
  }
}

const DEFAULT_CONFIG = {
  count: 200,
  colors: [0x00d2ff, 0x0072ff, 0x9200ff, 0xff007f],
  ambientColor: 0xffffff,
  ambientIntensity: 1,
  lightIntensity: 200,
  materialParams: {
    metalness: 0.5,
    roughness: 0.5,
    clearcoat: 1,
    clearcoatRoughness: 0.15
  },
  minSize: 0.5,
  maxSize: 1,
  size0: 1,
  gravity: 0.7,
  friction: 0.8,
  wallBounce: 0.95,
  maxVelocity: 0.15,
  maxX: 5,
  maxY: 5,
  maxZ: 2,
  controlSphere0: false,
  followCursor: true
};

const dummyObject3D = new (m as any)();

class SpheresMesh extends (d as any) {
  config: any;
  physics: any;
  ambientLight: any;
  light: any;
  constructor(renderer: any, options: any = {}) {
    const config = { ...DEFAULT_CONFIG, ...options };
    const roomEnv = new (z as any)();
    const pmremGen = new (p as any)(renderer, 0.04);
    const envTexture = pmremGen.fromScene(roomEnv).texture;
    const geometry = new (g as any)();
    const material = new PhysicalMaterialWithScattering({ envMap: envTexture, ...config.materialParams });
    material.envMapRotation.x = -Math.PI / 2;
    super(geometry, material, config.count);
    this.config = config;
    this.physics = new PhysicsSimulation(config);
    this.#setupLights();
    this.setColors(config.colors);
  }
  #setupLights() {
    this.ambientLight = new (f as any)(this.config.ambientColor, this.config.ambientIntensity);
    this.add(this.ambientLight);
    const initialColor = Array.isArray(this.config.colors) ? this.config.colors[0] : 0xffffff;
    this.light = new (u as any)(initialColor, this.config.lightIntensity);
    this.add(this.light);
  }
  setColors(colorsList: any) {
    if (Array.isArray(colorsList) && colorsList.length > 0) {
      const colorHelper = (function (list: any[]) {
        let colors = list;
        let colorObjects: any[] = [];
        function set(arr: any[]) {
          colors = arr;
          colorObjects = [];
          colors.forEach(col => {
            colorObjects.push(new (l as any)(col));
          });
        }
        set(list);
        return {
          set,
          getColorAt: function (ratio: number, out = new (l as any)()) {
            if (colorObjects.length === 1) return colorObjects[0].clone();
            const scaled = Math.max(0, Math.min(1, ratio)) * (colors.length - 1);
            const idx = Math.floor(scaled);
            const start = colorObjects[idx];
            if (idx >= colors.length - 1) return start.clone();
            const alpha = scaled - idx;
            const end = colorObjects[idx + 1];
            out.r = start.r + alpha * (end.r - start.r);
            out.g = start.g + alpha * (end.g - start.g);
            out.b = start.b + alpha * (end.b - start.b);
            return out;
          }
        };
      })(colorsList);
      for (let idx = 0; idx < this.count; idx++) {
        this.setColorAt(idx, colorHelper.getColorAt(idx / this.count));
        if (idx === 0) {
          this.light.color.copy(colorHelper.getColorAt(idx / this.count));
        }
      }
      (this as any).instanceColor.needsUpdate = true;
    }
  }
  update(timeState: any) {
    this.physics.update(timeState);
    for (let idx = 0; idx < this.count; idx++) {
      dummyObject3D.position.fromArray(this.physics.positionData, 3 * idx);
      if (idx === 0 && this.config.followCursor === false) {
        dummyObject3D.scale.setScalar(0);
      } else {
        dummyObject3D.scale.setScalar(this.physics.sizeData[idx]);
      }
      dummyObject3D.updateMatrix();
      this.setMatrixAt(idx, dummyObject3D.matrix);
      if (idx === 0) this.light.position.copy(dummyObject3D.position);
    }
    (this as any).instanceMatrix.needsUpdate = true;
  }
}

function createBallpitApp(canvas: HTMLCanvasElement, options: any = {}) {
  const threeApp = new ThreeCanvasApp({
    canvas,
    size: 'parent',
    rendererOptions: { antialias: true, alpha: true }
  });
  let spheresMesh: SpheresMesh;
  threeApp.renderer.toneMapping = v;
  threeApp.camera.position.set(0, 0, 20);
  threeApp.camera.lookAt(0, 0, 0);
  threeApp.cameraMaxAspect = 1.5;
  threeApp.resize();
  initialize(options);
  const raycaster = new (y as any)();
  const plane = new (w as any)(new (a as any)(0, 0, 1), 0);
  const intersectionPoint = new (a as any)();
  let isPaused = false;

  canvas.style.touchAction = 'none';
  canvas.style.userSelect = 'none';

  const pointerHandler = setupPointerInteraction({
    domElement: canvas,
    onMove() {
      raycaster.setFromCamera(pointerHandler.nPosition, threeApp.camera);
      threeApp.camera.getWorldDirection(plane.normal);
      raycaster.ray.intersectPlane(plane, intersectionPoint);
      spheresMesh.physics.center.copy(intersectionPoint);
      spheresMesh.config.controlSphere0 = true;
    },
    onLeave() {
      spheresMesh.config.controlSphere0 = false;
    }
  });

  function initialize(opts: any) {
    if (spheresMesh) {
      threeApp.clear();
      threeApp.scene.remove(spheresMesh);
    }
    spheresMesh = new SpheresMesh(threeApp.renderer, opts);
    threeApp.scene.add(spheresMesh);
  }

  threeApp.onBeforeRender = (timeState: any) => {
    if (!isPaused) spheresMesh.update(timeState);
  };
  threeApp.onAfterResize = (sizeState: any) => {
    spheresMesh.config.maxX = sizeState.wWidth / 2;
    spheresMesh.config.maxY = sizeState.wHeight / 2;
  };

  return {
    three: threeApp,
    get spheres() {
      return spheresMesh;
    },
    setCount(count: number) {
      initialize({ ...spheresMesh.config, count });
    },
    updateConfig(newProps: any) {
      if (newProps.count !== undefined && newProps.count !== spheresMesh.config.count) {
        initialize({ ...spheresMesh.config, ...newProps });
      } else {
        Object.assign(spheresMesh.config, newProps);
        if (newProps.colors) {
          spheresMesh.setColors(spheresMesh.config.colors);
        }
        if (newProps.minSize !== undefined || newProps.maxSize !== undefined || newProps.size0 !== undefined) {
          spheresMesh.physics.setSizes();
        }
      }
    },
    togglePause() {
      isPaused = !isPaused;
    },
    dispose() {
      pointerHandler.dispose();
      threeApp.dispose();
    }
  };
}

export const Ballpit: React.FC<BallpitProps> = ({ className = '', followCursor = true, ...props }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const spheresInstanceRef = useRef<any>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    spheresInstanceRef.current = createBallpitApp(canvas, { followCursor, ...props });

    return () => {
      if (spheresInstanceRef.current) {
        spheresInstanceRef.current.dispose();
        spheresInstanceRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (spheresInstanceRef.current) {
      spheresInstanceRef.current.updateConfig({ followCursor, ...props });
    }
  }, [props, followCursor]);

  return <canvas className={className} ref={canvasRef} style={{ width: '100%', height: '100%' }} />;
};

export default Ballpit;
