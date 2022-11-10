import userImg from './img/anas.png'

function Profile() {
    return (
        <div className="profile">
            <img src={userImg} alt='User-Pic' className='profile-img'/>
            <div className='name-text rounded-4'>Hi, I'm 
                <span className='name'>Anas!</span></div>
            <h1 className='front-end'>
                Front End Developer
            </h1>
        </div>
    )
}

export default Profile;