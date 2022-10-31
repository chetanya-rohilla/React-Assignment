import students from "./students.json"

const StudentComponent = function() {
    return <div>
        <h2>Students</h2>
        <ul>
            {students.map( (ele, index) => <li key={index}>{ele.name} --- {ele.age} --- {ele.gender}</li>)}
        </ul>
    </div>
}

export default StudentComponent