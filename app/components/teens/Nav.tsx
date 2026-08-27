import Image from "next/image";
import { EVENT } from "./event-data";

export function Nav() {
  return (
    <nav className="sticky top-0 z-40 backdrop-blur-md bg-black/[.78] border-b border-line">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
        <Image
          src="/images/logo-white.png"
          alt="Masfarré Teens"
          width={900}
          height={90}
          className="h-5 w-auto"
          priority
        />
        <a
          href={EVENT.formHref}
          className="text-[13px] font-bold px-[18px] py-[9px] rounded border border-line whitespace-nowrap"
        >
          Inscribirme
        </a>
      </div>
    </nav>
  );
}
