import Image from 'next/image';
import { campaignData } from '@/lib/data';
import Header from '@/components/Header';
import { Card } from '@/components/ui/card';
import { FundraisingCard } from '@/components/campaign/FundraisingCard';
import { Heart } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
            
            {/* Left Column */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden mb-8 shadow-md rounded-lg relative">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={campaignData.mainImage.imageUrl}
                    alt={campaignData.mainImage.description}
                    fill
                    priority
                    className="object-cover"
                    data-ai-hint={campaignData.mainImage.imageHint}
                    sizes="(max-width: 1024px) 100vw, 67vw"
                  />
                </div>
                <button className="absolute top-4 right-4 bg-card/80 backdrop-blur-sm rounded-full p-2.5 hover:bg-card transition-colors">
                    <Heart className="h-6 w-6 text-foreground" />
                </button>
              </Card>

              <div className="space-y-4">
                <p className="text-sm font-semibold text-muted-foreground tracking-wider">{campaignData.category}</p>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                  {campaignData.title}
                </h1>
                <p className="text-muted-foreground font-medium">
                  ID: {campaignData.id}
                </p>
                <p className="text-base leading-relaxed text-foreground/80">
                  {campaignData.description}
                </p>
              </div>

            </div>

            {/* Right Column */}
            <div className="lg:col-span-1 mt-8 lg:mt-0">
              <FundraisingCard campaign={campaignData} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
