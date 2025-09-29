import { AnimatedRoutes } from "./Animations";

export default function Navbar({
  className,
  lineColor,
  hoverColor,
}: {
  className?: string;
  lineColor: string;
  hoverColor: string;
}) {
  return (
    <nav aria-label="Main navigation" className="accent-font">
      <AnimatedRoutes
        className={className}
        lineColor={lineColor}
        hoverColor={hoverColor}
      />
    </nav>
  );
}
