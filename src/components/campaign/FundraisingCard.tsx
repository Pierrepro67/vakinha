import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import type { Campaign } from '@/lib/data';
import { Progress } from '@/components/ui/progress';

function formatCurrency(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

export function FundraisingCard({ campaign }: { campaign: Campaign }) {

  return (
    <Card className="sticky top-24 shadow-lg">
      <CardHeader className="p-6">
        <Progress value={(campaign.raised / campaign.goal) * 100} className="h-2 mb-4" />
        <span className="text-sm text-muted-foreground">Arrecadado</span>
        <p className="text-4xl font-bold text-primary">{formatCurrency(campaign.raised)}</p>
        <p className="text-sm text-muted-foreground">
          de {formatCurrency(campaign.goal)}
        </p>
      </CardHeader>
      <CardContent className="p-6 pt-0 flex flex-col gap-4">
        <div className="bg-secondary p-4 rounded-lg text-secondary-foreground">
            <div className="flex justify-between items-center text-sm mb-2">
                <div className="flex items-center gap-2">
                    <span>Corações Recebidos</span>
                    <Heart className="h-4 w-4 text-primary" fill="currentColor" />
                </div>
                <span className="font-bold">{campaign.heartsReceived.toLocaleString('pt-BR')}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
                <span>Apoiadores</span>
                <span className="font-bold">{campaign.supportersCount.toLocaleString('pt-BR')}</span>
            </div>
        </div>
        
        <Button size="lg" className="w-full font-bold text-lg h-14">
          Quero Ajudar
        </Button>
        <Button variant="outline" size="lg" className="w-full font-semibold h-12">
          Compartilhar
        </Button>
      </CardContent>
    </Card>
  );
}
