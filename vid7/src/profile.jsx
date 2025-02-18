

function ProfilePicture (){

    const imageUrl  = '\\src\\assets\\gigi.webp';
    const handleClick = (e) => e.target.style.display = "none";
    return (<img  onClick={(e) =>handleClick(e)} src= {imageUrl} className="pic"></img>)
     
}
export default ProfilePicture;