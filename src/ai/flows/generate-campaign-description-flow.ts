'use server';
/**
 * @fileOverview A Genkit flow for generating compelling and emotionally resonant campaign descriptions.
 *
 * - generateCampaignDescription - A function that generates a campaign description using AI.
 * - GenerateCampaignDescriptionInput - The input type for the generateCampaignDescription function.
 * - GenerateCampaignDescriptionOutput - The return type for the generateCampaignDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCampaignDescriptionInputSchema = z.object({
  campaignTitle: z.string().describe('The title of the fundraising campaign.'),
  cause: z.string().describe('The cause or purpose the campaign aims to support.'),
  targetAudience: z.string().describe('The primary audience the campaign is trying to reach.'),
  fundraisingGoal: z.string().describe('The financial target for the campaign (e.g., "$10,000" or "5,000 reais").'),
  urgency: z.string().optional().describe('Optional: Why the campaign needs immediate support or has a deadline.'),
  keyDetails: z.string().optional().describe('Optional: Any specific facts, stories, or important details to include in the description.'),
});
export type GenerateCampaignDescriptionInput = z.infer<typeof GenerateCampaignDescriptionInputSchema>;

const GenerateCampaignDescriptionOutputSchema = z.object({
  description: z.string().describe('The generated compelling and emotionally resonant campaign description.'),
  keywords: z.array(z.string()).describe('A list of relevant keywords for the campaign description.'),
});
export type GenerateCampaignDescriptionOutput = z.infer<typeof GenerateCampaignDescriptionOutputSchema>;

export async function generateCampaignDescription(
  input: GenerateCampaignDescriptionInput
): Promise<GenerateCampaignDescriptionOutput> {
  return generateCampaignDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateCampaignDescriptionPrompt',
  input: {schema: GenerateCampaignDescriptionInputSchema},
  output: {schema: GenerateCampaignDescriptionOutputSchema},
  prompt: `You are a professional copywriter specializing in fundraising campaigns. Your goal is to create a compelling and emotionally resonant campaign description that inspires donations. The description should be persuasive and directly address the target audience.

Focus on the cause, the impact of the donations, and any urgency.

Campaign Title: {{{campaignTitle}}}
Cause: {{{cause}}}
Target Audience: {{{targetAudience}}}
Fundraising Goal: {{{fundraisingGoal}}}
{{#if keyDetails}}
Key Details: {{{keyDetails}}}
{{/if}}
{{#if urgency}}
Urgency: {{{urgency}}}
{{/if}}

Generate a campaign description that is compelling, emotionally resonant, and approximately 200-300 words long. Also, provide a list of 5-10 relevant keywords.`,
});

const generateCampaignDescriptionFlow = ai.defineFlow(
  {
    name: 'generateCampaignDescriptionFlow',
    inputSchema: GenerateCampaignDescriptionInputSchema,
    outputSchema: GenerateCampaignDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
