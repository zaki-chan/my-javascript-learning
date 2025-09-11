import { useState } from "react";

function Form(props){
    // state:useState
    // name定数をLearn Reactの名前で定義する
    // setName()はnameを変更する関数として定義する
    // useState()はこれらを配列で返す。配列の構造分解で個別の変数にとれる。
    const [name,setName] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        props.addTask(name);
        setName("");
    }

    function handleChange(event){
        // console.log("Typing");
        // event.targetは関数を呼び出した、event(今回はchange)を発行する要素を返す
        // 今回changeを呼び出したのがinputなので、event.targetはinput(?)
        // console.log(event.target.value);
        setName(event.target.value);
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                    What needs to be done?
                </label>
            </h2>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleChange}
            />
            <button type="submit" className="btn btn__primary btn__lg">
                Add
            </button>
        </form>
    );
}

export default Form;