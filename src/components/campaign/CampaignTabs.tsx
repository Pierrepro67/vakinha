import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { Campaign, Update, Supporter } from '@/lib/data';

function formatCurrency(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

export function CampaignTabs({
  campaign,
  updates,
  supporters,
}: {
  campaign: Pick<Campaign, 'description'>;
  updates: Update[];
  supporters: Supporter[];
}) {
  return (
    <Tabs defaultValue="about" className="w-full">
      <TabsList className="grid w-full grid-cols-3 mb-4 bg-secondary">
        <TabsTrigger value="about">Sobre</TabsTrigger>
        <TabsTrigger value="updates">Atualizações</TabsTrigger>
        <TabsTrigger value="supporters">Apoiadores ({supporters.length})</TabsTrigger>
      </TabsList>
      <TabsContent value="about">
        <Card>
          <CardContent className="p-6 text-base leading-relaxed">
            <p className="whitespace-pre-wrap">{campaign.description}</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="updates">
        <Card>
          <CardContent className="p-6 space-y-6">
            {updates.length > 0 ? (
              updates.map((update, index) => (
                <div key={index} className="flex flex-col gap-1">
                  <p className="font-semibold text-sm">{update.date}</p>
                  <p className="text-muted-foreground">{update.content}</p>
                </div>
              ))
            ) : (
              <p className="text-muted-foreground text-center">Nenhuma atualização ainda.</p>
            )}
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="supporters">
        <Card>
          <CardContent className="p-6 space-y-4">
            {supporters.length > 0 ? (
              supporters.map((supporter, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      {supporter.avatar && <AvatarImage src={supporter.avatar.imageUrl} alt={supporter.name} />}
                      <AvatarFallback>{supporter.name === 'Doador Anônimo' ? 'A' : supporter.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{supporter.name}</p>
                      <p className="text-sm text-muted-foreground">{supporter.time}</p>
                    </div>
                  </div>
                  <p className="font-semibold">{formatCurrency(supporter.amount)}</p>
                </div>
              ))
            ) : (
              <p className="text-muted-foreground text-center">Seja o primeiro a apoiar!</p>
            )}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
