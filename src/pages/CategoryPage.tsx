import { useParams } from 'react-router-dom';
import { integrations } from '../data/mockData';
import IntegrationCard from '../components/IntegrationCard';

export default function CategoryPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const categoryIntegrations = integrations.filter(int => int.category === categoryId);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Available Integrations
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryIntegrations.map(integration => (
          <IntegrationCard key={integration.id} integration={integration} />
        ))}
      </div>
    </div>
  );
}