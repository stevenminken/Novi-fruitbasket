import React from 'react';
import {useForm} from "react-hook-form";

function Form(props) {

    const {handleSubmit, formState: { errors }, register,watch } = useForm();
    const onSubmit = data => {
        console.log(data);
        console.log("Aardbeien: " + props.aardbeiCounter);
        console.log("Bananen: " + props.banaanCounter);
        console.log("Kiwi's: " + props.kiwiCounter);
        console.log("Appels: " + props.appelCounter);

    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="first-name-field">
                    Voornaam
                    <input type="text" name="first-name" id="first-name-field" {...register("firstName")}/>
                </label>
                <label htmlFor="last-name-field">
                    Achternaam
                    <input type="text" name="last-name" id="last-name-field" {...register("lastName")}/>
                </label>
                <label htmlFor="age-field">
                    Leeftijd
                    <input type="text" name="age" id="age-field" {...register("age")}/>
                </label>
                <label htmlFor="postal-code-field">
                    Postcode
                    <input type="text" name="postal-code" id="postal-code-field"{...register("postalCode")}/>
                </label>
            <label htmlFor="delivery-time-field">
                Bezorgfrequentie:
                <select>
                    <option value="maandelijks" id="delivery-time-field"{...register("delivery")}>maandelijks</option>
                    <option value="wekelijks" id="delivery-time-field" {...register("delivery")}>wekelijks</option>
                    <option value="dagelijks" id="delivery-time-field" {...register("delivery")}>dagelijks</option>
                </select>
            </label>
                <label htmlFor="overdags-field">
                    <input type="radio" name="delivery-moment" value="overdags" id="overdags-field" {...register("deliveryMoment")}/>
                    Overdag's
                </label>
                <label htmlFor="savonds-field">
                    <input type="radio" name="delivery-moment" value="savonds" id="savonds-field" {...register("deliveryMoment")}/>
                    's Avonds
                </label>
                <label htmlFor="remark-field">
                    Opmerkingen
                    <textarea id="remark-field" {...register("remark")}/>
                </label>
                <label htmlFor="accept-field">
                    <input type="checkbox" id="accept-field" {...register("accept")}/>
                    Ik ga akkoord met de voorwaarden
                </label>
                <button type="submit">
                    Send
                </button>
            </form>
        </>
    );
}

export default Form;