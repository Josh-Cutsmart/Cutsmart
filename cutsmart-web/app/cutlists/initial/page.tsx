"use client";

import { AppShell } from "@/components/app-shell";
import { ProtectedRoute } from "@/components/protected-route";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getProjectCutlists } from "@/lib/data";
import { mockProjects } from "@/lib/mock-data";

export default function InitialCutlistPage() {
  const project = mockProjects[0];
  const cutlist = getProjectCutlists(project.id).find((item) => item.type === "initial");

  return (
    <ProtectedRoute>
      <AppShell>
        <div className="space-y-5">
          <div className="flex items-center justify-between gap-3">
            <h1 className="text-2xl font-semibold">Initial Cutlist</h1>
            <Badge variant="warning">Early estimate mode</Badge>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-slate-600">
                Revision {cutlist?.revision ?? "-"} generated {cutlist?.generatedAt ?? "-"}
              </p>
              <div className="overflow-auto">
                <table className="w-full min-w-[680px] text-sm">
                  <thead className="text-left text-xs uppercase tracking-wide text-slate-500">
                    <tr>
                      <th className="pb-3">Part</th>
                      <th className="pb-3">Material</th>
                      <th className="pb-3">Qty</th>
                      <th className="pb-3">L</th>
                      <th className="pb-3">W</th>
                      <th className="pb-3">Edge</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cutlist?.parts.map((part) => (
                      <tr key={part.id} className="border-t border-slate-100">
                        <td className="py-3">{part.label}</td>
                        <td className="py-3">{part.material}</td>
                        <td className="py-3">{part.qty}</td>
                        <td className="py-3">{part.length}</td>
                        <td className="py-3">{part.width}</td>
                        <td className="py-3">{part.edgeBanding ? "Yes" : "No"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </AppShell>
    </ProtectedRoute>
  );
}
