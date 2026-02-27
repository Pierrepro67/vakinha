'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import type { Campaign, Update } from '@/lib/data';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Award, Clipboard, HandCoins, Heart, HeartHandshake, Star, Trophy, Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import React from 'react';
import Link from 'next/link';

function formatCurrency(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

const TagHeartIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.25 2.75H8C5.79086 2.75 4 4.54086 4 6.75V10.5134C4 11.4373 4.40615 12.3089 5.10107 12.8989L12.0251 18.042C13.2104 18.9744 14.7896 18.9744 15.9749 18.042L18.899 15.8294C19.5395 15.3435 20 14.5678 20 13.7866V6.75C20 4.54086 18.2091 2.75 16 2.75H13.75" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 11.5C14.8284 11.5 15.5 10.8284 15.5 10C15.5 9.17157 14.8284 8.5 14 8.5C13.1716 8.5 12.5 9.17157 12.5 10C12.5 10.8284 13.1716 11.5 14 11.5Z" fill="#FFD71C"/>
    <path d="M7.5 7.5H7.51" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export function CampaignTabs({
  campaign,
  updates,
  activeTab,
  onTabChange,
}: {
  campaign: Pick<Campaign, 'description'>;
  updates: Update[];
  activeTab: string;
  onTabChange: (tab: string) => void;
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
    <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
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
          <CardContent className="p-6 space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-[#2ECC71]">
                <HandCoins className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-base text-foreground">Contribuições</h4>
                <p className="text-sm text-muted-foreground">20812 pessoas doaram</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-[#2ECC71]">
                <HeartHandshake className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-base text-foreground">Adotantes</h4>
                <p className="text-sm text-muted-foreground">
                  Quer adotar essa vaquinha?{' '}
                  <Link href="#" className="font-semibold text-primary hover:underline">
                    Clique aqui!
                  </Link>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
               <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-[#3498DB]">
                 <Award className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-base text-foreground">Promotores do Bem</h4>
                <p className="text-sm text-muted-foreground">Compartilhe a vaquinha, traga doações e se torne Promotor do Bem</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-[#E74C3C]">
                 <Heart className="h-5 w-5 text-white" fill="white" />
              </div>
               <div>
                <h4 className="font-semibold text-base text-foreground">Corações</h4>
                <p className="text-sm text-muted-foreground">Esta vaquinha recebeu 14773 corações no total e já esteve na lista de mais amadas da semana 1 vez</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="awards">
        <div className="space-y-6">
          <p className="text-center text-muted-foreground">
            Cada ação no Vakinha pode garantir números da sorte para concorrer todos os meses a R$ 15 MIL nos sorteios do Vakinha Premiada
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <Card className="p-4 flex justify-between items-start">
              <div>
                <p className="font-bold">16470 pessoas já doaram e receberam números da sorte</p>
                <Link href="#" className="text-primary font-semibold text-sm hover:underline">Quero doar e participar</Link>
              </div>
              <div className="bg-primary text-primary-foreground p-2 rounded-md">
                <Star className="h-5 w-5" fill="currentColor" />
              </div>
            </Card>

            <Card className="p-4 flex justify-between items-start bg-green-100 border-green-200">
              <div>
                <p className="font-bold">2896 doadores turbinaram sua doação e receberam números da sorte extra</p>
              </div>
              <Zap className="h-6 w-6 text-primary" />
            </Card>

            <Card className="p-4 flex justify-between items-start bg-amber-50 border-amber-100">
              <div>
                <p className="font-bold">3016 pessoas compraram corações para destacar essa vaquinha e receberam números da sorte</p>
                <Link href="#" className="text-primary font-semibold text-sm hover:underline">Comprar corações</Link>
              </div>
              <HeartHandshake className="h-6 w-6 text-primary" />
            </Card>

            <Card className="p-4 flex flex-col justify-between items-start bg-primary text-primary-foreground">
              <p className="font-bold">16470 doadores, além de ajudar e concorrer, garantiram números da sorte extra para quem criou a vaquinha</p>
              <div className="self-end -mb-2 -mr-2">
                <TagHeartIcon />
              </div>
            </Card>

            <Card className="p-4 flex justify-between items-start">
              <div>
                <p className="font-bold">1858 pessoas doaram para essa vaquinha e ainda não resgataram seus números</p>
                <Link href="#" className="text-primary font-semibold text-sm hover:underline">Verificar números para resgate</Link>
              </div>
              <HeartHandshake className="h-6 w-6 text-primary" />
            </Card>
            
            <Card className="p-4 flex justify-between items-start bg-yellow-400 border-yellow-500 text-yellow-900">
              <div>
                <p className="font-bold">0 pessoas já ganharam o prêmio com números gerados nessa vaquinha</p>
              </div>
              <div className="bg-primary text-primary-foreground p-2 rounded-full">
                <Trophy className="h-5 w-5" />
              </div>
            </Card>

          </div>
        </div>
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
