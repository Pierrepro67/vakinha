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
  title: 'Ajude a construir um futuro melhor para as crianças de nossa comunidade',
  id: '3911321',
  description: `Nossa comunidade enfrenta um grande desafio: a falta de espaços educacionais e recreativos seguros para nossas crianças. Muitas delas não têm onde brincar ou aprender depois da escola, o que as deixa vulneráveis a diversos riscos.

Com a sua ajuda, queremos construir um centro comunitário que oferecerá aulas de reforço, atividades esportivas, e um lugar seguro para que elas possam crescer e se desenvolver. Cada doação, por menor que seja, nos aproxima de nosso objetivo de R$ 50.000. Juntos, podemos dar a essas crianças a oportunidade de um futuro mais brilhante e cheio de esperança. Faça parte desta transformação!`,
  raised: 37500,
  goal: 50000,
  supportersCount: 432,
  daysLeft: 15,
  mainImage: getImage('campaign-main'),
};

export const updatesData = [
  {
    date: '3 dias atrás',
    content: 'Graças à generosidade de todos, já alcançamos 75% da nossa meta! A construção da fundação do centro comunitário já começou. Continuem compartilhando e doando!',
  },
  {
    date: '1 semana atrás',
    content: 'Recebemos uma doação incrível de materiais de construção! Estamos muito gratos e animados para começar a obra. Cada contribuição faz uma enorme diferença.',
  },
];

export const supportersData = [
  {
    name: 'Ana Silva',
    amount: 150,
    avatar: getImage('supporter-avatar-1'),
    time: '2h atrás',
  },
  {
    name: 'Carlos Pereira',
    amount: 75,
    avatar: getImage('supporter-avatar-2'),
    time: '5h atrás',
  },
  {
    name: 'Mariana Costa',
    amount: 200,
    avatar: getImage('supporter-avatar-3'),
    time: '1 dia atrás',
  },
   {
    name: 'Doador Anônimo',
    amount: 50,
    avatar: null,
    time: '1 dia atrás',
  },
];

export const faqData = [
  {
    question: 'Como posso ter certeza de que minha doação é segura?',
    answer: 'Utilizamos uma plataforma de pagamento segura e reconhecida no mercado. Todas as transações são criptografadas para garantir a segurança dos seus dados.',
  },
  {
    question: 'Para onde vai o meu dinheiro?',
    answer: 'Sua doação será usada diretamente na compra de materiais de construção, pagamento de mão de obra e aquisição de equipamentos para o centro comunitário, conforme descrito na campanha.',
  },
  {
    question: 'Posso doar de outra forma que não seja online?',
    answer: 'No momento, estamos aceitando doações principalmente através da plataforma online via PIX para garantir a transparência e agilidade. Para outras formas de doação, entre em contato conosco.',
  },
  {
    question: 'Como acompanho o progresso da campanha?',
    answer: 'Todas as atualizações sobre o andamento do projeto e o uso dos fundos serão postadas regularmente na aba "Atualizações" aqui na página da campanha.',
  },
];

export const relatedCampaignsData = [
  {
    title: 'Água potável para a vila Sol Nascente',
    raised: 8200,
    goal: 15000,
    image: getImage('related-campaign-1'),
  },
  {
    title: 'Salve o Parque das Capivaras!',
    raised: 21500,
    goal: 30000,
    image: getImage('related-campaign-2'),
  },
  {
    title: 'Um lar para anjos de 4 patas',
    raised: 45000,
    goal: 45000,
    image: getImage('related-campaign-3'),
  },
  {
    title: 'Reforma da biblioteca comunitária',
    raised: 3700,
    goal: 10000,
    image: getImage('related-campaign-4'),
  },
];

export type Campaign = typeof campaignData;
export type RelatedCampaign = (typeof relatedCampaignsData)[0];
export type Supporter = (typeof supportersData)[0];
export type Update = (typeof updatesData)[0];
export type FaqItem = (typeof faqData)[0];
