import PropTypes from 'prop-types';

interface HeaderProps {
  totalStudents: number;
  favoriteCount: number;
  isLoading: boolean;
}

export default function Header({ totalStudents, favoriteCount, isLoading }: HeaderProps) {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-4xl font-bold text-black " style={{font:"black"}} > Student Dashboard</h1>
            <p className="text-gray-600 text-lg">Manage and track student information</p>
          </div>
          <div className="flex gap-6 text-center">
            <div className="bg-blue-100 px-4 py-2 rounded-lg">
              <p className="text-2xl font-bold text-blue-600">{isLoading ? '...' : totalStudents}</p>
              <p className="text-gray-600 text-sm">Total Students</p>
            </div>
            <div className="bg-red-100 px-4 py-2 rounded-lg">
              <p className="text-2xl font-bold text-red-600">{favoriteCount}</p>
              <p className="text-gray-600 text-sm">Favorites</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="border-t pt-4">
          <ul className="flex gap-6">
            <li>
              <a href="#dashboard" className="text-gray-700 hover:text-blue-600 font-medium transition">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#students" className="text-gray-700 hover:text-blue-600 font-medium transition">
                Students
              </a>
            </li>
            <li>
              <a href="#courses" className="text-gray-700 hover:text-blue-600 font-medium transition">
                Courses
              </a>
            </li>
            <li>
              <a href="#settings" className="text-gray-700 hover:text-blue-600 font-medium transition">
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

Header.propTypes = {
  totalStudents: PropTypes.number.isRequired,
  favoriteCount: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
};