import Header from '@/components/Header';
import { CreateCampaignForm } from '@/components/CreateCampaignForm';

export default function CreateCampaignPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto max-w-7xl py-8 px-4">
          <CreateCampaignForm />
        </div>
      </main>
    </div>
  );
}
