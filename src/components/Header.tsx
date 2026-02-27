import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronDown, Search } from 'lucide-react';
import Image from 'next/image';

const VakinhaLogo = () => (
    <Image
        src="https://scontent.fcpq17-1.fna.fbcdn.net/v/t39.30808-6/642413935_122111462721224584_56991097251531606_n.jpg?stp=cp0_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_ohc=Sn8CJ0QUYowQ7kNvwE0orc8&_nc_oc=AdnCJ8QtnMI3UrgDwrnrE0PlyYM7NMeHccdU5hJHuINJboUcwvuvWzoVJFVY78rg_bUpmS4Di0MqXso1cInlJT4U&_nc_zt=23&_nc_ht=scontent.fcpq17-1.fna&_nc_gid=KKGO7rD7LumddEVZMYt8rQ&oh=00_AfuYskEm6MHgIMHkXemuAeUuzbH5FanqPyw7dOIjAZHMjQ&oe=69A6E526"
        alt="Vakinha Logo"
        width={32}
        height={32}
        className="rounded-full"
    />
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
