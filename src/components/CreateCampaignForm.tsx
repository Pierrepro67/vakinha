'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { createCampaignDescriptionAction, type FormState } from '@/app/actions';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Bot, Clipboard, Loader2, Sparkles, Terminal } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import React from 'react';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Gerando...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Gerar Descrição
        </>
      )}
    </Button>
  );
}

export function CreateCampaignForm() {
  const initialState: FormState = {
    message: '',
  };
  const [state, formAction] = useFormState(createCampaignDescriptionAction, initialState);
  const { toast } = useToast();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
        toast({
            title: 'Copiado!',
            description: 'A descrição da campanha foi copiada para a área de transferência.',
        });
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot />
            Criador de Campanhas com IA
          </CardTitle>
          <CardDescription>
            Preencha os detalhes abaixo e nossa IA irá gerar uma descrição emocionante e palavras-chave para sua campanha.
          </CardDescription>
        </CardHeader>
        <form action={formAction}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="campaignTitle">Título da Campanha</Label>
              <Input id="campaignTitle" name="campaignTitle" placeholder="Ex: Construindo um parquinho para as crianças" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cause">Causa/Objetivo</Label>
              <Textarea id="cause" name="cause" placeholder="Ex: Arrecadar fundos para construir um espaço seguro e divertido para as crianças da comunidade." required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="targetAudience">Público-Alvo</Label>
              <Input id="targetAudience" name="targetAudience" placeholder="Ex: Moradores do bairro, pais e empresas locais" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="fundraisingGoal">Meta de Arrecadação</Label>
              <Input id="fundraisingGoal" name="fundraisingGoal" placeholder="Ex: R$ 10.000" required />
            </div>
             <div className="space-y-2">
              <Label htmlFor="urgency">Urgência (Opcional)</Label>
              <Input id="urgency" name="urgency" placeholder="Ex: Precisamos dos fundos antes do início das chuvas." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="keyDetails">Detalhes Chave (Opcional)</Label>
              <Textarea id="keyDetails" name="keyDetails" placeholder="Ex: A história de uma criança específica, um evento de lançamento..." />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <SubmitButton />
            {state?.issues && (
              <Alert variant="destructive">
                  <Terminal className="h-4 w-4" />
                  <AlertTitle>Erros de Validação</AlertTitle>
                  <AlertDescription>
                      <ul>
                          {state.issues.map((issue) => <li key={issue}>- {issue}</li>)}
                      </ul>
                  </AlertDescription>
              </Alert>
            )}
          </CardFooter>
        </form>
      </Card>
      
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle>Resultado Gerado</CardTitle>
          <CardDescription>Aqui está a descrição e as palavras-chave para sua campanha.</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow space-y-6">
          {state?.data ? (
            <div className="space-y-4">
              <div>
                <Label className="text-lg font-semibold">Descrição</Label>
                <div className="relative mt-2">
                    <p className="p-4 rounded-md border bg-secondary whitespace-pre-wrap">{state.data.description}</p>
                    <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-7 w-7" onClick={() => copyToClipboard(state.data?.description ?? '')}>
                        <Clipboard className="h-4 w-4" />
                    </Button>
                </div>
              </div>
              <div>
                <Label className="text-lg font-semibold">Palavras-chave</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {state.data.keywords.map((kw) => <Badge key={kw} variant="outline">{kw}</Badge>)}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground p-8 border-2 border-dashed rounded-lg">
               <Sparkles className="h-10 w-10 mb-4" />
               <p className="font-semibold">Sua descrição aparecerá aqui.</p>
               <p className="text-sm">Preencha o formulário e clique em "Gerar Descrição" para começar.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
