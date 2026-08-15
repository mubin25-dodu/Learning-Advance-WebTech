import './App.css'
import Studentinfo from './components/StudentCard';

function App() {
const initialStudents = [
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
  return (
    <>
    {initialStudents.map(e=>(<Studentinfo key={e.id} {...e} />))}
    </>
  )
}

export default App
