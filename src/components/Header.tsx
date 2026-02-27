import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronDown, Search } from 'lucide-react';

const VakinhaLogo = () => (
    <svg width="32" height="32" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
        <path d="M160 208H240C240 158.504 209.752 115.152 166.448 93.552L128 72L89.552 93.552C46.248 115.152 16 158.504 16 208H96" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M104 48L128 72L152 48" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card">
      <div className="container flex h-20 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2 font-bold text-2xl">
                <VakinhaLogo />
                <span className="text-foreground">vakinha</span>
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
