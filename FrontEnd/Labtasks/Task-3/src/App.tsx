import { createContext, useContext, useEffect, useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import './App.css'

type Student = {
  id: string
  name: string
  major: string
  gpa: number
  courses: string[]
}

type Theme = 'light' | 'dark'

const initialStudents: Student[] = [
  { id: '1001', name: 'Ayesha Rahman', major: 'Computer Science', gpa: 3.8, courses: ['Web Technology', 'Database Systems'] },
  { id: '1002', name: 'Tanvir Hasan', major: 'Software Engineering', gpa: 3.5, courses: ['Algorithms', 'Software Design'] },
]

const ThemeContext = createContext({ theme: 'light' as Theme, toggleTheme: () => {} })
const StudentContext = createContext<{
  students: Student[]
  searchQuery: string
  sortBy: string
  favorites: string[]
  setSearchQuery: (query: string) => void
  setSortBy: (sort: string) => void
  addStudent: (student: Student) => void
  removeStudent: (id: string) => void
  toggleFavorite: (id: string) => void
}>({
  students: [], searchQuery: '', sortBy: 'name', favorites: [], setSearchQuery: () => {}, setSortBy: () => {},
  addStudent: () => {}, removeStudent: () => {}, toggleFavorite: () => {},
})

function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')
  const toggleTheme = () => setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light')
  return <ThemeContext.Provider value={{ theme, toggleTheme }}><div className={theme}>{children}</div></ThemeContext.Provider>
}

function StudentProvider({ children }: { children: ReactNode }) {
  const [students, setStudents] = useState<Student[]>(() => {
    const savedStudents = localStorage.getItem('students')
    return savedStudents ? JSON.parse(savedStudents) : initialStudents
  })
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('name')
  const [favorites, setFavorites] = useState<string[]>([])

  useEffect(() => { localStorage.setItem('students', JSON.stringify(students)) }, [students])
  const addStudent = (student: Student) => setStudents((currentStudents) => [...currentStudents, student])
  const removeStudent = (id: string) => {
    setStudents((currentStudents) => currentStudents.filter((student) => student.id !== id))
    setFavorites((currentFavorites) => currentFavorites.filter((favoriteId) => favoriteId !== id))
  }
  const toggleFavorite = (id: string) => setFavorites((currentFavorites) => currentFavorites.includes(id)
    ? currentFavorites.filter((favoriteId) => favoriteId !== id) : [...currentFavorites, id])

  return <StudentContext.Provider value={{ students, searchQuery, sortBy, favorites, setSearchQuery, setSortBy, addStudent, removeStudent, toggleFavorite }}>{children}</StudentContext.Provider>
}

function DashboardHeader() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return <header className="dashboard-header"><div><h1>Student Dashboard</h1><p>Manage registered students</p></div><button type="button" onClick={toggleTheme}>Switch to {theme === 'light' ? 'dark' : 'light'} mode</button></header>
}

function SearchBar() {
  const { searchQuery, setSearchQuery } = useContext(StudentContext)
  return <input className="search-input" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder="Search by name, ID, or major" />
}

function SortControls() {
  const { sortBy, setSortBy } = useContext(StudentContext)
  return <label className="sort-control">Sort by:<select value={sortBy} onChange={(event) => setSortBy(event.target.value)}><option value="name">Name</option><option value="gpa">GPA</option></select></label>
}

function StudentCard({ student }: { student: Student }) {
  const { favorites, toggleFavorite, removeStudent } = useContext(StudentContext)
  const isFavorite = favorites.includes(student.id)
  return <article className="student-card"><div className="card-heading"><h3>{student.name}</h3><button type="button" onClick={() => toggleFavorite(student.id)}>{isFavorite ? 'Unfavorite' : 'Favorite'}</button></div><p><strong>ID:</strong> {student.id}</p><p><strong>Major:</strong> {student.major}</p><p><strong>GPA:</strong> {student.gpa.toFixed(2)}</p><p><strong>Courses:</strong> {student.courses.join(', ') || 'None'}</p><button type="button" className="remove-button" onClick={() => removeStudent(student.id)}>Remove Student</button></article>
}

function StudentList() {
  const { students, searchQuery, sortBy } = useContext(StudentContext)
  const visibleStudents = students.filter((student) => `${student.name} ${student.id} ${student.major}`.toLowerCase().includes(searchQuery.toLowerCase())).sort((firstStudent, secondStudent) => sortBy === 'gpa' ? secondStudent.gpa - firstStudent.gpa : firstStudent.name.localeCompare(secondStudent.name))
  return <section className="student-list"><div className="section-heading"><h2>Students ({visibleStudents.length})</h2><div className="student-controls"><SearchBar /><SortControls /></div></div>{visibleStudents.length === 0 ? <p>No students found.</p> : visibleStudents.map((student) => <StudentCard key={student.id} student={student} />)}</section>
}

function AddStudentForm() {
  const { students, addStudent } = useContext(StudentContext)
  const [form, setForm] = useState({ name: '', id: '', major: '', gpa: '', courses: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [message, setMessage] = useState('')
  useEffect(() => { if (!message) return; const timer = window.setTimeout(() => setMessage(''), 3000); return () => window.clearTimeout(timer) }, [message])
  const updateField = (field: string, value: string) => setForm((currentForm) => ({ ...currentForm, [field]: value }))

  const submitForm = (event: FormEvent) => {
    event.preventDefault()
    const nextErrors: Record<string, string> = {}
    const gpa = Number(form.gpa)
    if (!form.name.trim()) nextErrors.name = 'Full name is required.'
    if (!/^\d+$/.test(form.id)) nextErrors.id = 'Student ID must be numeric.'
    else if (students.some((student) => student.id === form.id)) nextErrors.id = 'Student ID must be unique.'
    if (!form.major.trim()) nextErrors.major = 'Major is required.'
    if (form.gpa === '' || Number.isNaN(gpa) || gpa < 0 || gpa > 4) nextErrors.gpa = 'GPA must be between 0 and 4.0.'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return
    addStudent({ id: form.id, name: form.name.trim(), major: form.major.trim(), gpa, courses: form.courses.split(',').map((course) => course.trim()).filter(Boolean) })
    setForm({ name: '', id: '', major: '', gpa: '', courses: '' })
    setMessage('Student added successfully.')
  }

  return <section className="form-section"><h2>Add Student</h2>{message && <p className="success-message">{message}</p>}<form onSubmit={submitForm}>
    <label>Full Name<input value={form.name} onChange={(event) => updateField('name', event.target.value)} />{errors.name && <span className="error">{errors.name}</span>}</label>
    <label>Student ID<input value={form.id} onChange={(event) => updateField('id', event.target.value)} />{errors.id && <span className="error">{errors.id}</span>}</label>
    <label>Major<input value={form.major} onChange={(event) => updateField('major', event.target.value)} />{errors.major && <span className="error">{errors.major}</span>}</label>
    <label>GPA<input type="number" min="0" max="4" step="0.01" value={form.gpa} onChange={(event) => updateField('gpa', event.target.value)} />{errors.gpa && <span className="error">{errors.gpa}</span>}</label>
    <label>Courses (comma-separated)<input value={form.courses} onChange={(event) => updateField('courses', event.target.value)} /></label>
    <button type="submit">Add Student</button>
  </form></section>
}

function Dashboard() {
  return <main className="dashboard"><DashboardHeader /><div className="dashboard-content"><AddStudentForm /><StudentList /></div></main>
}

function App() {
  return <ThemeProvider><StudentProvider><Dashboard /></StudentProvider></ThemeProvider>
}

export default App
