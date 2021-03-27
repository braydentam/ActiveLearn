import React, { useState } from 'react';
import './participant.css';
function StudentList(props){
    const [list, setList] = useState(['John', 'Jake']);
    // eslint-disable-next-line
    const addStudent = (student) => {
        setList((prev) => {
            return[student, ...prev];
        });
    };

    const removeStudent = (targetIndex) => {
        setList((prev) => {
            return prev.filter((student, index) => index !== targetIndex);
        });
    };

    return(
        <div>
            <h1 class="par">Participant list</h1>
            <ul>
                {list.map((student, index) => (
                    <li onClick={() => removeStudent(index)} key={index}>
                        {student}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default StudentList;

