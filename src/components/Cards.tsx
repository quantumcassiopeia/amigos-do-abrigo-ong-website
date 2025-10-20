import Button from "./Button";
import Paw from "../../public/icons/paw.svg";
import Bone from "../../public/icons/bone.svg";

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

export function CardList({ description }: { description: string }) {
  return (
    <div className="flex flex-col max-w-52 items-center justify-left p-5 text-[var(--white-base)] bg-[var(--blue-base)] border-base shadow-2xl md:flex-row md:max-w-xl">
      <Paw className="w-9 h-9 md:mr-5 shrink-0" />
      <p className="font-bold text-[var(--yellow-base)]">{description} </p>
    </div>
  );
}
export function DonatingPlanCard({
  price,
  enrollmentPeriod,
}: {
  price: string;
  enrollmentPeriod: string;
}) {
  return (
    <div className="flex flex-col items-center w-[14rem] h-72 py-6 px-3 bg-[var(--yellow-base)] border-base  text-[var(--white-base)]">
      <Bone className="w-9 h-9 shrink-0" />
      <h3 className="py-3">
        <span className="accent-font text-4xl">R$ {price}/</span> mês
      </h3>
      <p>
        Seja um padrinho por{" "}
        <span className="accent-font">{enrollmentPeriod}</span>
      </p>
      <Button className="bg-[var(--blue-base)] text-[var(--white-base)] mt-auto">
        Apadrinhar
      </Button>
    </div>
  );
}
