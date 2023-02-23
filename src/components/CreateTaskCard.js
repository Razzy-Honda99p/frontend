/**
 * The card for task creation.
 */
import React from 'react';

function CreateTaskCard(props){
    //task creation
    const [formData, setFormData] = React.useState(
        {
            task:""
        }
    )


    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
        console.log(formData.task)
    }


    //TODO: send the selected task
    function handleSubmit(event){
        event.preventDefault();
    }


    //TODO: populate the form through React props
    //automatically populates tasks radio btns
    let tasks = ["task1", "task2", "task3", "task4"]
    const radio_btns = tasks.map((task, index) => {
        return <label key={index} className="radio grey">
            <input 
                type="radio"
                name="task"
                value={task}
                checked={formData.task === task}
                onChange={handleChange}
            />
            {task}
        </label>
    })


    return(
        <div onSubmit={handleSubmit} className={props.className}>
            <form>
                <div id="radio-btn-div">
                    {radio_btns}
                </div>
                <br/>
                <div id="submit-btn-container">
                    <button id="btn-task" type="submit">
                        Submit
                    </button>
                </div>

            </form>
        </div>
   );
}

export default CreateTaskCard;