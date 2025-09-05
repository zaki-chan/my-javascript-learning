// props turtorial
// propsとは、コンポーネントがレンダリングするために必要な外部データ
function AuthorCredit(props) {
    return (
        <figure>
            <img src={props.src} alt={props.alt} />
            <figcaption>{props.byline}</figcaption>
        </figure>
    )
}
// state tutorial
// state 
function CounterButton(props){
    // useState(0)はアプリ全体でcount値を追跡する
    const [count] = useState(0);
    return <button>Clicked {count} times</button>
}

// event tutorial
function CounterButton(){
    const [count,setCount] = useState(0);
    return(
        <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    )
}

<AuthorCredit
    src="../sources/icons/chat.png"
    alt="Portrait of Zelda Schiff"
    byline="Zelda Schiff is editor-in-chief of the Library Times"
/>
