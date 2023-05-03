import React, {useState, useEffect} from "react";
import Axios from "axios";

function App() {

    const [words, setWords] = useState([])

    useEffect(()=> {
    Axios.get("http://localhost:3001/api/get").then((response) => {
        setWords(response.data)
    });
    }, []);

    const wordlist = [];
    return (
        <div>
        {words.map((val)=> {
            wordlist.push(val.word);
        })}
        {console.log(wordlist)}
        </div>
    );
}

export default App;