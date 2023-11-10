
import auth from '@react-native-firebase/auth';

class FirebaseAuthService {
  async signUp(email, password) {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      return true;
    } catch (error) {
      console.error('Sign Up Error:', error);
      throw error;
    }
  }

  async signIn(email, password) {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      return true;
    } catch (error) {
      console.error('Sign In Error:', error);
      throw error;
    }
  }
}

export default new FirebaseAuthService();
