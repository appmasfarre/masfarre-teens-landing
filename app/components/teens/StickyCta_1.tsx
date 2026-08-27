"use client";

import { useEffect, useState } from "react";
import { EVENT } from "./event-data";

// Solo se muestra una vez que el usuario scrolleó más allá de los botones
// del hero — así en mobile no aparecen dos "Inscribirme" pisándose apenas
// entrás a la página.
export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById("hero-cta");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { rootMargin: "0px 0px -10px 0px" }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`sticky-cta${visible ? " sticky-cta--visible" : ""}`}>
      <a href={EVENT.formHref} className="btn btn-primary">
        Inscribirme
      </a>
      <a href={EVENT.whatsappHref} className="btn btn-ghost">
        Consultas
      </a>
    </div>
  );
}
