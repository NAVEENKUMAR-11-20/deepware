import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';

interface DenveXIntroProps {
  onComplete: () => void;
  onStartTransition?: () => void;
}

// ── Scene timing (seconds) ─────────────────────────────────────────────────────
const T = {
  s1: 0,    // 0-2s  : Neon orb travels through space
  s2: 2,    // 2-4s  : Transparent cube appears & rotates
  s3: 4,    // 4-6s  : Cube opens, logo assembles inside
  s4: 6,    // 6-8s  : Logo fully visible, camera zooms, light sweep
  s5: 8,    // 8-10s : Text reveal, energy pulse
  end: 11.4,
  total: 10.6,
};

// ── Build a soft radial-glow canvas texture ────────────────────────────────────
function makeGlowTex(
  size: number,
  r: number, g: number, b: number,
  innerAlpha = 1.0
): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = size; c.height = size;
  const ctx = c.getContext('2d')!;
  const grad = ctx.createRadialGradient(size/2,size/2,0, size/2,size/2,size/2);
  grad.addColorStop(0,   `rgba(${r},${g},${b},${innerAlpha})`);
  grad.addColorStop(0.25,`rgba(${r},${g},${b},${(innerAlpha*0.55).toFixed(2)})`);
  grad.addColorStop(0.6, `rgba(${r},${g},${b},0.12)`);
  grad.addColorStop(1,   `rgba(0,0,0,0)`);
  ctx.fillStyle = grad;
  ctx.fillRect(0,0,size,size);
  return new THREE.CanvasTexture(c);
}

// ── Build star/spike lens-flare canvas texture ─────────────────────────────────
function makeFlareTex(size = 256): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = size; c.height = size;
  const ctx = c.getContext('2d')!;
  // Outer glow
  const g = ctx.createRadialGradient(size/2,size/2,0,size/2,size/2,size/2);
  g.addColorStop(0,   'rgba(255,255,255,1)');
  g.addColorStop(0.15,'rgba(56,189,248,0.7)');
  g.addColorStop(0.45,'rgba(14,165,233,0.2)');
  g.addColorStop(1,   'rgba(0,0,0,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0,0,size,size);
  // 4-spike star rays
  ctx.save();
  ctx.translate(size/2, size/2);
  ctx.globalCompositeOperation = 'lighter';
  for(let a=0; a<4; a++){
    ctx.save();
    ctx.rotate(a * Math.PI/2);
    const sg = ctx.createLinearGradient(0,0,size/2,0);
    sg.addColorStop(0,  'rgba(255,255,255,0.9)');
    sg.addColorStop(0.4,'rgba(96,165,250,0.3)');
    sg.addColorStop(1,  'rgba(0,0,0,0)');
    ctx.fillStyle = sg;
    ctx.beginPath();
    ctx.moveTo(0,-2); ctx.lineTo(size/2,0); ctx.lineTo(0,2);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }
  ctx.restore();
  return new THREE.CanvasTexture(c);
}

// ═══════════════════════════════════════════════════════════════════════════════
const DenveXIntro: React.FC<DenveXIntroProps> = ({ onComplete, onStartTransition }) => {
  const mountRef   = useRef<HTMLDivElement>(null);
  const isFading   = useRef(false);
  const onDoneRef  = useRef(onComplete);
  onDoneRef.current = onComplete;

  const onStartRef = useRef(onStartTransition);
  onStartRef.current = onStartTransition;

  // React-layer states
  const [progress,       setProgress]       = useState(0);
  const [showSkip,       setShowSkip]       = useState(false);
  const [showTitle,      setShowTitle]      = useState(false);
  const [showTagline,    setShowTagline]    = useState(false);
  const [showServices,   setShowServices]   = useState(false);
  const [showLightSweep, setShowLightSweep] = useState(false);
  const [fadeOut,        setFadeOut]        = useState(false);

  const finish = useCallback(() => {
    if (isFading.current) return;
    isFading.current = true;
    setFadeOut(true);
    if (onStartRef.current) onStartRef.current();
    setTimeout(() => onDoneRef.current(), 500);
  }, []);

  // ── Main Three.js setup ──────────────────────────────────────────────────────
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const startMs = performance.now();
    const elapsed = () => (performance.now() - startMs) / 1000;

    // ── Renderer ──────────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);
    // ── Scene ─────────────────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x010514);
    scene.fog = new THREE.FogExp2(0x010514, 0.032);

    // ── Camera ────────────────────────────────────────────────────────────────
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 9);

    // ── Lights ────────────────────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0x041a45, 1.4));

    const purpLight = new THREE.PointLight(0x0ea5e9, 5, 30);
    purpLight.position.set(-5, 4, 4);
    scene.add(purpLight);

    const blueLight = new THREE.PointLight(0x60a5fa, 4, 30);
    blueLight.position.set(5, -3, 4);
    scene.add(blueLight);

    const pinkLight = new THREE.PointLight(0x38bdf8, 2.5, 22);
    pinkLight.position.set(0, 3, -3);
    scene.add(pinkLight);

    // ── Background particle field (900 pts, multi-colour) ──────────────────────
    const BG_N = 900;
    const bgPos   = new Float32Array(BG_N * 3);
    const bgColor = new Float32Array(BG_N * 3);
    const bgPal   = [
      new THREE.Color(0x0ea5e9),
      new THREE.Color(0x38bdf8),
      new THREE.Color(0x60a5fa),
      new THREE.Color(0x0a2f6b),
      new THREE.Color(0xffffff),
    ];
    for(let i=0;i<BG_N;i++){
      bgPos[i*3]   = (Math.random()-0.5)*34;
      bgPos[i*3+1] = (Math.random()-0.5)*24;
      bgPos[i*3+2] = (Math.random()-0.5)*20 - 6;
      const c = bgPal[i%5];
      bgColor[i*3]=c.r; bgColor[i*3+1]=c.g; bgColor[i*3+2]=c.b;
    }
    const bgGeo = new THREE.BufferGeometry();
    bgGeo.setAttribute('position', new THREE.BufferAttribute(bgPos, 3));
    bgGeo.setAttribute('color',    new THREE.BufferAttribute(bgColor, 3));
    const bgMat = new THREE.PointsMaterial({
      size: 0.045, vertexColors: true,
      transparent: true, opacity: 0.8,
      blending: THREE.AdditiveBlending, depthWrite: false,
    });


    // ── ORB setup ─────────────────────────────────────────────────────────────
    const flareTex = makeFlareTex(256);
    const orbGlowTex = makeGlowTex(256, 56, 189, 248);
    const orbSmallTex = makeGlowTex(128, 186, 230, 253, 0.95);

    // Lens-flare sprite (large)
    const flareMat = new THREE.SpriteMaterial({
      map: flareTex, blending: THREE.AdditiveBlending,
      transparent: true, opacity: 0.95, depthWrite: false,
    });
    const flare = new THREE.Sprite(flareMat);
    flare.scale.set(3.5, 3.5, 1);
    scene.add(flare);

    // Outer glow sprite
    const orbGlowMat = new THREE.SpriteMaterial({
      map: orbGlowTex, blending: THREE.AdditiveBlending,
      transparent: true, opacity: 0.85, depthWrite: false,
    });
    const orbGlow = new THREE.Sprite(orbGlowMat);
    orbGlow.scale.set(2.2, 2.2, 1);
    scene.add(orbGlow);

    // Orb core (solid sphere)
    const orbGeo = new THREE.SphereGeometry(0.18, 24, 24);
    const orbMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 1,
      depthWrite: false,
    });
    const orbMesh = new THREE.Mesh(orbGeo, orbMat);
    scene.add(orbMesh);

    // Orb point light (moves with orb)
    const orbLight = new THREE.PointLight(0x0ea5e9, 6, 12);
    orbMesh.add(orbLight);

    // Trail sprites (60)
    const TRAIL = 60;
    const trailMats: THREE.SpriteMaterial[] = [];
    const trailSprites: THREE.Sprite[] = [];
    const trailHist: THREE.Vector3[] = Array.from({length:TRAIL},()=>new THREE.Vector3(-14,0,0));

    for (let i = 0; i < TRAIL; i++) {
      const tVal = (TRAIL - i) / TRAIL;
      const mat = new THREE.SpriteMaterial({
        map: orbSmallTex, blending: THREE.AdditiveBlending,
        transparent: true, opacity: tVal * 0.75, depthWrite: false,
      });
      const sp = new THREE.Sprite(mat);
      sp.scale.set(tVal * 1.6 + 0.1, tVal * 1.6 + 0.1, 1);
      sp.position.set(-14, 0, 0);
      scene.add(sp);
      trailMats.push(mat);
      trailSprites.push(sp);
    }

    const setOrbPos = (x:number,y:number,z:number) => {
      orbMesh.position.set(x,y,z);
      orbGlow.position.set(x,y,z);
      flare.position.set(x,y,z);
    };
    setOrbPos(-14,0,0);

    // ── LOGO mesh ─────────────────────────────────────────────────────────────
    const logoGeo = new THREE.PlaneGeometry(2.2, 2.2);
     const logoMat = new THREE.MeshBasicMaterial({
      transparent: true, opacity: 0,
      depthWrite: false,
      depthTest: false,
      blending: THREE.NormalBlending,
    });
    const logoMesh = new THREE.Mesh(logoGeo, logoMat);
    logoMesh.position.set(0, 0.5, -0.05);
    logoMesh.visible = false;
    scene.add(logoMesh);

    // Glow aura behind logo (subtle soft glow, no extra circles or double color rings)
    const auraGeo = new THREE.PlaneGeometry(4.2, 4.2);
    const auraTex = makeGlowTex(256, 56, 189, 248, 0.45);
    const auraMat = new THREE.MeshBasicMaterial({
      map: auraTex, transparent: true, opacity: 0,
      blending: THREE.AdditiveBlending, depthWrite: false,
    });
    const aura = new THREE.Mesh(auraGeo, auraMat);
    aura.position.z = -0.05;
    logoMesh.add(aura);

    // Load texture
    new THREE.TextureLoader().load('/relogo.png', tex => {
      tex.colorSpace = THREE.SRGBColorSpace;
      logoMat.map = tex;
      logoMat.needsUpdate = true;
    });

    // ── ANIMATION LOOP ────────────────────────────────────────────────────────
    let lastPhase = 0.0;
    let bounceCount = 0;
    let impactTime = -999.0;
    let rafId = 0;

    const tick = () => {
      rafId = requestAnimationFrame(tick);
      const t = elapsed();

      // ── Drift background particles ─────────────────────────────────────────
      const bp = bgGeo.attributes.position as THREE.BufferAttribute;
      for(let i=0;i<BG_N;i+=2){
        bp.setY(i, bp.getY(i) + 0.005);
        if(bp.getY(i)>12) bp.setY(i,-12);
      }
      bp.needsUpdate = true;

      // ── Animate scene lights ───────────────────────────────────────────────
      purpLight.position.x = Math.sin(t*0.38)*7;
      purpLight.position.y = Math.cos(t*0.27)*5;
      blueLight.position.x = Math.cos(t*0.33)*7;
      blueLight.position.y = Math.sin(t*0.22)*5;
      purpLight.intensity = 4 + Math.sin(t*1.4)*1.2;
      blueLight.intensity = 3 + Math.cos(t*1.1)*0.9;

      // ══════════════════════════════════════════════════════════════════════
      // SCENE 1 – CINEMATIC LIGHT ENTRY & PATH TRAJECTORY (0 – 2s)
      // ══════════════════════════════════════════════════════════════════════
      const orbAlive = t < T.s3 + 0.8;
      orbMesh.visible  = orbAlive;
      orbGlow.visible  = orbAlive;
      flare.visible    = orbAlive;
      trailSprites.forEach(s => s.visible = orbAlive);

      if (orbAlive) {
        let ox = 0.0;
        let oy = 0.5;
        let oz = 0.0;
        let orbFade = 1.0;

        if (t < T.s2) {
          // Phase 1: Curved Light Sweep following S-curve path to center (0, 0.5, 0)
          const isMobile = window.innerWidth < 768;
          const p = Math.min(t / T.s2, 1);
          const ease = p < 0.5 ? 2.0 * p * p : 1.0 - Math.pow(-2.0 * p + 2.0, 2) / 2.0;

          if (isMobile) {
            // Mobile-only custom bezier path: starts upper-left, sweeps down in a tight curve, and loops inward to center
            if (ease < 0.45) {
              const theta = (ease / 0.45) * Math.PI * 2.0;
              const radius = 0.55; // 45% smaller loop radius
              ox = -2.2 + Math.cos(theta + Math.PI / 2.0) * radius;
              oy = 1.4 + Math.sin(theta + Math.PI / 2.0) * radius;
              oz = 0.1 * Math.sin(theta);
            } else {
              const t2 = (ease - 0.45) / 0.55;
              const easedT2 = t2 * t2 * (3.0 - 2.0 * t2);
              ox = -2.2 + easedT2 * 2.2;
              oy = 1.4 - Math.sin(t2 * Math.PI) * 1.8 + easedT2 * (0.5 - 1.4);
              oz = 0.1 * Math.cos(t2 * Math.PI);
            }
          } else {
            // Desktop motion path
            if (ease < 0.45) {
              const theta = (ease / 0.45) * Math.PI * 2.0;
              const radius = 1.35;
              ox = -10.0 + Math.cos(theta + Math.PI / 2.0) * radius;
              oy = 2.0 + Math.sin(theta + Math.PI / 2.0) * radius;
              oz = 0.5 * Math.sin(theta);
            } else {
              const t2 = (ease - 0.45) / 0.55;
              const easedT2 = t2 * t2 * (3.0 - 2.0 * t2);
              ox = -10.0 + easedT2 * 10.0;
              oy = 2.0 - Math.sin(t2 * Math.PI) * 3.8 + easedT2 * (0.5 - 2.0);
              oz = 0.5 * Math.cos(t2 * Math.PI);
            }
          }
        } else if (t < T.s3) {
          // Phase 2: Energy Focus at the center (0, 0.5, 0) as a single glowing point
          ox = 0.0;
          oy = 0.5;
          oz = 0.0;
          const isMobile = window.innerWidth < 768;
          // Pulse the glow subtle-bloom
          const pulseFactor = 1.0 + 0.15 * Math.sin((t - T.s2) * Math.PI * 2.5);
          const flareBase = isMobile ? 1.75 : 3.5; // reduced by ~50%
          const glowBase = isMobile ? 1.1 : 2.2;  // reduced by 50%
          flare.scale.setScalar(flareBase * pulseFactor);
          orbGlow.scale.setScalar(glowBase * pulseFactor);
        } else {
          // Phase 3: Energy expansion and transition to logo (between 4s and 4.8s)
          ox = 0.0;
          oy = 0.5;
          oz = 0.0;
          const logoFadeP = Math.min((t - T.s3) / 0.8, 1.0);
          orbFade = Math.max(1.0 - logoFadeP, 0.0);
        }

        setOrbPos(ox, oy, oz);

        // Core orb scale reduction on mobile (40-50% smaller)
        const isMobile = window.innerWidth < 768;
        orbMesh.scale.setScalar(isMobile ? 0.55 : 1.0);

        flareMat.opacity   = orbFade * (0.85 + Math.sin(t*9)*0.12);
        orbGlowMat.opacity = orbFade * (0.75 + Math.sin(t*7)*0.12);
        orbMat.opacity     = orbFade;
        if (t < T.s2 || t >= T.s3) {
          const flareBase = isMobile ? 1.5 : 3.0; // reduced by 50%
          const glowBase = isMobile ? 1.0 : 2.0;  // reduced by 50%
          flare.scale.setScalar(flareBase + Math.sin(t*8)*0.35);
          orbGlow.scale.setScalar(glowBase + Math.sin(t*6)*0.2);
        }
        orbLight.intensity = (isMobile ? 2.5 : 5 + Math.sin(t*12)*2) * orbFade;

        // Trail history (shorter and cleaner on mobile to avoid covering screen)
        trailHist.unshift(new THREE.Vector3(ox, oy, oz));
        if (trailHist.length > TRAIL) trailHist.pop();
        trailSprites.forEach((sp, i) => {
          const pos = trailHist[i] ?? trailHist[0];
          sp.position.copy(pos);
          const f = (TRAIL - i) / TRAIL;
          
          // Shorter, cleaner trail on mobile
          const trailOpacityMultiplier = isMobile ? 0.35 : 0.75;
          trailMats[i].opacity = f * trailOpacityMultiplier * orbFade;
          
          // Narrower trail on mobile (reduced by 50%)
          const trailSizeMultiplier = isMobile ? 0.8 : 1.6;
          sp.scale.setScalar(f * trailSizeMultiplier + (isMobile ? 0.05 : 0.1));
        });
      }

      // ══════════════════════════════════════════════════════════════════════
      // SCENE 3 & 4 – LOGO MATERIALIZATION (4s – 6s)
      // ══════════════════════════════════════════════════════════════════════
      if (t >= T.s3) {
        logoMesh.visible = true;
        const logoFadeP = Math.min((t - T.s3) / 1.5, 1.0); // 1.5 seconds smooth transition fade
        const easedLogoFade = logoFadeP * logoFadeP * (3.0 - 2.0 * logoFadeP);

        logoMat.opacity = easedLogoFade;
        auraMat.opacity = easedLogoFade * 0.45;
      } else {
        logoMesh.visible = false;
        logoMat.opacity = 0;
        auraMat.opacity = 0;
      }

      if (t >= T.s4) {
        logoMesh.visible  = true;
        logoMat.opacity   = 1;

        // Pulsing aura brightness
        const pulse = 0.5 + 0.5*Math.sin(t*2.8);
        auraMat.opacity  = 0.3 + pulse * 0.15;
        // Color cycle
        const hue = 0.56 + Math.sin(t * 0.7) * 0.06;
        auraMat.color.setHSL(hue, 1, 0.6);

        // Gentle float + micro-wobble
        logoMesh.position.y  = 0.5 + Math.sin(t*0.9)*0.09;
        logoMesh.rotation.y  = Math.sin(t*0.45)*0.045;
        logoMesh.rotation.x  = Math.cos(t*0.35)*0.02;
      }

      // ── Camera smooth interpolation per scene ──────────────────────────────
      let tx=0, ty=0, tz=9;
      if(t < T.s2){
        // Loosely follow orb
        tx = orbMesh.position.x * 0.04;
        ty = orbMesh.position.y * 0.025;
        tz = 9;
      } else if(t < T.s3){
        tz = 8.5;
      } else if(t < T.s4){
        tz = 7.8;
      } else if(t < T.s5){
        // Dolly in toward logo
        const dp = (t - T.s4) / (T.s5 - T.s4);
        tz = 7.8 - dp * 2.2;
      } else {
        tz = 5.5;
      }

      camera.position.x += (tx - camera.position.x) * 0.045;
      camera.position.y += (ty - camera.position.y) * 0.045;
      camera.position.z += (tz - camera.position.z) * 0.028;
      // Subtle sway
      camera.position.x += Math.sin(t*0.22)*0.045;
      camera.position.y += Math.cos(t*0.17)*0.028;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    rafId = requestAnimationFrame(tick);

    // ── React-state sync (80 ms interval) ─────────────────────────────────────
    const syncId = setInterval(() => {
      if(isFading.current) return;
      const t = elapsed();
      setProgress(Math.min(t/T.total, 1));
      if(t >= 3)            setShowSkip(true);
      if(t >= T.s4)         setShowTitle(true);
      if(t >= T.s4 + 0.9)  setShowTagline(true);
      if(t >= T.s5 + 0.35) setShowServices(true);
      if(t >= T.s4 + 0.3)  setShowLightSweep(true);
      if(t >= T.end)        finish();
    }, 80);

    // ── Resize ────────────────────────────────────────────────────────────────
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      clearInterval(syncId);
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      if(mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, [finish]);

  // ═══════════════════════════════════════════════════════════════════════════
  // RENDER
  // ═══════════════════════════════════════════════════════════════════════════
  return (
    <AnimatePresence>
      <motion.div
        key="dx-cinematic"
        initial={{ opacity: 1 }}
        animate={{ opacity: fadeOut ? 0 : 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        style={{
          position: 'fixed', inset: 0, zIndex: 99999,
          overflow: 'hidden',
          fontFamily: "'Raleway', 'Inter', sans-serif",
          pointerEvents: fadeOut ? 'none' : 'auto',
          display: fadeOut ? 'none' : 'block',
        }}
      >
        {/* Three.js canvas mounts here */}
        <div ref={mountRef} style={{ position: 'absolute', inset: 0 }} />

        {/* ── Vignette overlay ── */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 20%, rgba(1,3,15,0.7) 65%, rgba(0,2,8,0.98) 100%)',
        }} />

        {/* ── Cinematic horizontal letterbox bars ── */}
        <div style={{ position:'absolute', top:0, left:0, right:0, height:'5vh', background:'rgba(0,2,8,0.95)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', bottom:0, left:0, right:0, height:'5vh', background:'rgba(0,2,8,0.95)', pointerEvents:'none' }} />

        {/* ══════════════════════════════════════════════════════════════
            SCENE 4 / 5  —  Text overlays (above Three.js canvas)
        ══════════════════════════════════════════════════════════════ */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          gap: '16px',
        }}>
          {/* Vertical spacer to sit typography perfectly centered below the 3D logo coordinates */}
          <div style={{ height: '23vh' }} />

          {/* Safe responsive content container */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            width: '100%',
            maxWidth: '650px',
            paddingLeft: '24px',
            paddingRight: '24px',
            boxSizing: 'border-box',
            textAlign: 'center',
          }}>
            {/* DenveX heading */}
            <AnimatePresence>
              {showTitle && (
                <motion.h1
                  initial={{ opacity: 0, y: 35, letterSpacing: '0.9em' }}
                  animate={{ opacity: 1, y: 0, letterSpacing: '0.45em' }}
                  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    color: '#ffffff',
                    fontSize: 'clamp(1.6rem, 7vw, 4.5rem)',
                    fontWeight: 700,
                    letterSpacing: '0.45em',
                    margin: 0,
                    position: 'relative',
                    textShadow: '0 0 16px rgba(56,189,248,0.45), 0 0 32px rgba(96,165,250,0.22)',
                    willChange: 'transform, opacity',
                    transform: 'translateZ(0)',
                  }}
                >
                  DenveX


                  {/* Cinematic light sweep */}
                  {showLightSweep && (
                    <motion.div
                      initial={{ x: '-150%', opacity: 0, skewX: '-12deg' }}
                      animate={{
                        x: ['-150%', '-80%', '80%', '150%'],
                        opacity: [0, 1, 1, 0]
                      }}
                      transition={{
                        duration: 2.2,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        repeatDelay: 2.0,
                      }}
                      style={{
                        position: 'absolute', inset: 0,
                        background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.4) 50%, rgba(135,206,250,0.25) 55%, transparent 68%)',
                        borderRadius: '4px',
                        overflow: 'hidden',
                        pointerEvents: 'none',
                      }}
                    />
                  )}

                </motion.h1>
              )}
            </AnimatePresence>

            {/* Tagline */}
            <AnimatePresence>
              {showTagline && (
                <motion.p
                  initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 1.1, ease: 'easeOut' }}
                  style={{
                    color: 'rgba(186,230,253,0.94)',
                    fontSize: 'clamp(0.65rem, 2vw, 0.95rem)',
                    fontWeight: 300,
                    letterSpacing: '0.32em',
                    textTransform: 'uppercase',
                    margin: 0,
                    textShadow: '0 0 16px rgba(14,165,233,0.45), 0 0 32px rgba(96,165,250,0.2)',
                    width: '100%',
                    lineHeight: '1.6',
                    textAlign: 'center',
                  }}
                >
                  Transforming Ideas Into Digital Reality
                </motion.p>
              )}
            </AnimatePresence>

            {/* Services line */}
            <AnimatePresence>
              {showServices && (
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0, ease: 'easeOut' }}
                  style={{
                    color: 'rgba(148,163,184,0.65)',
                    fontSize: 'clamp(0.5rem, 1.4vw, 0.72rem)',
                    fontWeight: 300,
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    margin: 0,
                    textShadow: '0 0 10px rgba(14,165,233,0.25)',
                    width: '100%',
                    lineHeight: '1.8',
                    textAlign: 'center',
                  }}
                >
                  Web Development &nbsp;•&nbsp; UI/UX Design &nbsp;•&nbsp; Digital Solutions
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ── Progress bar ── */}
        <div style={{
          position: 'absolute', bottom: '5.5vh',
          left: '50%', transform: 'translateX(-50%)',
          width: 'clamp(90px,16vw,150px)', height: '1.5px',
          background: 'rgba(255,255,255,0.06)',
          borderRadius: '2px', overflow: 'hidden',
        }}>
          <motion.div
            animate={{ width: `${progress*100}%` }}
            transition={{ duration: 0.08 }}
            style={{
              height: '100%',
              background: 'linear-gradient(90deg,#0ea5e9,#60a5fa,#38bdf8)',
              boxShadow: '0 0 10px rgba(14,165,233,1)',
              borderRadius: '2px',
            }}
          />
        </div>


        {/* Google Fonts */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;600;700&display=swap');
        `}</style>
      </motion.div>
    </AnimatePresence>
  );
};

export default DenveXIntro;
