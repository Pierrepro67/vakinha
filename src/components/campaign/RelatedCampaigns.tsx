'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import type { RelatedCampaign } from '@/lib/data';
import { CampaignCard } from './CampaignCard';

export function RelatedCampaigns({ campaigns }: { campaigns: RelatedCampaign[] }) {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-center mb-8">Outras histórias também precisam de você!</h2>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {campaigns.map((campaign, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <CampaignCard campaign={campaign} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex -left-4" />
        <CarouselNext className="hidden sm:flex -right-4" />
      </Carousel>
    </section>
  );
}
