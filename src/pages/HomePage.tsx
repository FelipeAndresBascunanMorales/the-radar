import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import IndustryCard from '../components/IndustryCard';
import { industries } from '../data/mockData';

export default function HomePage() {
  const [filteredIndustries, setFilteredIndustries] = useState(industries);

  const handleSearch = (query: string) => {
    const filtered = industries.filter(industry =>
      industry.name.toLowerCase().includes(query.toLowerCase()) ||
      industry.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredIndustries(filtered);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Integration Repository
        </h1>
        <p className="text-xl text-gray-600">
          Find the perfect integrations for your industry
        </p>
      </div>

      <div className="mb-12">
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredIndustries.map(industry => (
          <IndustryCard key={industry.id} industry={industry} />
        ))}
      </div>
    </div>
  );
}