import React,{useState} from 'react'

export default function TextForm(props) {
    
    const [text,setText] = useState("");
    const handleUpperClick = () =>{
        let upperText = text.toUpperCase();
        setText(upperText);
    }
   
    return (
        <>
        <div className='container'>
            <h3>{props.heading}</h3>
            <div className="mb-3">
                <textarea className="form-control" id="mybox" placeholder='Enter the text'
                    value={text} rows="8" 
                    onChange={(e)=>setText(e.target.value)} 
                >   
                </textarea>
            </div>
            <button type="button" className="btn btn-primary"
                onClick={()=>handleUpperClick()}
            > 
            Convert UpperCase
            </button>
        </div>
        <div className="container my-2">
            <h4>Summary</h4>
            <p>{text.split(' ').length} words {text.length} characters</p>
            <p>{0.008 * text.split(' ').length} minutes to read</p>

            <h4>Preview</h4>
            <p>{text}</p>

        </div>
        </>
    )
}

