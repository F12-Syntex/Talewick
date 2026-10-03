import { TitleBar } from "./title-bar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-dvh flex-col overflow-hidden">
      <TitleBar />
      <main className="relative min-h-0 flex-1 overflow-auto">{children}</main>
    </div>
  );
}
