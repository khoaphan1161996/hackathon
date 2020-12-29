import '../assets/css/Show.css'

export function Show(props) {
    return (
        <div className="Show">
            <p className="qu">Question : {props.question}</p>
            <div className="mid">
                <p className="an">Answer 1: <button onClick={props.onClickan} className="buta" >{props.answer1}</button></p>
                <p className="an">Answer 2: <button onClick={props.onClickan} className="buta">{props.answer2}</button></p>
                <p className="an">Answer 3: <button onClick={props.onClickan} className="buta">{props.answer3}</button></p>
                <p className="an">Answer 4: <button onClick={props.onClickan} className="buta">{props.answer4}</button></p>
            </div>

        </div>

    )
}