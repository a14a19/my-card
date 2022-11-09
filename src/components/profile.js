import userImg from './img/anas.png'

function Profile() {
    return (
        <div className="profile">
            <img src={userImg} alt='User-Pic' className='profile-img'/>
            <h1>Anas Ahmed</h1>
            <h2>
                Front End Developer
            </h2>
        </div>
    )
}

export default Profile;