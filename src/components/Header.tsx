import Link from 'next/link';
import { ChevronDown, Search } from 'lucide-react';

const VakinhaLogo = () => (
    <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
    >
        <circle cx="16" cy="16" r="16" fill="currentColor" />
        <path
            d="M9 16L14 21L23 12"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
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
            <Link href="/create" className="text-sm font-semibold text-primary-foreground bg-primary px-4 py-2 rounded-md hover:bg-primary/90">
              Faz uma vaquinha!
            </Link>
        </div>
      </div>
    </header>
  );
}
