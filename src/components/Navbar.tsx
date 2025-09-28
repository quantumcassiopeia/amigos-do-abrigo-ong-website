import { AnimatedRoutes } from "./Animations";

export default function Navbar({ className }: { className?: string }) {
  return (
    <nav aria-label="Main navigation">
      <AnimatedRoutes className={className} />
    </nav>
  );
}
