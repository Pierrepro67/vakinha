import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Heart } from 'lucide-react';
import type { Campaign } from '@/lib/data';

function formatCurrency(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

export function FundraisingCard({ campaign }: { campaign: Campaign }) {
  const progress = (campaign.raised / campaign.goal) * 100;

  return (
    <Card className="sticky top-24 shadow-lg border-2 border-primary/10">
      <CardHeader>
        <div className="flex justify-between items-baseline">
          <span className="text-sm text-muted-foreground">Arrecadado</span>
          <span className="text-sm font-bold text-primary">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="w-full h-2 my-1" />
        <p className="text-3xl font-bold text-primary">{formatCurrency(campaign.raised)}</p>
        <p className="text-sm text-muted-foreground">
          Meta de {formatCurrency(campaign.goal)}
        </p>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex justify-around items-center text-center p-2 bg-secondary rounded-md">
          <div>
            <p className="font-bold text-xl">{campaign.supportersCount}</p>
            <p className="text-sm text-muted-foreground">Apoiadores</p>
          </div>
          <Separator orientation="vertical" className="h-10" />
           <div>
            <p className="font-bold text-xl">{campaign.daysLeft}</p>
            <p className="text-sm text-muted-foreground">Dias restantes</p>
          </div>
        </div>
        
        <Button size="lg" className="w-full font-bold text-lg py-7 transition-transform hover:scale-105">
          Quero Ajudar
        </Button>
        <Button variant="outline" size="lg" className="w-full gap-2 font-semibold">
          <Heart className="text-destructive fill-current h-5 w-5" />
          Apoiar com <span className="font-bold">R$25</span>
        </Button>
      </CardContent>
    </Card>
  );
}
