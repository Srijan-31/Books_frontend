import useFetch from "../useFetch"
import {useState} from "react"
const Books=()=>{
    const[successMessage,setSuccessMessage]=useState("")
    const {data,loading,error}=useFetch("https://books-opal-three.vercel.app/books")
    // console.log(data)
    if(loading) return <p>Loading...</p>
    if(!data || data.length===0) return <p>No book found.</p>

    const handleDelete=async (bookId)=>{
        try{
            const response=await fetch(`https://books-opal-three.vercel.app/books/${bookId}`,
                {
                method:"DELETE"
                },
            )
            if(!response.ok){
                throw "Failed to delete Book."
            }

            const data=await response.json()
            if(data){
                setSuccessMessage("Book deleted successfully.")
                window.location.reload()
            }
            
        }catch(error){
            console.log(error)
        }
    }

    return(
        <div>
            <h1>All Books</h1>
            <ul>
                {data?.map(book=>(
                    <li key={book._id}>{book.title}<button onClick={()=>handleDelete(book._id)}>Delete</button></li>
                ))}
            </ul>
            <p>{successMessage}</p>
        </div>
    )
}

export default Books