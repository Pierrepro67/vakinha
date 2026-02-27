import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string): ImagePlaceholder => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    // Fallback to a default image if not found, to avoid crashes
    return {
        id: 'fallback',
        description: 'Fallback image',
        imageUrl: 'https://picsum.photos/seed/fallback/600/400',
        imageHint: 'abstract',
    };
  }
  return image;
};

export const campaignData = {
  category: 'TRAGÉDIAS / DESASTRES / ACIDENTES',
  title: 'AJUDA HUMANITÁRIA | ZONA DA MATA - MG',
  id: '5971177',
  description: 'As fortes chuvas que atingiram a Zona da Mata mineira deixaram milhares de famílias em situação de emergência. Os dados atuais contam cerca de 3.500 famílias desalojadas, 49 mortos e várias cidades em situação de calamidade pública. Precisamos da sua ajuda para levar alimentos, água potável, roupas e kits de higiene para quem mais precisa. Sua doação é um gesto de esperança.',
  raised: 1342716.36,
  goal: 1500000,
  supportersCount: 20070,
  heartsReceived: 14114,
  daysLeft: 15,
  mainImage: getImage('campaign-main'),
  organizer: {
      name: 'Nikolas Ferreira',
      activeSince: 'outubro/2019',
      avatar: 'NF'
  }
};

export const updatesData: Update[] = [];

export const supportersData: Supporter[] = [];

export const faqData: FaqItem[] = [];

export const relatedCampaignsData: RelatedCampaign[] = [];

export type Campaign = typeof campaignData;
export type RelatedCampaign = {
    title: string;
    raised: number;
    goal: number;
    image: ImagePlaceholder;
};
export type Supporter = {
    name: string;
    amount: number;
    avatar: ImagePlaceholder | null;
    time: string;
};
export type Update = {
    date: string;
    content: string;
};
export type FaqItem = {
    question: string;
    answer: string;
};
