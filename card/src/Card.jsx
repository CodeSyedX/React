import gigiImage from './assets/gigi.webp'; // Adjust the path as needed


function Card(){
return (<div className="card">
 <img className ="img" src={gigiImage} alt="Profile picture" />
    <h2 className='heading'>Aafreen</h2>
    <p className='explain'>I am a student and nothing more </p>

</div>
);
}

export default Card