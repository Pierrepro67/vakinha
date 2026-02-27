import Image from 'next/image';
import {
  campaignData,
  updatesData,
  supportersData,
  faqData,
  relatedCampaignsData,
} from '@/lib/data';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { FundraisingCard } from '@/components/campaign/FundraisingCard';
import { CampaignTabs } from '@/components/campaign/CampaignTabs';
import { FaqSection } from '@/components/campaign/FaqSection';
import { RelatedCampaigns } from '@/components/campaign/RelatedCampaigns';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto max-w-7xl py-8 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
            
            {/* Left Column */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
                  {campaignData.title}
                </h1>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>ID: {campaignData.id}</span>
                  <Button variant="outline" size="sm" className="gap-2 rounded-full">
                    <Share2 className="h-4 w-4" />
                    Compartilhar
                  </Button>
                </div>
              </div>

              <Card className="overflow-hidden mb-8 shadow-md rounded-lg">
                <div className="relative aspect-video">
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
              </Card>

              <CampaignTabs 
                campaign={campaignData}
                updates={updatesData}
                supporters={supportersData}
              />
            </div>

            {/* Right Column */}
            <div className="lg:col-span-1 mt-8 lg:mt-0">
              <FundraisingCard campaign={campaignData} />
            </div>
          </div>
          
          <FaqSection faqs={faqData} />
          <RelatedCampaigns campaigns={relatedCampaignsData} />
        </div>
      </main>
    </div>
  );
}
