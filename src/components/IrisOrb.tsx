type Props = {
  /** Target ring diameter in px. The orb's glow extends beyond this. */
  size?: number;
  className?: string;
};

const RING_BASE = 220; // outer ring diameter in the base design
const STAGE = 300; // base stage size (holds the ring + glow)

export default function IrisOrb({ size = 150, className }: Props) {
  const scale = size / RING_BASE;
  const stageVisual = STAGE * scale;

  return (
    <div
      className={`iris-orb-wrap${className ? ` ${className}` : ""}`}
      style={{ width: stageVisual, height: stageVisual }}
      aria-hidden="true"
    >
      <div className="iris-orb" style={{ transform: `scale(${scale})` }}>
        <div className="iris-bloom" />
        <div className="iris-ring iris-r2" />
        <div className="iris-ring iris-r1" />
        <div className="iris-r2-shine" />
        <div className="iris-r1-shine" />
        <div className="iris-core" />
      </div>
    </div>
  );
}
