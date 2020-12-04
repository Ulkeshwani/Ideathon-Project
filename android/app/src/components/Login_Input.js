import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import * as yup from "yup";
import { Formik } from "formik";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Login_Input = ({ navigation, user }) => {
  const LoginValidationSchema = yup.object({
    Email: yup.string().required("This is Required*").email(),
    Password: yup.string().required("This is Required*"),
  });
  const Login = () => {};
  return (
    <View>
      <Formik
        initialValues={{
          Email: "",
          Password: "",
        }}
        validationSchema={LoginValidationSchema}
        onSubmit={(values, action) => {
          action.resetForm();
          navigation.replace("Dashboard");
          console.log(values);
        }}
      >
        {(formikprops) => (
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              <Text style={styles.LoginText}>LOGIN</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={formikprops.handleChange("Email")}
                value={formikprops.values.Email}
                placeholder="Email"
                keyboardType={"email-address"}
              />
              <Text style={styles.ErrorMsg}>{formikprops.errors.Email}</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Password"
                onChangeText={formikprops.handleChange("Password")}
                value={formikprops.values.Password}
                secureTextEntry={true}
              />
              <Text style={styles.ErrorMsg}>{formikprops.errors.Password}</Text>
              <TouchableOpacity
                style={styles.Login}
                onPress={formikprops.handleSubmit}
              >
                <Text style={{ color: "white" }}>Login</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        )}
      </Formik>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 200,
  },
  textInput: {
    backgroundColor: "#e8e8e8",
    width: "80%",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  Login: {
    backgroundColor: "dodgerblue",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 100,
    margin: 10,
  },
  ErrorMsg: {
    color: "red",
  },
  LoginText: {
    color: "dodgerblue",
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 15,
  },
});
export default Login_Input;
