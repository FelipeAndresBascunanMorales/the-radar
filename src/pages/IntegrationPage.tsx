import { useParams } from 'react-router-dom';
import { integrations } from '../data/mockData';
import { ExclamationTriangleIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function IntegrationPage() {
  const { integrationId } = useParams<{ integrationId: string }>();
  const integration = integrations.find(int => int.id === integrationId);

  if (!integration) {
    return <div>Integration not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {integration.name}
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">{integration.summary}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <h2 className="text-lg font-semibold mb-2">Details</h2>
            <dl className="space-y-2">
              <div>
                <dt className="text-sm text-gray-500">Complexity</dt>
                <dd className="text-sm font-medium">{integration.complexity}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">Developer Required</dt>
                <dd className="text-sm font-medium">
                  {integration.requiresDeveloper ? 'Yes' : 'No'}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">Cost</dt>
                <dd className="text-sm font-medium">{integration.cost}</dd>
              </div>
              {integration.version && (
                <div>
                  <dt className="text-sm text-gray-500">Version</dt>
                  <dd className="text-sm font-medium">{integration.version}</dd>
                </div>
              )}
            </dl>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Documentation</h2>
            <a
              href={integration.documentationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              View Official Documentation
            </a>
          </div>
        </div>

        <div className="space-y-6">
          {integration.recommendations.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold mb-2 flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                Recommendations
              </h2>
              <ul className="list-disc list-inside space-y-1">
                {integration.recommendations.map((rec, index) => (
                  <li key={index} className="text-gray-600">{rec}</li>
                ))}
              </ul>
            </div>
          )}

          {integration.warnings.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold mb-2 flex items-center">
                <ExclamationTriangleIcon className="h-5 w-5 text-yellow-500 mr-2" />
                Warnings
              </h2>
              <ul className="list-disc list-inside space-y-1">
                {integration.warnings.map((warning, index) => (
                  <li key={index} className="text-gray-600">{warning}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}