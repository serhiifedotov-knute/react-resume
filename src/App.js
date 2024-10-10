import './App.css';
import StudentMark from './StudentMark'
import StudentsTable from './StudentsTable';

// Component Application
function App() {
  const students = ['Oleg',"Serhii","Maxim","Valeriya","Liza"];

  return (
    <div class="main">

      <StudentsTable students={students}/>
      {students.map(student=><StudentMark name={student} group="Fit 2-14"/>)}
    </div>
  );
}

export default App;
