import { Link } from 'react-router-dom';
import { Integration } from '../types';
import { TagIcon, CodeBracketIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

interface IntegrationCardProps {
  integration: Integration;
}

export default function IntegrationCard({ integration }: IntegrationCardProps) {
  const complexityColor = {
    low: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800',
  }[integration.complexity];

  return (
    <Link
      to={`/integrations/${integration.id}`}
      className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{integration.name}</h3>
          <p className="text-sm text-gray-500 mt-1">{integration.summary}</p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${complexityColor}`}>
            <TagIcon className="mr-1 h-4 w-4" />
            {integration.complexity} complexity
          </span>
          
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            <CodeBracketIcon className="mr-1 h-4 w-4" />
            {integration.requiresDeveloper ? 'Developer needed' : 'No developer needed'}
          </span>
          
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
            <CurrencyDollarIcon className="mr-1 h-4 w-4" />
            {integration.cost}
          </span>
        </div>
      </div>
    </Link>
  );
}