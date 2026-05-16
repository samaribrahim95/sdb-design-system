import { ComponentShowcase } from "@/app/preview/component-showcase";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-xl font-semibold tracking-tight">Design System</h1>
            <p className="text-sm text-muted-foreground">Component Preview</p>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Main content */}
      <ComponentShowcase />
    </main>
  );
}
