import { useState } from "react";

// UPDATE using AlbumUpdate 
export default function AlbumUpdate(props){

    const{selectId,albums,setAlbums,setUpdate,title}=props;
    const[updateTitle,setUpdateTitle]=useState('');
    const[updateId,setUpdateId]=useState(''); 
  // ========================================================
  // handle update function for update button
  // ========================================================
   function handleUpdate(){
    
    if(selectId<=100){
      
    const updateAlbum=albums.map((albm)=>
    albm.id===selectId?{...albm, id:selectId, title:updateTitle==''?albm.title:updateTitle,userId:updateId}:albm);
  //  =====================================
  // PUT method for Put updated data in API
  // ======================================
    fetch(`https://jsonplaceholder.typicode.com/albums/${selectId}`,
       {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateAlbum),
      })
      .then(response=>response.json())
      .then(()=>{
        setAlbums(updateAlbum)
      });
      setUpdate(false);
   }
  
   else if(selectId>100) {

   let updateAlbumdata= albums.map((albm)=>
    albm.id===selectId?{...albm, id:selectId, title:updateTitle,userId:updateId}:albm)
    setAlbums(updateAlbumdata);
    setUpdate(false);
  }
  alert("Update Successfully done");
}
   
    return(
    <>
{/* input form for Update List data */}
<div className="UpdateForm">
<div className="form-container">
     <label>Update Title:&nbsp;{title}
     <input value={updateTitle} onChange={(e)=>setUpdateTitle(e.target.value)}/>
      </label>
      
    <label>Update Id
    <input value={updateId} onChange={(e)=>setUpdateId(e.target.value)}/>
       </label>
      
       <button onClick={handleUpdate}>Update</button>
       </div>
       </div>
    </>
    )
}