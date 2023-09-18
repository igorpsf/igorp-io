import React from 'react';

const Home = () => {

    return (
        <div style={{ alignSelf: "stretch" }}>
            <h1 style={{ textAlign: 'center' }}>Hi 👋, I'm Igor Postnikov</h1>
            <h3 style={{ textAlign: 'center' }}>A passionate frontend developer from Mountain View, California</h3>
            <br/>
            <div style={{ paddingRight: '300px' }}>
                <img
                    style={{ float: 'right' }}
                    className="avatar rounded-2 avatar-user"
                    src="https://avatars.githubusercontent.com/u/26352039?s=400&u=ff47db5725a8017a979d1cf72aeb5832525f00dc&v=4"
                    width="400"
                    height="400"
                    alt="@igorpsf"
                />
            </div>

            <ul style={{ paddingLeft: '300px' }}>
                <li>👨‍💻 All of my projects are available at <a href="https://igorp.io/projects">igorp.io/projects</a></li>
                <li>📫 How to reach me <a href="mailto:igor.postnikov8@gmail.com">igor.postnikov8@gmail.com</a></li>
                <li><img src="https://icons.iconarchive.com/icons/limav/flat-gradient-social/128/Linkedin-icon.png" width="22" height="22" alt="Linkedin"></img> Connect with me: <a href="https://www.linkedin.com/in/igorpostnikov/">www.linkedin.com/in/igorpostnikov</a></li>
            </ul>

        </div>
    );
};

export default Home;