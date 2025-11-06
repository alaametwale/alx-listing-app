import type { NextPage } from 'next';

// 🌟 استخدام مسارات الاستيراد الصحيحة مع امتداد .tsx
import Card from '../components/common/Card.tsx';
import Button from '../components/common/Button.tsx';
import Navbar from '../components/common/Navbar.tsx';


const Home: NextPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen"> 
      
      {/* 🌟 شريط التنقل في الأعلى */}
      <Navbar /> 

      {/* محتوى الصفحة (لغرض التأكيد) */}
      <main className="max-w-7xl mx-auto p-8">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-10 border-b-4 border-blue-400 pb-2">
          🏠 ALX Listing App - Foundation Complete
        </h1>
        
        <p className="mb-8 text-xl font-medium text-green-600">
          ✅ Navbar is now visible at the top! (Try resizing the window)
        </p>

        <div className="flex space-x-6 p-6 border border-dashed border-gray-300 rounded-lg bg-white shadow-lg">
          <Card placeholder="The Card component is here!" />
          <div className="flex flex-col space-y-4 justify-center">
            <Button placeholder="Book Now" />
            <Button placeholder="View Details" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;