'use server';

import { z } from 'zod';
import {
  generateCampaignDescription,
  type GenerateCampaignDescriptionInput,
} from '@/ai/flows/generate-campaign-description-flow';

const formSchema = z.object({
  campaignTitle: z.string().min(5, 'O título da campanha precisa ter pelo menos 5 caracteres.'),
  cause: z.string().min(10, 'A causa precisa ter pelo menos 10 caracteres.'),
  targetAudience: z.string().min(3, 'O público-alvo precisa ter pelo menos 3 caracteres.'),
  fundraisingGoal: z.string().min(2, 'A meta de arrecadação é obrigatória.'),
  urgency: z.string().optional(),
  keyDetails: z.string().optional(),
});

export type FormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  data?: {
    description: string;
    keywords: string[];
  };
};

export async function createCampaignDescriptionAction(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  const formData = Object.fromEntries(data);
  const parsed = formSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      message: 'O formulário contém erros.',
      fields: Object.fromEntries(
        Object.entries(formData).map(([key, value]) => [key, value as string])
      ),
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }

  try {
    const aiInput: GenerateCampaignDescriptionInput = parsed.data;
    const result = await generateCampaignDescription(aiInput);
    
    return {
      message: 'Descrição da campanha gerada com sucesso!',
      data: result,
    };
  } catch (error) {
    return {
      message: 'Falha ao gerar a descrição. Por favor, tente novamente.',
    };
  }
}
