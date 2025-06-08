import Link from "next/link";
import { Button } from "../components/ui/button";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[70vh] py-12">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Seite nicht gefunden</h2>
      <p className="text-muted-foreground max-w-md text-center mb-8">
        Die von Ihnen gesuchte Seite existiert nicht oder wurde verschoben.
      </p>
      <Button asChild>
        <Link href="/">Zurück zur Startseite</Link>
      </Button>
    </div>
  );
}