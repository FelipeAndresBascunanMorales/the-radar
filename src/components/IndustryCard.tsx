import { Link } from 'react-router-dom';
import { Industry } from '../types';
import * as Icons from '@heroicons/react/24/outline';

interface IndustryCardProps {
  industry: Industry;
}

export default function IndustryCard({ industry }: IndustryCardProps) {
  const IconComponent = (Icons as any)[industry.icon];

  return (
    <Link
      to={`/industries/${industry.id}`}
      className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      <div className="flex items-center space-x-4">
        {IconComponent && (
          <IconComponent className="h-8 w-8 text-blue-500" />
        )}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{industry.name}</h3>
          <p className="text-sm text-gray-500">{industry.description}</p>
        </div>
      </div>
    </Link>
  );
}