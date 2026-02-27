import Link from 'next/link';
import { ChevronDown, Search } from 'lucide-react';
import Image from 'next/image';

const VakinhaLogo = () => (
    <Image
        src="https://scontent.fcpq17-1.fna.fbcdn.net/v/t39.30808-6/641646985_122111463681224584_1153405302911790187_n.jpg?stp=cp0_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_ohc=9X_Jk6A8Dw4Q7kNvwHrVrkF&_nc_oc=AdkltBDaRiPUOatFfhH_NcMJQype5yRd73kUm6INl6YL2WujpWG3RjHYTT3DUOhe9ObpDjwI-k4DDaenYDmChznz&_nc_zt=23&_nc_ht=scontent.fcpq17-1.fna&_nc_gid=tVTQD1h1ap5oSo8bVpzSCQ&oh=00_AfvCawtYP-GlZb6gR-0f68hB8Hnm6xTbDEBi6z2zcZq53g&oe=69A6E152"
        alt="Vakinha"
        width={40}
        height={40}
    />
)

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card">
      <div className="container flex h-20 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-3 font-bold text-3xl">
                <VakinhaLogo />
                <span className="text-primary">vakinha</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                <span className="flex items-center gap-1 text-muted-foreground">
                    Como ajudar <ChevronDown className="h-4 w-4" />
                </span>
                <span className="flex items-center gap-1 text-muted-foreground">
                    Descubra <ChevronDown className="h-4 w-4" />
                </span>
                <span className="flex items-center gap-1 text-muted-foreground">
                    Como funciona <ChevronDown className="h-4 w-4" />
                </span>
            </nav>
        </div>
        <div className="hidden md:flex items-center gap-4">
            <span className="flex items-center gap-2 text-sm font-medium text-primary">
                <Search className="h-4 w-4" />
                Buscar
            </span>
            <span className="text-sm font-medium text-muted-foreground">
                Minha conta
            </span>
            <span className="text-sm font-semibold text-primary-foreground bg-primary px-4 py-2 rounded-md">
              Fazer uma doação
            </span>
        </div>
      </div>
    </header>
  );
}
