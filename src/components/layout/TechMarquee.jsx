import { TECH_STACK } from "../../data/content";

function StackItems({ hidden = false }) {
  return (
    <ul className="tech-marquee-set" aria-hidden={hidden || undefined}>
      {TECH_STACK.map((item) => (
        <li className="tech-marquee-item" key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function TechMarquee() {
  return (
    <div className="tech-marquee" role="region" aria-label="Technologies used">
      <div className="tech-marquee-track">
        <StackItems />
        <StackItems hidden />
      </div>
    </div>
  );
}
