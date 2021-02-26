import "./Cards.css"
import PillButton from "./PillButton"

function Cards () {

    return (
        <section className="Cards">
            <h2>Title</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et at sequi labore qui nesciunt tempore.</p>
            <div>
                <PillButton type="submit" text="Boton A" click=""></PillButton>
                <PillButton type="submit" text="Boton B" click=""></PillButton>
            </div>
        </section>
    );
}

export default Cards;