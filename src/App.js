import React, {useState} from 'react';
import './App.css';
import FruitArticle from "./components/FruitArticle";
import Form from "./components/Form";

function App() {

    const [aardbeiCounter, setAardbeiCounter] = useState(0);
    const [banaanCounter, setBanaanCounter] = useState(0);
    const [appelCounter, setAppelCounter] = useState(0);
    const [kiwiCounter, setKiwiCounter] = useState(0);

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <FruitArticle
                imageUrl="https://thumbs.dreamstime.com/b/aardbei-9657151.jpg"
                fruit="Aardbeien"
                counter={aardbeiCounter}
                setCounter={setAardbeiCounter}/>
            <FruitArticle
                imageUrl="https://thumbs.dreamstime.com/b/de-bos-van-de-banaan-19074568.jpg"
                fruit="bananen"
                counter={banaanCounter}
                setCounter={setBanaanCounter}/>
            <FruitArticle
                imageUrl="https://static.ah.nl/dam/product/AHI_434d50303132333830?revLabel=5&rendition=800x800_JPG_Q90&fileType=binary"
                fruit="Appels"
                counter={appelCounter}
                setCounter={setAppelCounter}/>
            <FruitArticle
                imageUrl="https://m.media-amazon.com/images/I/81gxzW7UHKL._SX569_.jpg"
                fruit="Kiwi's"
                counter={kiwiCounter}
                setCounter={setKiwiCounter}/>

            <button type="button" className="resetButton" onClick={() => {
                setAardbeiCounter(0);
                setBanaanCounter(0);
                setAppelCounter(0);
                setKiwiCounter(0);
            }}>Reset
            </button>

            <Form aardbeiCounter="aardbeiCounter" banaanCounter="banaanCounter" kiwiCounter="kiwiCounter" appelCounter="appelCounter"/>
        </>
    );
}

export default App;
