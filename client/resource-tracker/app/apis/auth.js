import apiClient from "./client";
import { View, TextInput, Button, Alert } from 'react-native';


const signIn = (payload) => {
    return apiClient.post("/users/signin", payload);
};

const signUp = (payload) => {
    console.log(payload.password)
    const strongPasswordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!strongPasswordPattern.test(payload.password)) {
      Alert.alert(
        'Error',
        'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.'
      );
      return {
        res : {
            ok: false,
            data: ""
        }
      };
    }
    return apiClient.post("/users/signup", payload);
};

export { signIn, signUp };
