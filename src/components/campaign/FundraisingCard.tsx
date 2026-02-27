'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CreditCard, Heart } from 'lucide-react';
import type { Campaign } from '@/lib/data';
import { Progress } from '@/components/ui/progress';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function formatCurrency(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

const donationOptions = [10, 25, 50, 100];

export function FundraisingCard({ campaign }: { campaign: Campaign }) {
  const [selectedAmount, setSelectedAmount] = useState<number>(25);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDonation = () => {
    if (selectedAmount && selectedAmount > 0) {
      console.log(`Doando ${formatCurrency(selectedAmount)}`);
      // Here would be the logic to process the donation
      setIsDialogOpen(false); // Close dialog on donation
    }
  }

  const finalAmount = selectedAmount;

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
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
                <Button size="lg" className="w-full font-bold text-lg h-14">
                  Quero Ajudar
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Faça sua doação</DialogTitle>
                    <DialogDescription>
                        Selecione um valor. Sua ajuda faz a diferença!
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                        {donationOptions.map((amount) => (
                            <Button
                                key={amount}
                                variant={selectedAmount === amount ? 'default' : 'outline'}
                                onClick={() => setSelectedAmount(amount)}
                            >
                                {formatCurrency(amount)}
                            </Button>
                        ))}
                    </div>
                </div>
                <DialogFooter>
                    <Button 
                        type="submit" 
                        onClick={handleDonation} 
                        className="w-full" 
                        disabled={!(finalAmount && finalAmount > 0)}
                    >
                        <CreditCard className="mr-2 h-4 w-4" />
                        Doar {finalAmount && finalAmount > 0 ? formatCurrency(finalAmount) : ''}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>

        <Button variant="outline" size="lg" className="w-full font-semibold h-12">
          Compartilhar
        </Button>
      </CardContent>
    </Card>
  );
}
