import React, { useState, useEffect } from 'react';
// import './AlbumList.css';
// AlbumGet component GET album list 
export default function AlbumGet(props) {
  const {albums, setAlbums,setTitle} = props;
  const{setSelectId,setUpdate,handleDeleteAlbum}=props;
console.log("AlbumApi check it",albums);
  const [error, setError] = useState(null);

// use effect hook for component did mount then album list get
  useEffect(() => {
   
      fetch('https://jsonplaceholder.typicode.com/albums')
           .then(response=>response.json())
           .then(resultData=>{setAlbums(resultData)})
  .catch(error=>{setError(error);})
  }, []);

  // ======== Handle update function ============
function handleupdate(selectuseId,newtitle)
{
  setSelectId(selectuseId);
  setTitle(newtitle);
setUpdate(true);

}

return (
  <div className="album-container">
    <div>
      
     {/* Show Album list using list tag */}
        <ul className="album-list">
          {albums.map((album,index) => (
            <li
            className={`album-item ${index % 2 === 0 ? 'green' : 'blue'}`}
            key={index}
          >
             <h3 className="album-title">{album.title}</h3>
             <div className="album-buttons">
              {/* set button for album list delete update */}
              <button className="album-update" onClick={() => handleupdate(album.id,album.title)}>Edit</button>
              <button className="album-delete" onClick={() => handleDeleteAlbum(index)}>Delete</button>
            </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

          }
