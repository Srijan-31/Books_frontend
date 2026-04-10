import useFetch from "../useFetch"

const BooksByAuthor=({author})=>{
    const{data,loading,error}=useFetch(`https://books-opal-three.vercel.app/books/author/${author}`)
    // console.log(data)
    if(loading) return <p>Loading...</p>
    if(!data || data.length===0) return <p>No book found.</p>
    
    return (
        <div>
            <h1>Book by {data[0]?.author}</h1>
            <ul>
                {data?.map(book=>(
                    <li>{book.title}</li>
                ))}
            </ul>
        </div>
    )
    
}
export default BooksByAuthor