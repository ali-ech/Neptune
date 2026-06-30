export default function AnimatedWave() {
  return (
    <svg className="animated-wave" viewBox="0 0 1440 48" preserveAspectRatio="none" aria-hidden>
      <g className="wave-layer wave-layer-1">
        <path fill="none" stroke="#0077B6" strokeWidth="2" opacity="0.5" d="M0,24 C240,8 480,40 720,24 C960,8 1200,40 1440,24" />
      </g>
      <g className="wave-layer wave-layer-2">
        <path fill="none" stroke="#0077B6" strokeWidth="1.5" opacity="0.35" d="M0,28 C360,12 720,44 1080,28 C1260,20 1380,32 1440,28" />
      </g>
      <g className="wave-layer wave-layer-3">
        <path fill="none" stroke="#0077B6" strokeWidth="1" opacity="0.25" d="M0,32 C180,16 540,48 900,32 C1170,20 1350,40 1440,32" />
      </g>
    </svg>
  );
}
