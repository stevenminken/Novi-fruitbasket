import React from 'react';

function FruitArticle(props) {
    return (
        <>
            <article>
                <img src={props.imageUrl}/>
                <p>{props.fruit}</p>
                <button type="button" onClick={() => {
                    if (props.counter > 0) {
                        props.setCounter(props.counter - 1);
                    } else {
                        return;
                    }
                }
                }>-
                </button>
                <p>{props.counter}</p>
                <button type="button" onClick={() => {
                    props.setCounter(props.counter + 1);
                }
                }>+
                </button>
            </article>
        </>
    );
};

export default FruitArticle;