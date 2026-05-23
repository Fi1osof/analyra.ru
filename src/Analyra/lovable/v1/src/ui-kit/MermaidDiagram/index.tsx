import React, { useEffect, useRef, useState } from "react";
import { MermaidWrapperStyled, MermaidErrorStyled } from "./styles";
import type { MermaidDiagramProps } from "./types";

let mermaidInitialized = false;

export const MermaidDiagram: React.FC<MermaidDiagramProps> = ({ source, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const render = async () => {
      if (typeof window === "undefined") return;
      try {
        const mermaid = (await import("mermaid")).default;
        if (!mermaidInitialized) {
          mermaid.initialize({
            startOnLoad: false,
            securityLevel: "loose",
            theme: "base",
            themeVariables: {
              fontFamily: '"Inter", sans-serif',
              fontSize: "13px",
              primaryColor: "#FFFFFF",
              primaryTextColor: "#0A0A0A",
              primaryBorderColor: "#E4E4E7",
              lineColor: "#A1A1AA",
              secondaryColor: "#EEF0FF",
              tertiaryColor: "#FAFAFA",
              edgeLabelBackground: "#FFFFFF",
              clusterBkg: "#FAFAFA",
              clusterBorder: "#E4E4E7",
            },
            flowchart: {
              curve: "basis",
              padding: 16,
              nodeSpacing: 40,
              rankSpacing: 50,
            },
          });
          mermaidInitialized = true;
        }

        const id = `mermaid-${Math.random().toString(36).slice(2, 10)}`;
        const { svg } = await mermaid.render(id, source);
        if (!cancelled && containerRef.current) {
          containerRef.current.innerHTML = svg;
          setError(null);
        }
      } catch (e) {
        if (!cancelled) setError(String(e));
      }
    };

    render();
    return () => {
      cancelled = true;
    };
  }, [source]);

  return (
    <MermaidWrapperStyled className={className}>
      {error ? <MermaidErrorStyled>{error}</MermaidErrorStyled> : <div ref={containerRef} />}
    </MermaidWrapperStyled>
  );
};
