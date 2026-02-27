import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BotMessageSquare } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="font-bold text-lg text-primary">
          FundAid
        </Link>
        <nav className="flex items-center gap-4">
          <Button asChild>
            <Link href="/create">
              <BotMessageSquare className="mr-2 h-4 w-4" />
              Criar com IA
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
