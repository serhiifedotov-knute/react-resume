import { useState } from "react"

export default function StudentsTable({students}){

    const [nameFilter, changeNameFilter] = useState('');

    let filteredStudents = students;

    if(nameFilter.length > 0){
        filteredStudents = students.filter(student=> student.includes(nameFilter))
    }

    function filterNameUpdate(e){
        changeNameFilter(e.target.value);
    }

    return (
        <div>
        <input onChange={filterNameUpdate} placeholder="Enter here student name"></input>
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Group</th>
                <th>Birthday</th>
            </tr>
            </thead>
            <tbody>
                
                {filteredStudents.map(student=>{
                    return (
                        <tr>
                            <td>
                                {student}
                            </td>
                            <td>
                                Fit 2-14
                            </td>
                            <td>
                                1997 year
                            </td>
                        </tr>
                    )

                })}
            </tbody>
        </table>
        </div>
    )
} 