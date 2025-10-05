import Button from "./Button";

export function DefaultCard({
  title,
  description,
  button,
}: {
  title: string;
  description: string;
  button: string;
}) {
  return (
    <div className="flex flex-col items-center h-96 w-80 bg-[var(--white-base)] border-base pt-7 pb-6 px-7">
      <h3 className="accent-font text-[var(--yellow-base)] text-4xl">
        {title}
      </h3>
      <p className="text-[var(--green-base)] pt-1.5 pb-2 leading-6">
        {description}
      </p>
      <Button className="bg-[var(--blue-base)] text-[var(--white-base)] mt-auto mx-auto">
        {button}
      </Button>
    </div>
  );
}
