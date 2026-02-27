import Image from 'next/image';
import type { RelatedCampaign } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

function formatCurrency(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

export const CampaignCard = ({ campaign }: { campaign: RelatedCampaign }) => (
  <Card className="overflow-hidden h-full flex flex-col group hover:shadow-xl transition-shadow duration-300">
    <div className="relative h-40 w-full">
      <Image
        src={campaign.image.imageUrl}
        alt={campaign.image.description}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        data-ai-hint={campaign.image.imageHint}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
    <CardContent className="p-4 flex flex-col flex-grow">
      <h3 className="font-semibold mb-2 truncate flex-grow">{campaign.title}</h3>
      <Progress value={(campaign.raised / campaign.goal) * 100} className="mb-2 h-2" />
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>{formatCurrency(campaign.raised)}</span>
        <span className="font-semibold text-foreground">{Math.round((campaign.raised / campaign.goal) * 100)}%</span>
      </div>
    </CardContent>
  </Card>
);
