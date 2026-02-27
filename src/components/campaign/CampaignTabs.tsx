'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { Campaign, Update, Supporter } from '@/lib/data';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Clipboard } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import React from 'react';

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
  const { toast } = useToast();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: 'Copiado!',
        description: 'A chave PIX foi copiada para a área de transferência.',
      });
    });
  };

  return (
    <Tabs defaultValue="about" className="w-full">
      <TabsList className="flex flex-wrap -mb-px bg-transparent p-0">
        <TabsTrigger
          value="about"
          className="flex-1 whitespace-nowrap data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-primary rounded-none pb-3 bg-transparent text-muted-foreground data-[state=active]:text-primary font-medium"
        >
          Sobre
        </TabsTrigger>
        <TabsTrigger
          value="updates"
          className="flex-1 whitespace-nowrap data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-primary rounded-none pb-3 bg-transparent text-muted-foreground data-[state=active]:text-primary font-medium"
        >
          Atualizações
        </TabsTrigger>
        <TabsTrigger
          value="supporters"
          className="flex-1 whitespace-nowrap data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-primary rounded-none pb-3 bg-transparent text-muted-foreground data-[state=active]:text-primary font-medium"
        >
          Quem ajudou
        </TabsTrigger>
        <TabsTrigger
          value="awards"
          className="flex-1 whitespace-nowrap data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-primary rounded-none pb-3 bg-transparent text-muted-foreground data-[state=active]:text-primary font-medium"
        >
          Vakinha Premiada
        </TabsTrigger>
        <TabsTrigger
          value="badges"
          className="flex-1 whitespace-nowrap data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-primary rounded-none pb-3 bg-transparent text-muted-foreground data-[state=active]:text-primary font-medium"
        >
          Selos recebidos
        </TabsTrigger>
      </TabsList>
      <Separator className="mb-6"/>
      <TabsContent value="about" className="mt-0">
        <div className="space-y-6 text-sm md:text-base">
          <div className="bg-muted/50 p-4 rounded-lg flex justify-between items-center text-muted-foreground">
            <p>
              Você pode ajudar via Pix usando a chave:{' '}
              <span className="font-semibold text-foreground break-all">5971177@vakinha.com.br</span>
            </p>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 flex-shrink-0"
              onClick={() => copyToClipboard('5971177@vakinha.com.br')}
            >
              <Clipboard className="h-5 w-5" />
            </Button>
          </div>
          <Separator />
          <div className="space-y-4">
            <p className="text-muted-foreground">Vaquinha criada em: 26/02/2026</p>
            <p className="whitespace-pre-wrap text-foreground leading-relaxed">{campaign.description}</p>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="updates">
        <Card>
          <CardContent className="p-0">
            {updates.length > 0 ? (
              <div>
                {updates.map((update, index) => (
                  <div key={index} className="p-6 border-b last:border-b-0">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>{update.authorInitials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{update.title}</p>
                        <p className="text-sm text-muted-foreground">{update.time}</p>
                      </div>
                    </div>
                    <p className="text-foreground mt-4">{update.content}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="p-6 text-muted-foreground text-center">Nenhuma atualização ainda.</p>
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
                      <AvatarFallback>
                        {supporter.name === 'Doador Anônimo' ? 'A' : supporter.name.charAt(0)}
                      </AvatarFallback>
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
      <TabsContent value="awards">
        <Card>
          <CardContent className="p-6">
            <p className="text-muted-foreground text-center">Nenhuma informação sobre Vakinha Premiada.</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="badges">
        <Card>
          <CardContent className="p-6">
            <p className="text-muted-foreground text-center">Nenhum selo recebido ainda.</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
