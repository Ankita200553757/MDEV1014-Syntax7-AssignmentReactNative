// AuthViewModel.js
import axios from 'axios';

class AuthViewModel {
  async signUp(email, password, username) {
    try {
      const response = await axios.post('http://10.0.0.68:3000/api/signup', { email, password, username});
      // Handle the response and update the UI accordingly
      return true;
    } catch (error) {
      // Handle signup error
      console.error('Sign Up Error:', error);
      throw error;
    }
  }

  async signIn(username, password) {
    try {
      const response = await axios.post('http://10.0.0.68:3000/api/login', { username, password });
      // Handle the response and update the UI accordingly
      console.log('Sign In Response:', response.data);
      return true;
    } catch (error) {
      // Handle sign-in error
      console.error('Sign In Error:', error);
      throw error;
    }
  }
}

export default new AuthViewModel();
