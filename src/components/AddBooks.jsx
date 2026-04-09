import { useState } from "react";

const AddBooks=()=>{
    const[formData,setFormData]=useState({
        title:"",
        author:"",
        publishedYear:"",
        genre:"",
        language:"",
        country:"",
        rating:"",
        summary:"",
        coverImageUrl:"",
    })

    const handleChange=(event)=>{
        const{name,value}=event.target
        setFormData((prevData)=>({
            ...prevData,[name]: name==="publishedYear" || name==="rating"?parseInt(value):value,
        }))
    }

    const handleSubmit=async (event)=>{
        event.preventDefault()
        const formattedData={
            ...formData,
            genre: formData.genre? formData.genre.split(", "):[]
        }
        try{
            const response=await fetch("https://books-opal-three.vercel.app/books",
                {
                    method: "POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify(formattedData)
                }
            )
            if(!response.ok){
                throw "Failed to add book."
            }
            const data=await response.json()
            console.log("Added Book",data)

        }catch(error){
            console.log(error)
        }
    }
    
    return(
        <div>
            <h2>Add new Books</h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <br/>
                <input type="text" name="title" value={formData.title} onChange={handleChange} />
                <br/>
                <br/>
                <label>Author:</label>
                <br/>
                <input type="text" name="author" value={formData.author} onChange={handleChange}/>
                <br/>
                <br/>
                <label>publishedYear:</label>
                <br/>
                <input type="number" name="publishedYear" value={formData.publishedYear} onChange={handleChange}/>
                <br/>
                <br/>
                <label>Genre:</label>
                <br/>
                <input type="text" name="genre" value={formData.genre} onChange={handleChange}/>
                <br/>
                <br/>
                <label>Language:</label>
                <br/>
                <input type="text" name="language" value={formData.language} onChange={handleChange}/>
                <br/>
                <br/>
                <label>Country:</label>
                <br/>
                <input type="text" name="country" value={formData.country} onChange={handleChange}/>
                <br/>
                <br/>
                <label>Rating:</label>
                <br/>
                <input type="number" name="rating" value={formData.rating} onChange={handleChange}/>
                <br/>
                <br/>
                <label>Summary:</label>
                <br/>
                <input type="text" name="summary" value={formData.summary} onChange={handleChange}/>
                <br/>
                <br/>
                <label>CoverImageUrl:</label>
                <br/>
                <input type="url" name="coverImageUrl" value={formData.coverImageUrl} onChange={handleChange}/>
                <br/>
                <br/>
                <button>Submit</button>

            </form>
        </div>
    )
}

export default AddBooks