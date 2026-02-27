import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronDown, Search } from 'lucide-react';
import Image from 'next/image';

const VakinhaLogo = () => (
    <svg
        width="32"
        height="32"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
    >
        <path d="M42 4H6C4.89543 4 4 4.89543 4 6V34C4 35.1046 4.89543 36 6 36H14V44L24.6667 36H42C43.1046 36 44 35.1046 44 34V6C44 4.89543 43.1046 4 42 4Z" fill="currentColor"/>
        <line x1="24" y1="16" x2="16" y2="26" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="24" y1="16" x2="32" y2="26" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="24" cy="16" r="4" fill="white" />
        <circle cx="16" cy="26" r="4" fill="white" />
        <circle cx="32" cy="26" r="4" fill="white" />
    </svg>
)

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card">
      <div className="container flex h-20 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2 font-bold text-2xl">
                <VakinhaLogo />
                <span className="text-primary">vakinha</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                <Link href="#" className="flex items-center gap-1 text-muted-foreground hover:text-foreground">
                    Como ajudar <ChevronDown className="h-4 w-4" />
                </Link>
                <Link href="#" className="flex items-center gap-1 text-muted-foreground hover:text-foreground">
                    Descubra <ChevronDown className="h-4 w-4" />
                </Link>
                <Link href="#" className="flex items-center gap-1 text-muted-foreground hover:text-foreground">
                    Como funciona <ChevronDown className="h-4 w-4" />
                </Link>
            </nav>
        </div>
        <div className="hidden md:flex items-center gap-4">
            <Link href="#" className="flex items-center gap-2 text-sm font-medium text-primary">
                <Search className="h-4 w-4" />
                Buscar
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Minha conta
            </Link>
            <Button>
                Faz uma vaquinha!
            </Button>
        </div>
      </div>
    </header>
  );
}
