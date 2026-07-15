import { useEffect, useRef, useState } from "react";
import type {
  CatmullRomCurve3,
  MeshBasicMaterial,
  MeshStandardMaterial,
  Object3D,
} from "three";

type ThreeApi = typeof import("three");

const ACCENT = "#6FE5A5";
const ACCENT_SOFT = "#3DBA7B";
const ACCENT_DEEP = "#1CA36E";
const GRAPHITE = "#0E1411";
const BLACK = "#070A08";
const INK = "#E8F2EC";

const supportsWebGL = () => {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")),
    );
  } catch {
    return false;
  }
};

const useSceneMode = () => {
  const [mode, setMode] = useState({ fallback: true, reducedMotion: false });

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const smallScreen = window.matchMedia("(max-width: 720px)");

    const update = () => {
      setMode({
        fallback: smallScreen.matches || !supportsWebGL(),
        reducedMotion: reducedMotion.matches,
      });
    };

    update();
    reducedMotion.addEventListener("change", update);
    smallScreen.addEventListener("change", update);

    return () => {
      reducedMotion.removeEventListener("change", update);
      smallScreen.removeEventListener("change", update);
    };
  }, []);

  return mode;
};

const RailCoreFallback = () => (
  <div className="capital-core-fallback" aria-hidden="true">
    <svg className="capital-core-svg" viewBox="0 0 720 520" focusable="false">
      <defs>
        <radialGradient id="vaultFallbackCore" cx="50%" cy="44%" r="60%">
          <stop offset="0" stopColor="rgba(111,229,165,0.16)" />
          <stop offset="0.36" stopColor="rgba(14,20,17,0.96)" />
          <stop offset="1" stopColor="rgba(7,10,8,1)" />
        </radialGradient>
        <linearGradient id="vaultFallbackRail" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="rgba(111,229,165,0)" />
          <stop offset="0.5" stopColor="rgba(111,229,165,0.58)" />
          <stop offset="1" stopColor="rgba(111,229,165,0)" />
        </linearGradient>
      </defs>

      <ellipse className="fallback-vault-shadow" cx="360" cy="384" rx="198" ry="32" />
      <g className="fallback-rail-set">
        <ellipse className="fallback-rail muted" cx="360" cy="258" rx="256" ry="82" />
        <ellipse
          className="fallback-rail active"
          cx="360"
          cy="258"
          rx="222"
          ry="126"
          transform="rotate(-18 360 258)"
        />
        <ellipse
          className="fallback-rail muted"
          cx="360"
          cy="258"
          rx="164"
          ry="188"
          transform="rotate(24 360 258)"
        />
      </g>

      <g>
        <rect className="fallback-vault-side" x="264" y="206" width="192" height="106" rx="20" />
        <ellipse className="fallback-core-outer" cx="360" cy="212" rx="96" ry="36" />
        <ellipse className="fallback-core-inner" cx="360" cy="212" rx="54" ry="18" />
        <rect className="fallback-core-slot" x="318" y="248" width="84" height="8" rx="4" />
        <rect className="fallback-core-slot faint" x="300" y="276" width="120" height="6" rx="3" />
      </g>

      {[112, 214, 315, 438, 544, 612].map((cx, index) => (
        <circle
          key={cx}
          className={index === 3 ? "fallback-vault-node active" : "fallback-vault-node"}
          cx={cx}
          cy={index % 2 === 0 ? 260 : 202}
          r={index === 3 ? 8 : 6}
        />
      ))}
    </svg>
  </div>
);

const ellipseCurve = (
  THREE: ThreeApi,
  radiusX: number,
  radiusY: number,
  zWave: number,
  phase = 0,
) => {
  const points = Array.from({ length: 96 }, (_, index) => {
    const angle = (index / 95) * Math.PI * 2 + phase;
    return new THREE.Vector3(
      Math.cos(angle) * radiusX,
      Math.sin(angle) * radiusY,
      Math.sin(angle * 2 + phase) * zWave,
    );
  });

  return new THREE.CatmullRomCurve3(points, true, "catmullrom", 0.42);
};

const makeTube = (
  THREE: ThreeApi,
  curve: CatmullRomCurve3,
  radius: number,
  opacity: number,
) => {
  const geometry = new THREE.TubeGeometry(curve, 120, radius, 10, true);
  const material = new THREE.MeshStandardMaterial({
    color: ACCENT_SOFT,
    roughness: 0.5,
    metalness: 0.78,
    emissive: ACCENT_DEEP,
    emissiveIntensity: 0.02,
    transparent: true,
    opacity,
  });

  return new THREE.Mesh(geometry, material);
};

const makeNode = (
  THREE: ThreeApi,
  curve: CatmullRomCurve3,
  t: number,
  size: number,
) => {
  const material = new THREE.MeshStandardMaterial({
    color: GRAPHITE,
    roughness: 0.42,
    metalness: 0.72,
    emissive: ACCENT_SOFT,
    emissiveIntensity: 0.03,
  });
  const node = new THREE.Mesh(new THREE.SphereGeometry(size, 32, 24), material);
  node.position.copy(curve.getPoint(t));
  return node;
};

const createScene = async (
  mount: HTMLDivElement,
  reducedMotion: boolean,
) => {
  const THREE = await import("three");
  const width = mount.clientWidth;
  const height = mount.clientHeight;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, width / height, 0.1, 100);
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    powerPreference: "high-performance",
  });

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
  renderer.setSize(width, height);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  mount.appendChild(renderer.domElement);

  camera.position.set(0, 0.62, 7.35);
  camera.lookAt(0, 0, 0);

  const root = new THREE.Group();
  root.rotation.set(-0.23, -0.22, 0.04);
  scene.add(root);

  scene.add(new THREE.AmbientLight(INK, 0.22));

  const keyLight = new THREE.DirectionalLight(INK, 1.95);
  keyLight.position.set(4.2, 4.4, 6.2);
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight("#3DBA7B", 0.26);
  fillLight.position.set(-4.2, -1.4, 3.4);
  scene.add(fillLight);

  const coreLight = new THREE.PointLight(ACCENT, 0.95, 4.4);
  coreLight.position.set(0, 0.03, 0.35);
  root.add(coreLight);

  const vaultMaterial = new THREE.MeshStandardMaterial({
    color: GRAPHITE,
    roughness: 0.64,
    metalness: 0.56,
    emissive: ACCENT_DEEP,
    emissiveIntensity: 0.028,
  });
  const graphiteMaterial = new THREE.MeshStandardMaterial({
    color: BLACK,
    roughness: 0.48,
    metalness: 0.66,
    emissive: ACCENT_DEEP,
    emissiveIntensity: 0.012,
  });
  const edgeMaterial = new THREE.MeshStandardMaterial({
    color: "#111814",
    roughness: 0.38,
    metalness: 0.82,
    emissive: ACCENT,
    emissiveIntensity: 0.075,
  });

  const coreGroup = new THREE.Group();
  root.add(coreGroup);

  const vault = new THREE.Mesh(new THREE.CylinderGeometry(0.84, 0.94, 0.96, 72), vaultMaterial);
  vault.rotation.x = Math.PI / 2;
  coreGroup.add(vault);

  const face = new THREE.Mesh(new THREE.CylinderGeometry(0.58, 0.58, 0.1, 72), graphiteMaterial);
  face.rotation.x = Math.PI / 2;
  face.position.z = 0.52;
  coreGroup.add(face);

  const lockRing = new THREE.Mesh(new THREE.TorusGeometry(0.66, 0.028, 16, 112), edgeMaterial);
  lockRing.position.z = 0.59;
  coreGroup.add(lockRing);

  const innerSeal = new THREE.Mesh(new THREE.TorusGeometry(0.31, 0.018, 14, 96), edgeMaterial);
  innerSeal.position.z = 0.62;
  coreGroup.add(innerSeal);

  const bridgeGeometry = new THREE.BoxGeometry(1.95, 0.08, 0.16);
  const bridges = Array.from({ length: 3 }, (_, index) => {
    const bridge = new THREE.Mesh(bridgeGeometry.clone(), graphiteMaterial.clone());
    bridge.rotation.z = (Math.PI / 3) * index + Math.PI / 12;
    bridge.position.z = 0.05 - index * 0.05;
    coreGroup.add(bridge);
    return bridge;
  });

  const railGroup = new THREE.Group();
  root.add(railGroup);

  const ringMaterial = new THREE.MeshStandardMaterial({
    color: GRAPHITE,
    roughness: 0.5,
    metalness: 0.82,
    emissive: ACCENT_DEEP,
    emissiveIntensity: 0.018,
    transparent: true,
    opacity: 0.82,
  });

  const outerRing = new THREE.Mesh(new THREE.TorusGeometry(1.92, 0.022, 14, 152), ringMaterial.clone());
  outerRing.rotation.set(0.72, 0.08, -0.18);
  railGroup.add(outerRing);

  const diagonalRing = new THREE.Mesh(new THREE.TorusGeometry(1.58, 0.018, 14, 144), ringMaterial.clone());
  diagonalRing.rotation.set(1.08, 0.34, 0.74);
  railGroup.add(diagonalRing);

  const verticalRing = new THREE.Mesh(new THREE.TorusGeometry(1.22, 0.014, 12, 128), ringMaterial.clone());
  verticalRing.rotation.set(0.2, 1.22, -0.28);
  railGroup.add(verticalRing);

  const railCurves = [
    ellipseCurve(THREE, 2.26, 0.56, 0.18, 0.18),
    ellipseCurve(THREE, 1.64, 0.92, 0.28, 1.12),
    ellipseCurve(THREE, 1.12, 1.34, 0.22, -0.44),
  ];
  const railRotations = [
    new THREE.Euler(0.68, 0.04, -0.16),
    new THREE.Euler(0.86, 0.44, 0.58),
    new THREE.Euler(0.12, 1.02, -0.36),
  ];
  const nodeSpecs = [
    [
      [0.05, 0.058],
      [0.24, 0.052],
      [0.43, 0.064],
    ],
    [
      [0.18, 0.048],
      [0.58, 0.055],
    ],
    [
      [0.34, 0.05],
      [0.78, 0.047],
    ],
  ] as const;
  const railOrbitGroups = railCurves.map((curve, index) => {
    const orbit = new THREE.Group();
    orbit.rotation.copy(railRotations[index]);
    orbit.add(makeTube(THREE, curve, index === 0 ? 0.012 : 0.01, index === 0 ? 0.5 : 0.34));
    railGroup.add(orbit);
    return orbit;
  });

  const nodeEntries = nodeSpecs.flatMap((specs, railIndex) =>
    specs.map(([t, size]) => {
      const node = makeNode(THREE, railCurves[railIndex], t, size);
      railOrbitGroups[railIndex].add(node);
      return { node, railIndex };
    }),
  );
  const nodes = nodeEntries.map(({ node }) => node);

  const pulseMaterial = new THREE.MeshBasicMaterial({
    color: ACCENT,
    transparent: true,
    opacity: reducedMotion ? 0 : 0.9,
  });
  const pulse = new THREE.Mesh(new THREE.SphereGeometry(0.055, 24, 16), pulseMaterial);
  railOrbitGroups[0].add(pulse);

  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(2.45, 72),
    new THREE.MeshBasicMaterial({
      color: "#000000",
      transparent: true,
      opacity: 0.24,
      depthWrite: false,
    }),
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.set(0, -1.08, -0.22);
  root.add(shadow);

  let pointerX = 0;
  let pointerY = 0;
  const pointer = (event: PointerEvent) => {
    if (reducedMotion) return;
    const rect = mount.getBoundingClientRect();
    pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 0.12;
    pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 0.08;
  };
  mount.addEventListener("pointermove", pointer);

  const clock = new THREE.Clock();
  let frame = 0;

  const setStaticPose = () => {
    pulse.visible = false;
    nodes.forEach((node) => {
      (node.material as MeshStandardMaterial).emissiveIntensity = 0.035;
    });
    renderer.render(scene, camera);
  };

  const render = () => {
    const elapsed = clock.getElapsedTime();
    const breathe = 0.5 + Math.sin(elapsed * 1.08) * 0.5;
    const pulseT = (elapsed % 10.5) / 10.5;
    const pulsePoint = railCurves[0].getPoint(pulseT);
    pulse.position.copy(pulsePoint);

    nodeEntries.forEach(({ node, railIndex }) => {
      const distance = railIndex === 0 ? node.position.distanceTo(pulse.position) : 1;
      const active = Math.max(0, 1 - distance / 0.32);
      (node.material as MeshStandardMaterial).emissiveIntensity = 0.025 + active * 0.42;
    });

    (pulse.material as MeshBasicMaterial).opacity = 0.62 + breathe * 0.22;
    pulse.scale.setScalar(1 + breathe * 0.28);
    vaultMaterial.emissiveIntensity = 0.024 + breathe * 0.018;
    edgeMaterial.emissiveIntensity = 0.055 + breathe * 0.042;
    coreLight.intensity = 0.78 + breathe * 0.22;
    coreGroup.scale.setScalar(1 + Math.sin(elapsed * 0.78) * 0.006);

    const targetY = -0.22 + Math.sin(elapsed * 0.11) * 0.045 + pointerX;
    const targetX = -0.23 + Math.sin(elapsed * 0.09) * 0.016 - pointerY;
    root.rotation.y += (targetY - root.rotation.y) * 0.028;
    root.rotation.x += (targetX - root.rotation.x) * 0.028;
    railGroup.rotation.z = Math.sin(elapsed * 0.1) * 0.018;
    outerRing.rotation.z += 0.0014;
    diagonalRing.rotation.z -= 0.001;
    verticalRing.rotation.z += 0.0008;
    bridges.forEach((bridge, index) => {
      bridge.rotation.z += index % 2 === 0 ? 0.0008 : -0.0006;
    });

    renderer.render(scene, camera);
    frame = window.requestAnimationFrame(render);
  };

  if (reducedMotion) {
    setStaticPose();
  } else {
    render();
  }

  const resize = () => {
    const nextWidth = mount.clientWidth;
    const nextHeight = mount.clientHeight;
    camera.aspect = nextWidth / nextHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(nextWidth, nextHeight);
    if (reducedMotion) renderer.render(scene, camera);
  };

  window.addEventListener("resize", resize);

  const disposeObject = (object: Object3D) => {
    if (object instanceof THREE.Mesh) {
      object.geometry.dispose();
      const material = object.material;
      if (Array.isArray(material)) {
        material.forEach((item) => item.dispose());
      } else {
        material.dispose();
      }
    }
  };

  return () => {
    window.cancelAnimationFrame(frame);
    window.removeEventListener("resize", resize);
    mount.removeEventListener("pointermove", pointer);
    if (renderer.domElement.parentNode === mount) {
      mount.removeChild(renderer.domElement);
    }
    scene.traverse(disposeObject);
    renderer.dispose();
  };
};

const CapitalRailScene = ({ reducedMotion }: { reducedMotion: boolean }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return undefined;
    let cancelled = false;
    let cleanup: (() => void) | undefined;

    createScene(mountRef.current, reducedMotion)
      .then((dispose) => {
        if (cancelled) {
          dispose();
          return;
        }
        cleanup = dispose;
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [reducedMotion]);

  if (failed) return <RailCoreFallback />;

  return <div className="capital-core-canvas" ref={mountRef} aria-hidden="true" />;
};

export const HeroCapitalRailCore = () => {
  const { fallback, reducedMotion } = useSceneMode();

  return (
    <div className="hero-capital-rail-core" aria-label="Capital markets settlement core">
      <span className="sr-only">
        A dark institutional settlement core with controlled rails, custody-like
        forms, and restrained emerald highlights.
      </span>
      {fallback ? <RailCoreFallback /> : <CapitalRailScene reducedMotion={reducedMotion} />}
    </div>
  );
};
