import { AnimatedRoutes } from "./Animations";

export default function Navbar({ classname }: { classname?: string }) {
  return (
    <nav aria-label="Main navigation">
      <AnimatedRoutes className={classname} />
    </nav>
  );
}
