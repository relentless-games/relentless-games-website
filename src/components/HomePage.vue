<template>
    <div class="wrapper">
      <div class="container">
        <div class="top-right drop-shadow video-container">
        <iframe
          src="https://www.youtube.com/embed/y_CSRU-1_HY?autoplay=1&mute=1&loop=1&playlist=y_CSRU-1_HY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
        </iframe>
      </div>
        <div class="top-left drop-shadow">
          <video autoplay loop muted>
            <source src="videos/Slydle.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="bottom-left drop-shadow background-image-container">
          <div class="profile-container">
            <h2>Mike</h2>
            <p>Mike has over five years of marketing and design experience in agencies and gaming startups. He designs, markets, and does business development. He's probably busy networking right now!</p>
          </div>
          <div class="profile-container">
            <h2>Gareth</h2>
            <p>Gareth has over 15 years of experience in full stack development for games and web applications. They code and manage projects. They're probably busy typing right now!</p>
          </div>
      </div>
        <div class="bottom-right drop-shadow">
          <div class="content-wrapper">
            <div class="qr-code-container">
              <a href="https://sprouter.app/relentlessgames" target="_blank" class="links">
                <img src="images/link-tree-qr.png" alt="QR code" class="qr-code" />
              </a>
              <a href="https://sprouter.app/relentlessgames" target="_blank" class="links">Links</a>
          </div>          
      <div class="contact-info">
        <div class="contact-item">
          <h3>Michael Gallegos</h3>
          <i>Business</i><br /><br />
          <a href="mailto:m@relentless.games">m@relentless.games</a><br />
          <a href="https://www.linkedin.com/in/mgallegos91/" target="_blank">LinkedIn/Michael</a>
        </div>
        <div class="contact-item">
          <h3>Gareth Griffiths</h3>
          <i>Software</i><br /><br />
          <a href="mailto:g@relentless.games">g@relentless.games</a><br />
          <a href="https://www.linkedin.com/in/gngriffiths/" target="_blank">LinkedIn/Gareth</a>
        </div>
      </div>
      <div class="logo-container">
        <img src="images/Relentless_Games_Logo.png" alt="Relentless Games logo of a gorilla wearing a VR headset" class="logo" />
      </div>
    </div>
  </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage'
  }
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  .background-image-container {
  background-image:url("~@/assets/images/Relentless_Games_Team.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: space-between; /* Ensures the containers are positioned left and right */
  align-items: center;
  padding: 5%;
  overflow: hidden;
}

.profile-container {
  height: 90%;
  background-color: rgba(159, 239, 251, 0.7);
  padding: 2%; /* Reduce padding to avoid too much space on the sides */
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;

  width: 25%; /* Adjust width to be more readable */
  margin: 10px 0 0;
  font-size: 1em; /* Increase text size */
}

.profile-container h2 {
  font-size: 1.5em; /* Larger header for better readability */
}

.profile-container p {
  font-size: 1em; /* Standardize paragraph size */
}

  .video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* This maintains a 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

  .wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5vw;
    box-sizing: border-box;
    background-color: #9feffb;
  }
  
  .container {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1vw;
    box-sizing: border-box;
  }
  
  .container > div {
    overflow: hidden;
    position: relative;
  }
  
  .top-left { grid-area: 1 / 1 / 2 / 2; }
  .top-right { grid-area: 1 / 2 / 2 / 3; }
  .bottom-left { grid-area: 2 / 1 / 3 / 2; }
  .bottom-right {
  grid-area: 2 / 2 / 3 / 3;
  padding: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.content-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: left;
  justify-content: space-between;
}

.contact-info {
  flex: 1;
  text-align: center;
}

.drop-shadow {
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  border-radius: 8px; 
  overflow: hidden; 
}

.qr-code-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
}

.qr-code {
  max-width: 80%;
  height: auto;
  margin-bottom: 10px; 
}

.links {
  text-align: center;
  font-size: 16px; 
  margin-top: 10px; 
}

.logo-container {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.logo {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
}

/* All fonts */
* {
  font-family: 'Roboto', sans-serif;
}

body, .contact-item h3, .contact-item a {
  font-family: 'Roboto', sans-serif;
  color: #250057;
}

.contact-item {
  margin-bottom: 20px;
}

.contact-item:last-child {
  margin-bottom: 0;
}

.contact-item h3 {
  margin: 1% 0;
  font-size: clamp(14px, 2.5vw, 18px);
  color: 250057;
}

a {
  font-family: 'Roboto', sans-serif !important;
  color: orange !important;  
  text-decoration: none;
}


@media (max-width: 768px) {
  
  .top-left, .bottom-left {
    display: none;
  }
  .wrapper {
    position: static;
    min-height: 100vh;
    padding: 5vw;
  }

  .background-image-container {
    flex-direction: column;
    justify-content: center;
  }

  .container {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, auto);
    gap: 5vw;
    height: auto;
  }

  .top-left, .top-right, .bottom-left {
    aspect-ratio: 16 / 9;
  }

  .bottom-right {
    aspect-ratio: auto;
    padding: 10vw 5vw;
  }

  .content-wrapper {
    flex-direction: column;
  }

  .contact-info, .qr-code-container, .logo-container {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }

  .logo-container {
    justify-content: center;
  }

  .qr-code {
    max-width: 50%;
  }

  .logo {
    max-width: 70%;
    max-height: 200px;
  }
}
</style>