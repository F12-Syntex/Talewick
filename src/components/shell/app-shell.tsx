import { AppSidebar } from "./app-sidebar";
import { TitleBar } from "./title-bar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-background text-fg">
      <TitleBar />
      <div className="flex min-h-0 flex-1">
        <AppSidebar />
        <main className="relative min-w-0 flex-1 overflow-hidden">{children}</main>
      </div>
    </div>
  );
}
