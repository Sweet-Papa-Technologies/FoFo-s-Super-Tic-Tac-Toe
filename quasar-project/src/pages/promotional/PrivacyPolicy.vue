<template>
  <q-page class="policy-page">
    <div class="container">
      <h1>Privacy Policy</h1>
      <p class="last-updated">Last Updated: March 15, 2025</p>
      
      <div class="policy-content">
        <section>
          <h2>Introduction</h2>
          <p>Welcome to FoFo's Super Tic-Tac-Toe. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you use our game and tell you about your privacy rights.</p>
        </section>
        
        <section>
          <h2>Data We Collect</h2>
          <p>The app collects minimal data necessary for its operation:</p>
          <ul>
            <li>Game progress and settings, stored locally on your device</li>
            <li>Basic usage statistics to help us improve the game</li>
          </ul>
          <p>We do not collect any personally identifiable information.</p>
        </section>
        
        <section>
          <h2>How We Use Your Data</h2>
          <p>We use the collected data solely to:</p>
          <ul>
            <li>Provide and maintain our service</li>
            <li>Improve and optimize the game experience</li>
            <li>Understand how users interact with our application</li>
          </ul>
        </section>
        
        <section>
          <h2>Data Storage</h2>
          <p>Your game progress and settings are stored locally on your device. We do not transmit or store this data on our servers.</p>
        </section>
        
        <section>
          <h2>Third-Party Services</h2>
          <p>Our game may use third-party services that may collect information used to identify you. We recommend reviewing the privacy policies of these third-party services:</p>
          <ul>
            <li>Google Play Services (for Android versions)</li>
            <li>Apple App Store (for iOS versions)</li>
          </ul>
        </section>
        
        <section>
          <h2>Children's Privacy</h2>
          <p>Our application does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13.</p>
        </section>
        
        <section>
          <h2>Changes to This Privacy Policy</h2>
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>
        </section>
        
        <section>
          <h2>Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p>privacy@fofo-super-tictactoe.example.com</p>
        </section>
      </div>
      
      <div class="navigation">
        <router-link to="/" class="q-btn q-btn-item non-selectable q-btn--standard q-btn--rectangle q-btn--actionable q-focusable q-hoverable q-btn--no-uppercase q-btn--wrap">
          Back to Home
        </router-link>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PrivacyPolicy'
});
</script>

<style scoped>
.policy-page {
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 2rem;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #1e3c72;
  text-align: center;
  margin-bottom: 0.5rem;
}

.last-updated {
  text-align: center;
  color: #666;
  margin-bottom: 2rem;
  font-style: italic;
}

.policy-content {
  line-height: 1.6;
}

section {
  margin-bottom: 2rem;
}

h2 {
  color: #2a5298;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eee;
}

ul {
  padding-left: 1.5rem;
}

.navigation {
  margin-top: 2rem;
  text-align: center;
}
</style>