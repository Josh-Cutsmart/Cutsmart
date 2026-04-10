import type { UserRole } from "@/lib/types";

const editMatrix: Record<string, UserRole[]> = {
  dashboard: ["owner", "admin", "sales", "production", "viewer"],
  sales: ["owner", "admin", "sales"],
  initialCutlist: ["owner", "admin", "sales", "production"],
  productionCutlist: ["owner", "admin", "production"],
  projectSettings: ["owner", "admin"],
};

export function canAccess(feature: keyof typeof editMatrix, role: UserRole) {
  return editMatrix[feature].includes(role);
}
