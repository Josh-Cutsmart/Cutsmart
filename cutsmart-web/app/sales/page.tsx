"use client";

import { AppShell } from "@/components/app-shell";
import { ProtectedRoute } from "@/components/protected-route";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockProjects, mockQuotes } from "@/lib/mock-data";

export default function SalesPage() {
  return (
    <ProtectedRoute>
      <AppShell>
        <div className="space-y-5">
          <h1 className="text-2xl font-semibold">Sales</h1>
          <Card>
            <CardHeader>
              <CardTitle>Pipeline</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {mockQuotes.map((quote) => {
                const project = mockProjects.find((p) => p.id === quote.projectId);
                return (
                  <div key={quote.id} className="rounded-md border border-slate-200 p-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="font-medium text-slate-900">{project?.name ?? quote.projectId}</p>
                      <Badge variant={quote.stage === "won" ? "success" : quote.stage === "lost" ? "danger" : "warning"}>
                        {quote.stage}
                      </Badge>
                    </div>
                    <p className="mt-1 text-sm text-slate-600">
                      Value: {quote.currency} {quote.value.toLocaleString()} | Updated: {quote.updatedAt}
                    </p>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </AppShell>
    </ProtectedRoute>
  );
}
