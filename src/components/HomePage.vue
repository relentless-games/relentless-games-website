<template>
    <div class="wrapper">
      <div class="container">
            <div class="top-left drop-shadow">
                <video autoplay loop muted>
                <source src="videos/TestVideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
                </video>
            </div>
            <div class="top-right drop-shadow">
                <video autoplay loop muted>
                <source src="videos/TestVideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
                </video>
            </div>
            <div class="bottom-left drop-shadow">
                <video autoplay loop muted>
                <source src="videos/TestVideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
                </video>
            </div>
            <div class="bottom-right drop-shadow">
                <img src="images/Relentless_Games_Logo.png" alt="Relentless Games logo of a gorilla wearing a VR headset" class="logo" />
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

.top-left {
  grid-area: 1 / 1 / 2 / 2;
}

.top-right {
  grid-area: 1 / 2 / 2 / 3;
}

.bottom-left {
  grid-area: 2 / 1 / 3 / 2;
}

.bottom-right {
  grid-area: 2 / 2 / 3 / 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5%;
}

.logo {
  max-width: 80%;
  max-height: 40%;
  width: auto;
  height: auto;
  object-fit: contain;
}

.contact-info {
  margin-top: 5%;
  width: 100%;
}

body, .contact-item h3, .contact-item a {
  font-family: 'Roboto', sans-serif;
  color: #250057;
  
}

.contact-item {
  margin-top: 2%;
  text-align: center;
}

.contact-item h3 {
  margin: 1% 0;
  font-size: clamp(14px, 2.5vw, 18px);
}

.contact-item a {
  color: #42b983;
  text-decoration: none;
  font-size: clamp(12px, 2vw, 16px);
}

a {
  color: #d10065 !important; 
}

.drop-shadow {
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  border-radius: 8px; /* Optional: adds rounded corners */
  overflow: hidden; /* Ensures the video doesn't overflow the rounded corners */
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block; /* Removes any extra space below the video */
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

  video {
    position: static;
  }

  .logo {
    max-width: 70%;
    max-height: none;
  }
}

.contact-info {
  margin-top: 5%;
  width: 100%;
}

.contact-info h2 {
  margin: 2% 0;
  font-size: clamp(16px, 4vw, 24px);
}

.contact-item {
  margin-top: 2%;
  text-align: center;
}

.contact-item h3 {
  margin: 1% 0;
  font-size: clamp(14px, 3vw, 18px);
}

.contact-item a {
  color: #42b983;
  text-decoration: none;
  font-size: clamp(12px, 2.5vw, 16px);
}


/* Ensure videos fill their containers */
video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 768px) {
  .wrapper {
    padding: 5vw;
    align-items: flex-start;
  }

  .container {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, auto);
    gap: 5vw;
  }

  .top-left, .top-right, .bottom-left {
    aspect-ratio: 16 / 9;
  }

  .bottom-right {
    padding: 5vw;
  }

  .logo {
    max-width: 50%;
    height: auto;
  }

  video {
    height: 100%;
    object-fit: cover;
  }
}
</style> 