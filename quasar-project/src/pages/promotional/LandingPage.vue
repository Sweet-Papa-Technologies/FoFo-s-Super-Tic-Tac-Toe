<template>
  <q-page class="landing-page">
    <div class="header">
      <div class="logo-container">
        <img src="assets/images/logo/game-logo.png" alt="FoFo's Super Tic-Tac-Toe" class="logo-image">
      </div>
      <h1 class="title">FoFo's Super Tic-Tac-Toe</h1>
      <p class="subtitle">Tic-Tac-Toe with a twist - win mini-games to claim squares!</p>
    </div>
    
    <div class="content-section">
      <div class="game-description">
        <h2>About the Game</h2>
        <p>FoFo's Super Tic-Tac-Toe takes the classic game to the next level by combining it with exciting mini-games. 
        To claim a square on the board, you'll need to beat your opponent in one of five different mini-games:</p>
        
        <div class="mini-games">
          <div class="mini-game">
            <div class="mini-game-icon reaction-icon"></div>
            <h3>Reaction Challenge</h3>
            <p>Test your reflexes with perfect timing</p>
          </div>
          
          <div class="mini-game">
            <div class="mini-game-icon memory-icon"></div>
            <h3>Memory Match</h3>
            <p>Find matching pairs faster than your opponent</p>
          </div>
          
          <div class="mini-game">
            <div class="mini-game-icon runner-icon"></div>
            <h3>Speed Runner</h3>
            <p>Race to the finish while avoiding obstacles</p>
          </div>
          
          <div class="mini-game">
            <div class="mini-game-icon math-icon"></div>
            <h3>Quick Math</h3>
            <p>Solve math problems with speed and accuracy</p>
          </div>
          
          <div class="mini-game">
            <div class="mini-game-icon shooter-icon"></div>
            <h3>Target Shooter</h3>
            <p>Tap targets quickly for maximum points</p>
          </div>
        </div>
      </div>
      
      <div class="cta-section">
        <h2>Get Started Now!</h2>
        <div class="download-buttons">
          <q-btn color="primary" size="lg" class="download-btn" icon-right="fab fa-android" to="/game">
            Play Now
          </q-btn>
          <q-btn color="secondary" size="lg" class="download-btn" icon-right="fab fa-apple" disabled>
            Coming to iOS
          </q-btn>
          <q-btn color="accent" size="lg" class="download-btn" icon-right="fab fa-google-play" disabled>
            Coming to Google Play
          </q-btn>
        </div>
      </div>
    </div>
    
    <div class="footer">
      <div class="links">
        <router-link to="/privacy">Privacy Policy</router-link>
        <router-link to="/terms">Terms of Service</router-link>
      </div>
      <p class="copyright">© {{ new Date().getFullYear() }} FoFo's Super Tic-Tac-Toe - All rights reserved</p>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LandingPage'
});
</script>

<style scoped>
.landing-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  font-family: 'Arial', sans-serif;
  padding: 2rem;
}

.header {
  text-align: center;
  padding: 2rem 0;
}

.logo-container {
  margin-bottom: 1rem;
}

.logo-image {
  max-width: 300px;
  height: auto;
}

.title {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #e0e0e0;
}

.content-section {
  max-width: 1200px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  backdrop-filter: blur(10px);
}

.game-description {
  margin-bottom: 3rem;
}

.game-description h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #fff;
}

.game-description p {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.mini-games {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
}

.mini-game {
  flex: 0 0 calc(20% - 2rem);
  min-width: 200px;
  text-align: center;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 1.5rem;
  transition: transform 0.3s ease;
}

.mini-game:hover {
  transform: translateY(-10px);
}

.mini-game-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1rem;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
}

.mini-game h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #fff;
}

.mini-game p {
  font-size: 1rem;
  color: #e0e0e0;
}

.cta-section {
  text-align: center;
  margin: 3rem 0;
}

.cta-section h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #fff;
}

.download-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.download-btn {
  min-width: 200px;
}

.footer {
  text-align: center;
  padding: 2rem 0;
  margin-top: 2rem;
}

.links {
  margin-bottom: 1rem;
}

.links a {
  color: #e0e0e0;
  margin: 0 1rem;
  text-decoration: none;
  transition: color 0.3s ease;
}

.links a:hover {
  color: #fff;
  text-decoration: underline;
}

.copyright {
  font-size: 0.9rem;
  color: #c0c0c0;
}

@media (max-width: 768px) {
  .landing-page {
    padding: 1rem;
  }
  
  .title {
    font-size: 2rem;
  }
  
  .subtitle {
    font-size: 1.2rem;
  }
  
  .mini-game {
    flex: 0 0 calc(50% - 2rem);
  }
  
  .download-btn {
    min-width: auto;
    width: 100%;
    margin-bottom: 1rem;
  }
}
</style>