import { useState } from "react"

// post album using AlbumPost component
export default function AlbumPost(props){
const{albums,setAlbums,setPost}=props;
const[title,setTitle]=useState('');
const[userID,setID]=useState('');
function handlePost(){
if(title.trim()==='')
{
    return;
}

if(userID==='')
{
    return;
}
// newAlbum object for new post 
const maxId = albums.reduce((max, album) => Math.max(max, album.id), 0);

// Generate a new ID that is one greater than the maximum
const newId = maxId + 1;
const newAlbum={
    userId:userID,
        id:newId,
        title: title,

}


// method:POST fetch for post newAlbum
fetch('https://jsonplaceholder.typicode.com/albums',
{
    method:'POST',
   headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newAlbum),
}
)
.then(response=>response.json())
.then(()=>{
    setAlbums(prevAlbums => [newAlbum,...prevAlbums]);
    setPost(false);
})
alert("New Album added successfully");
}

    return(
    <>
    {/*input form for post title id */}
    <div className="postForm">
    <label>Title:
    <input value={title} placeholder="Enter Title" onChange={(e)=>setTitle(e.target.value)}/>
    </label>  
    
    <label>Id:
    <input value={userID} placeholder="Enter Id" id='useID' onChange={(e)=>setID(e.target.value)}/>
     </label>  
    <button onClick={handlePost}>Post Album</button>
    </div>
    </>
    )
}