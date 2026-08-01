"use client";

import { useState } from "react";
import { ProcedimentoAncora } from "@/data/procedimentos";
import ProcedimentoCard from "./ProcedimentoCard";

interface ProcedimentosGridProps {
  procedimentos: ProcedimentoAncora[];
}

export default function ProcedimentosGrid({ procedimentos }: ProcedimentosGridProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
      {procedimentos.map((procedimento) => (
        <ProcedimentoCard
          key={procedimento.numero}
          procedimento={procedimento}
          isExpanded={expandedId === procedimento.numero}
          onToggle={() => toggleExpand(procedimento.numero)}
        />
      ))}
    </div>
  );
}
