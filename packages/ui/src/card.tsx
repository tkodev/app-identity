import { type ReactNode } from "react";

export function Card({
  title,
  children,
  href,
}: {
  title: string;
  children: ReactNode;
  href: string;
}): JSX.Element {
  return (
    <a
      className="flex flex-col ui-rounded-lg ui-border ui-border-transparent ui-px-5 ui-py-4 ui-transition-colors ui-border-neutral-700 hover:ui-bg-neutral-800/30"
      href={`${href}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <h2 className="ui-mb-3 ui-text-2xl ui-font-semibold text-center">
        {title}{" "}
        <span className="ui-inline-block">
          -&gt;
        </span>
      </h2>
      <p className="ui-m-0 ui-max-w-[30ch] ui-text-sm ui-opacity-50 text-center">
        {children}
      </p>
    </a>
  );
}
