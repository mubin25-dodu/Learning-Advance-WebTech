import './App.css'
import { useState, useEffect } from 'react';
import Studentinfo from './components/StudentCard';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import SortControls from './components/SortControls';

interface Course {
  name: string;
  color: string;
}

interface Student {
  id: number;
  name: string;
  avatar: string;
  gpa: number;
  major: string;
  enrolled: Course[];
}

const INITIAL_STUDENTS: Student[] = [
  {
    id: 101,
    name: "Alex Rivera",
    avatar: "https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg",
    gpa: 3.8,
    major: "Computer Science",
    enrolled: [
      { name: "React Fundamentals", color: "#61dafb" },
      { name: "Data Structures", color: "#ff6b6b" },
      { name: "Web Dev II", color: "#4ecdc4" }
    ]
  },
  {
    id: 102,
    name: "Sophia Chen",
    avatar: "https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg",
    gpa: 3.9,
    major: "Data Science",
    enrolled: [
      { name: "Machine Learning", color: "#9b59b6" },
      { name: "Applied Statistics", color: "#e67e22" }
    ]
  },
  {
    id: 103,
    name: "Marcus Johnson",
    avatar: "https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg",
    gpa: 3.2,
    major: "Software Engineering",
    enrolled: [
      { name: "Software Architecture", color: "#2ecc71" },
      { name: "Database Systems", color: "#3498db" },
      { name: "UI/UX Design", color: "#e84393" }
    ]
  },
  {
    id: 104,
    name: "Emily Davis",
    avatar: "https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg",
    gpa: 3.6,
    major: "Information Technology",
    enrolled: [
      { name: "Network Security", color: "#e74c3c" },
      { name: "Cloud Computing", color: "#16a085" }
    ]
  }
];

function App() {
  const [students, setStudents] = useState<Student[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'default' | 'name' | 'gpa'>('default');
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setStudents(INITIAL_STUDENTS);
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const filteredCount = getFilteredAndSortedStudents().length;
    document.title = `Dashboard — ${filteredCount} Student${filteredCount !== 1 ? 's' : ''}`;
  }, [searchQuery, sortBy, students]);

  const getFilteredAndSortedStudents = (): Student[] => {
    let filtered = students.filter(student =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.major.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (sortBy === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'gpa') {
      filtered.sort((a, b) => b.gpa - a.gpa);
    }

    return filtered;
  };

  const handleFavoriteToggle = (id: number) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };

  const filteredAndSortedStudents = getFilteredAndSortedStudents();

  return (
    <div className="min-h-screen bg-gray-100">
      <Header
        totalStudents={filteredAndSortedStudents.length}
        favoriteCount={favorites.size}
        isLoading={isLoading}
      />

      <main className="max-w-6xl mx-auto px-6 py-8">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
            <p className="text-gray-600 text-lg">Loading students...</p>
          </div>
        ) : (
          <>
            <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
            <SortControls sortBy={sortBy} onSortChange={setSortBy} />

            {filteredAndSortedStudents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAndSortedStudents.map(student => (
                  <Studentinfo
                    key={student.id}
                    {...student}
                    onFavoriteToggle={handleFavoriteToggle}
                    isFavorite={favorites.has(student.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No students found matching your search.</p>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default App;
