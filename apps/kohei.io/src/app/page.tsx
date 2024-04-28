import Image from "next/image";
import { Card } from "@repo/ui/card";
import { Gradient } from "../../components/gradient";

const links = [
  {
    title: "Instagram",
    href: "https://www.instagram.com/kohei.io",
    description: "My latest shots.",
  }
];

function Page(): JSX.Element {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24">
      <div className="z-10 items-center justify-center w-full max-w-5xl font-mono text-sm lg:flex">
        <p className="fixed top-0 left-0 flex justify-center w-full px-4 pt-8 pb-6 border-b bg-gradient-to-b backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30">
          @kohei.io
        </p>
      </div>

      <div className="relative flex place-items-center ">
        <div className="font-sans w-auto py-16 flex justify-between gap-8 items-center flex-col relative z-0">
          <div className="z-50 flex items-center justify-center w-full">
            <div className="absolute min-w-[614px] min-h-[614px]">
              <Image
                alt="Turborepo"
                height={614}
                src="circles.svg"
                width={614}
              />
            </div>
            <div className="absolute z-50 flex items-center justify-center w-64 h-64">
              <Gradient
                className="opacity-90 w-[120px] h-[120px]"
                conic
                small
              />
            </div>

            <div className="z-50">
             <Image
                alt="Tony's Signature"
                height={132}
                src="/signature-dark@2x.png"
                width={282}
              />
            </div>
          </div>
          <Gradient
            className="top-[-350px] opacity-[0.15] w-[1000px] h-[1000px]"
            conic
          />
          <div className="z-50 flex flex-col items-center justify-center gap-5 px-6 text-center lg:gap-6">
            You&apos;ve made it this far. Follow me.
          </div>
        </div>
      </div>

      <div className="">
        {links.map(({ title, href, description }) => (
          <Card href={href} key={title} title={title}>
            {description}
          </Card>
        ))}
      </div>
    </main>
  );
}

export default Page