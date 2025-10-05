import { AnimatedRoutes } from "./Animations";

export default function Navbar({
  className,
  lineColor,
}: {
  className?: string;
  lineColor: string;
}) {
  return (
    <nav aria-label="Main navigation" className={`${className} accent-font`}>
      <AnimatedRoutes className={className} lineColor={lineColor} />
    </nav>
  );
}
