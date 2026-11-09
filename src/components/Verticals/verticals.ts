import { HandCoins, Landmark, SolarPanel, Sprout, type LucideIcon } from "lucide-react";

export type VerticalKey = "privateCredit" | "ventureCapital" | "fixedIncome" | "projectFinance";

export const VERTICALS: { key: VerticalKey; icon: LucideIcon; slug: string }[] = [
  { key: "privateCredit", icon: HandCoins, slug: "private-credit" },
  { key: "ventureCapital", icon: Sprout, slug: "venture-capital" },
  { key: "fixedIncome", icon: Landmark, slug: "fixed-income" },
  { key: "projectFinance", icon: SolarPanel, slug: "project-finance" },
];
