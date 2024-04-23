const Person = (props) => (
    <div class="tweet">
    <h1 class="message">Learn some information about this person</h1>
    <p class="message">Name: {props.name}</p>
    <p class="message">Age: {props.age}</p>
    <p class="message">Hobbies:</p>
    <ul >{
        props.hobbies.map(hobby => <li class="message">{hobby}</li>)
        } 
    </ul>
    <h3> {props.age >=18 ? "Please Go Vote!" : "You must be 18!"}</h3>
    </div>
)