import { useParams } from 'react-router-dom';
import { categories } from '../data/mockData';
import { Link } from 'react-router-dom';

export default function IndustryPage() {
  const { industryId } = useParams<{ industryId: string }>();
  const industryCategories = categories.filter(cat => cat.industry === industryId);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Categories
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industryCategories.map(category => (
          <Link
            key={category.id}
            to={`/categories/${category.id}`}
            className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
            <p className="mt-2 text-sm text-gray-500">{category.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}