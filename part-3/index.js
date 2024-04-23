const App = () => (<div class="container">
    <Person name="Jonie Bradford" age={18} hobbies={['shopping','cooking', 'blogging']}/>
    <Person name="Marianne Smothers" age={20} hobbies={['gardening','bartending', 'day-dreaming']}/>
    <Person name="Simba Kingson" age={13} hobbies={['video-gaming','anime', 'martial arts','skate-boarding']}/>
    </div>)

ReactDOM.render(<App />, document.getElementById("root"))