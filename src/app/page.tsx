'use client';

import Image from 'next/image';
import { campaignData, updatesData } from '@/lib/data';
import Header from '@/components/Header';
import { Card } from '@/components/ui/card';
import { FundraisingCard } from '@/components/campaign/FundraisingCard';
import { CampaignTabs } from '@/components/campaign/CampaignTabs';
import { CampaignInfo } from '@/components/campaign/CampaignInfo';
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
            
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="overflow-hidden shadow-md rounded-lg relative">
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
              </Card>

              <div className="space-y-4">
                <CampaignInfo campaign={campaignData} setActiveTab={setActiveTab} />
                <CampaignTabs 
                  campaign={campaignData} 
                  updates={updatesData} 
                  activeTab={activeTab} 
                  onTabChange={setActiveTab} 
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-1">
              <FundraisingCard campaign={campaignData} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
