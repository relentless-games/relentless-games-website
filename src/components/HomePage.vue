<template>
    <div class="wrapper">
      <div class="container">
        <div class="top-right drop-shadow">
          <video autoplay loop muted>
            <source src="videos/TestVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="top-left drop-shadow">
          <video autoplay loop muted>
            <source src="videos/Slydle.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="bottom-left drop-shadow">
          <video autoplay loop muted>
            <source src="videos/Mapping.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="bottom-right drop-shadow">
    <div class="content-wrapper">
        <div class="qr-code-container">
        <img src="images/link-tree-qr.png" alt="QR code" class="qr-code" />
        <a href="https://linktr.ee/relentlessgames" target="_blank" class="linktree-link">LinkTree</a>
      </div>
      <div class="contact-info">
        <div class="contact-item">
          <h3>Gareth Griffiths</h3>
          <a href="mailto:g@relentless.games">g@relentless.games</a><br />
          <a href="https://www.linkedin.com/in/gngriffiths/" target="_blank">LinkedIn/Gareth</a>
        </div>
        <div class="contact-item">
          <h3>Michael Gallegos</h3>
          <a href="mailto:m@relentless.games">m@relentless.games</a><br />
          <a href="https://www.linkedin.com/in/mgallegos91/" target="_blank">LinkedIn/Michael</a>
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
  align-items: center;
  justify-content: space-between;
}

.contact-info {
  flex: 1;
  text-align: center;
}

.drop-shadow {
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  border-radius: 8px; /* Optional: adds rounded corners */
  overflow: hidden; /* Ensures the video doesn't overflow the rounded corners */
}


.qr-code-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo-container {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.qr-code {
  max-width: 80%;
  height: auto;
  margin-bottom: 10px;
}


.logo {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
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
  .wrapper {
    position: static;
    min-height: 100vh;
    padding: 5vw;
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