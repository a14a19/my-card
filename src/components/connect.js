const links = [
    {
        url: 'https://github.com/a14a19',
        icon: 'fa-brands fa-github'
    },
    {
        url: 'https://www.linkedin.com/in/anas-ahmed-3b927913a/',
        icon: 'fa-brands fa-linkedin-in'
    },
    {
        url: 'https://twitter.com/a_14_a_19',
        icon: 'fa-brands fa-twitter'
    },
    {
        url: 'https://www.instagram.com/anas_a14a19/',
        icon: 'fa-brands fa-instagram'
    },
    {
        url: 'https://www.facebook.com/profile.php?id=100063229659168',
        icon: 'fa-brands fa-facebook-f'
    }
]

const social = links.map((link, i) =>{
    return (
        <a 
            href={link.url} 
            target='_blank' 
            rel='noreferrer' 
            key={i}
            className='connect-icon'
        >
            <i className={link.icon}></i>
        </a>
    )
})

function Connect() {
    return (
        <div className="connect">
            <div className='connect-sub'>
                <span>
                    Let's connect
                </span>
                <i className="fa-solid fa-angle-right"></i>
            </div>
            <div>
                {social}
            </div>
        </div>
    )
}

export default Connect;