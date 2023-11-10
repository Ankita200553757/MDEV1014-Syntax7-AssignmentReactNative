
import FirebaseAuthService from './FirebaseAuthService';

class AuthViewModel {
  async signUp(email, password) {
    try {
      await FirebaseAuthService.signUp(email, password);
      // User signed up successfully
      return true;
    } catch (error) {
      // Handle signup error
      console.error('Sign Up Error:', error);
      throw error;
    }
  }

  async signIn(email, password) {
    try {
      await FirebaseAuthService.signIn(email, password);
      return true;
    } catch (error) {
      console.error('Sign In Error:', error);
      throw error;
    }
  }
}

export default new AuthViewModel();
