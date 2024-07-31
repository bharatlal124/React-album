import React, { useState, useEffect } from 'react';
// import all the compnent
import AlbumPost from './components/AlbumPost';
import AlbumUpdate from './components/AlbumUpdate';
import AlbumGet from './components/AlbumGet';
import AlbumDelete from './components/AlbumDelete';
function App() {
  // make the variable and initialize using state Hook
  const [albums, setAlbums] = useState([]);
  const[selectId,setSelectId]=useState(null);
  const[update,setUpdate]=useState(false);
  const[title,setTitle]=useState('');
  const[post,setPost]=useState(false);
  const[deleted,setDelete]=useState(false);
  const[deletId,setDeletId]=useState('');
  // use Effect Hook 
  useEffect(() => {
    fetchAlbums();
  }, []);
// fetch function get album list data
  const fetchAlbums = async () => {
    try {
      const albumsdatas = await fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then((json) => json);
       setAlbums(albumsdatas);
    } catch (error) {
      console.error('Error fetching albums:', error);
    }
  }

//  ====================================================================================
//  Handle delete function create for make setDelete true and Albumdelete component render
// ====================================================================================
  function handleDeleteAlbum(index) {
  console.log("from app.js",index);
  setDeletId(index)
  setDelete(true);
  alert("Delete Successfully done");
}

  return (
    <>
    <div className='navbar'>
   <h2>Albums List</h2>
    {/* ==========================================================
        Post possible using Add Album Button
    ============================================================== */}
    
   <button onClick={(e)=>setPost(true)}>+ Add Album</button>
    </div>
    
    {/*============================================================
       Delete possible using AlbumDelete component
       Post possible using AlbumPost component
       update possible using AlbumUpdate component
    =============================================================== */}
    {deleted && <AlbumDelete albums={albums} setAlbums={setAlbums} setDelete={setDelete} deletId={deletId}/> }
     
  {post && <AlbumPost albums={albums} setAlbums={setAlbums} post={post} setPost={setPost}/>}
   {update && <AlbumUpdate selectId={selectId} title={title} albums={albums} setUpdate={setUpdate} setAlbums={setAlbums}/>}
   
    {/* Get or Fetch Album list using AlbumGet component */}
    <AlbumGet albums={albums} setDeletId={setDeletId} setAlbums={setAlbums} update={update} handleDeleteAlbum={handleDeleteAlbum} deleted={deleted} setUpdate={setUpdate} setTitle={setTitle} setDelete={setDelete} selectId={selectId} setSelectId={setSelectId}/>

   
    </>
  );
}

export default App;
