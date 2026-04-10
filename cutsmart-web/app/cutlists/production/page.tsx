"use client";

import { AppShell } from "@/components/app-shell";
import { ProtectedRoute } from "@/components/protected-route";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/lib/auth-context";
import { getProjectCutlists } from "@/lib/data";
import { canAccess } from "@/lib/permissions";

export default function ProductionCutlistPage() {
  const { user } = useAuth();
  const production = getProjectCutlists("prj_1001").find((item) => item.type === "production");

  const allowed = user ? canAccess("productionCutlist", user.role) : false;

  return (
    <ProtectedRoute>
      <AppShell>
        <div className="space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h1 className="text-2xl font-semibold">Production Cutlist</h1>
            <Badge variant="info">Complex workflow</Badge>
          </div>

          {!allowed ? (
            <Card>
              <CardContent className="pt-5 text-sm text-rose-700">
                You do not have permission to edit production cutlists with your current role.
              </CardContent>
            </Card>
          ) : (
            <>
              <Card>
                <CardHeader>
                  <CardTitle>Current revision</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-slate-700">
                  <p>Revision: {production?.revision ?? "-"}</p>
                  <p>Generated: {production?.generatedAt ?? "-"}</p>
                  <p>Total parts: {production?.parts.length ?? 0}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Build queue</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-slate-700">
                  <p>Step 1: Validate part dimensions against machine constraints.</p>
                  <p>Step 2: Confirm material availability in inventory.</p>
                  <p>Step 3: Lock revision and publish to production floor tablets.</p>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </AppShell>
    </ProtectedRoute>
  );
}
