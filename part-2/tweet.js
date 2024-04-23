const Tweet = (props) => (
    <div class="tweet">
    <h1>{ props.username }</h1>
    <p class="date">AKA {props.name}</p>
    <p class="date">{props.date}</p>
    <p class="message">{props.message}</p>
    </div>
)