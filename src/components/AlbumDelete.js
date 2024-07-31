export default function AlbumDelete(props)
{ 
    const{setDelete,albums,setAlbums,deletId}=props;
 
      // DELETE method for delete list data
  fetch(`https://jsonplaceholder.typicode.com/albums/${deletId}`,{
      method:'DELETE'
  })
  .then((response) => response.json());
  
    let newAlbm=albums.filter( (albm,indx)=>indx!==deletId );
  // sel new album
  setAlbums(newAlbm);
  setDelete(false);
  
}
