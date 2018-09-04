
console.log('app.js is running');
const book = {
    title: 'How to yoyo',
    subtitle: 'lots of fun',
    options : []
};
const onFormSubmit = (e) => {
    e.preventDefault(); // stops full page refresh
    const option = e.target.elements.option.value;

    if (option) {
        book.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};
const wipeArray = () => {
    book.options = [];
    render();
};
const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * book.options.length);
    const option = book.options[randomNum];
    console.log(randomNum);
    alert(option);
};
const render = () => {
    const template = (
        <div>
            <h1>Indicision App</h1>
            <h2>Book: {book.title}</h2>
            {book.subtitle && <p>{book.subtitle}</p>}
            <p>{(book.options && book.options.length > 0) ? 'here are your options' : 'no options'}</p>
            <button disabled={book.options.length === 0} onClick={onMakeDecision}>What should i do?</button>
            <button onClick={wipeArray}>Remove all</button>
            <ol>
                {
                    book.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
        );

    ReactDOM.render(template, appRoot);
};
const appRoot = document.getElementById("app");
render();