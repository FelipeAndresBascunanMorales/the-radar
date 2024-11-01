import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import IndustryPage from './pages/IndustryPage';
import CategoryPage from './pages/CategoryPage';
import IntegrationPage from './pages/IntegrationPage';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/industries/:industryId" element={<IndustryPage />} />
        <Route path="/categories/:categoryId" element={<CategoryPage />} />
        <Route path="/integrations/:integrationId" element={<IntegrationPage />} />
      </Routes>
    </div>
  );
}

export default App;