import React from 'react';
import './App.css';

function App() {

    function handleSubmit(e){
        e.preventDefault()
        // console.log("Verstuurd!")
        console.log("Naam: " + nameValue + " Leeftijd: " + ageValue + " Opmerkingen: " + commentsValue)
        toggleSubmitted(!submitted)
    }

    function handleCheck(){
        console.log("Checked!")
        toggleCheckedNewsletter(!checkedNewsletter)
    }

    const [nameValue, setNameValue] = React.useState('');
    const [ageValue, setAgeValue] = React.useState(0);
    const [commentsValue, setCommentsValue] = React.useState('');
    const [checkedNewsletter, toggleCheckedNewsletter] = React.useState(false);
    const [submitted, toggleSubmitted] = React.useState(false);

  return (
    <form
        onSubmit={handleSubmit}>
        <fieldset>
        <legend>Gegevens</legend>
        <label htmlFor="form-name">
            Naam:
        <input
            type="text"
            id="form-name"
            name="name"
            placeholder="...Vul naam in..."
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
        />
        </label>
        <br/>
        <label htmlFor="form-age">
            Leeftijd:
            <input
                type="number"
                id="form-age"
                name="age"
                placeholder="...Vul leeftijd in..."
                value={ageValue}
                onChange={(e) => setAgeValue(e.target.value)}
            />
        </label>
        </fieldset>
        <br/>
        <fieldset>
            <legend>Jouw review</legend>
        <label htmlFor="form-comments">
            Opmerkingen:
        <br/>
            <textarea
                id="form-comments"
                name="comments"
                placeholder="...Wat vond je van het recept..."
                rows="4"
                cols="50"
                value={commentsValue}
                onChange={(e) => setCommentsValue(e.target.value)}
                // onChange={getComments}
            >
            </textarea>
        </label>
        <br/>
        <label htmlFor="form-checkbox">
            <input
                type="checkbox"
                id="form-checkbox"
                name="checkbox"
                checked={checkedNewsletter}
                onChange={handleCheck}
            />
            Ik schrijf me in voor de nieuwsbrief
        </label>
        <br/>
        <button
            type="submit"
            id="form-one"
            disabled={submitted}
            // onClick={handleSubmit} --> verplaats naar onSubmit in <form
        >
            Versturen
        </button>
        </fieldset>
    </form>
  );
}

export default App;
