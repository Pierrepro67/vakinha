import type { Campaign } from '@/lib/data';

const GreenBadge = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="28" height="28" rx="8" fill="#EAF7F2"/>
        <path d="M14 7.5L8.25 10.25V13.875C8.25 17.825 10.65 21.45 14 22.5C17.35 21.45 19.75 17.825 19.75 13.875V10.25L14 7.5ZM13.8125 18.25L10.5 14.9375L11.5938 13.8438L13.8125 16.0625L18.4062 11.4687L19.5 12.5625L13.8125 18.25Z" fill="#36A371"/>
    </svg>
);

const OrangeBadge = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="28" height="28" rx="8" fill="#FFF5EC"/>
        <path d="M14.0001 7.5C11.5151 7.5 9.50006 9.515 9.50006 12C9.50006 13.131 9.92906 14.161 10.6351 14.933L10.0001 21.25H18.0001L17.3651 14.933C18.0711 14.161 18.5001 13.131 18.5001 12C18.5001 9.515 16.4851 7.5 14.0001 7.5Z" fill="#F2780C"/>
    </svg>
);

const RedBadge = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="28" height="28" rx="8" fill="#FDEFEF"/>
        <path d="M14 9.625C11.5832 9.625 9.625 11.5832 9.625 14C9.625 16.4168 11.5832 18.375 14 18.375C16.4168 18.375 18.375 16.4168 18.375 14C18.375 11.5832 16.4168 9.625 14 9.625ZM11.375 14C11.375 12.5523 12.5523 11.375 14 11.375V16.625C12.5523 16.625 11.375 15.4477 11.375 14Z" fill="#E84A4A"/>
    </svg>
);


export function CampaignInfo({ 
    campaign,
    setActiveTab 
}: { 
    campaign: Pick<Campaign, 'category' | 'title' | 'id' | 'summary'>,
    setActiveTab: (tab: string) => void
}) {
  return (
    <div className="space-y-4">
        <p className="text-sm font-semibold text-muted-foreground tracking-wider">{campaign.category}</p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            {campaign.title}
        </h1>
        <p className="text-lg text-muted-foreground">ID: {campaign.id}</p>
        <p className="text-muted-foreground">
            {campaign.summary}{' '}
            <button onClick={() => setActiveTab('about')} className="font-semibold text-primary hover:underline bg-transparent border-none p-0 cursor-pointer">
                ver tudo
            </button>
        </p>
        <div className="flex items-center gap-4 rounded-lg bg-card p-3 my-4 border">
            <div className="flex items-center gap-2">
                <GreenBadge />
                <OrangeBadge />
                <RedBadge />
            </div>
            <button onClick={() => setActiveTab('badges')} className="font-semibold text-sm text-primary hover:underline bg-transparent border-none p-0 cursor-pointer">
                Ver selos
            </button>
        </div>
    </div>
  );
}
