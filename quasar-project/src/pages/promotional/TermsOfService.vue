<template>
  <q-page class="terms-page">
    <div class="container">
      <h1>Terms of Service</h1>
      <p class="last-updated">Last Updated: March 15, 2025</p>
      
      <div class="terms-content">
        <section>
          <h2>Introduction</h2>
          <p>Welcome to FoFo's Super Tic-Tac-Toe. These Terms of Service ("Terms") govern your use of our game application and services. By downloading, installing, or using our game, you agree to be bound by these Terms.</p>
        </section>
        
        <section>
          <h2>License</h2>
          <p>We grant you a limited, non-exclusive, non-transferable, revocable license to use our application for your personal, non-commercial purposes. You may not:</p>
          <ul>
            <li>Modify, reverse engineer, decompile, or disassemble the application</li>
            <li>Remove any copyright, trademark or other proprietary notices</li>
            <li>Transfer, sublicense, lease, lend, rent or otherwise distribute the application to any third party</li>
            <li>Use the application in any way that violates any applicable laws or regulations</li>
          </ul>
        </section>
        
        <section>
          <h2>Updates and Modifications</h2>
          <p>We may from time to time develop patches, updates, upgrades, or other modifications to improve the application. You agree that we may update the application automatically without notice to you.</p>
        </section>
        
        <section>
          <h2>Intellectual Property</h2>
          <p>The application, including all content, features, and functionality, is owned by us and is protected by copyright, trademark, and other intellectual property laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.</p>
        </section>
        
        <section>
          <h2>User Conduct</h2>
          <p>You agree not to use the application to:</p>
          <ul>
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe the rights of any third party, including intellectual property, privacy, or publicity rights</li>
            <li>Engage in any activity that could disable, overburden, or impair the proper function of the application</li>
            <li>Attempt to gain unauthorized access to any portion of the application or any systems or networks connected to it</li>
          </ul>
        </section>
        
        <section>
          <h2>Disclaimer of Warranties</h2>
          <p>THE APPLICATION IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
        </section>
        
        <section>
          <h2>Limitation of Liability</h2>
          <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL DAMAGES, OR ANY DAMAGES WHATSOEVER INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF USE, DATA, OR PROFITS, ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OR PERFORMANCE OF THE APPLICATION.</p>
        </section>
        
        <section>
          <h2>Changes to the Terms</h2>
          <p>We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last Updated" date. You are advised to review these Terms periodically for any changes.</p>
        </section>
        
        <section>
          <h2>Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at:</p>
          <p>legal@fofo-super-tictactoe.example.com</p>
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
  name: 'TermsOfService'
});
</script>

<style scoped>
.terms-page {
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

.terms-content {
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