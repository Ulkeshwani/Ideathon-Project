import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Alert,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import * as firebase from "firebase";
import { color } from "react-native-reanimated";

export default class Registration_Input extends Component {
  componentDidMount() {
    const currentUser = firebase.database().ref("Users");
    currentUser.on("value", (DataSnap) => {
      console.log(DataSnap.val());
    });
  }
  RegistrationValidationSchema = yup.object({
    Email: yup.string().required("This is Required*").email(),
    FullName: yup.string().required("This is Required*"),
    MobNo: yup
      .string()
      .required("This is Required*")
      .min(10, "Mobile Number Must Be 10 Digit Longer"),
    Create_Password: yup
      .string()
      .required("This is Required*")
      .min(8, "Must Contain 8 Combination of Symbols , Letters And Numbers"),
    Confirm_Password: yup
      .string()
      .required("This Should Be Same As Your Above Paswword "),
    AadharNo: yup.string().required("Your Aadhar No. is Required").min(12),
  });
  render() {
    return (
      <View>
        <Formik
          initialValues={{
            FullName: "",
            Email: "",
            Create_Password: "",
            Confirm_Password: "",
            AadharNo: "",
          }}
          validationSchema={this.RegistrationValidationSchema}
          onSubmit={(values, action) => {
            if (values.Create_Password === values.Confirm_Password) {
              action.resetForm();
              const Registration = firebase.database().ref("User");
              Registration.push({
                FullName: values.FullName,
                Email: values.Email,
                MobNo: values.MobNo,
                Create_Password: values.Create_Password,
                Confirm_Password: values.Confirm_Password,
                AadharNo: values.AadharNo,
                time: Date.now(),
              });
            } else {
              return Alert.alert("Registration", "Password Must be Matched");
            }
          }}
        >
          {(formikprops) => (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <ScrollView>
                <View style={styles.container}>
                  <Text style={styles.LoginText}>Registration</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={formikprops.handleChange("FullName")}
                    value={formikprops.values.FullName}
                    placeholder="Full Name"
                  />
                  <Text style={styles.ErrorMsg}>
                    {formikprops.errors.FullName}
                  </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Mobile Bumber"
                    onChangeText={formikprops.handleChange("MobNo")}
                    value={formikprops.values.MobNo}
                    keyboardType={"numeric"}
                  />
                  <Text style={styles.ErrorMsg}>
                    {formikprops.errors.MobNo}
                  </Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={formikprops.handleChange("Email")}
                    value={formikprops.values.Email}
                    placeholder="Email"
                    keyboardType={"email-address"}
                  />
                  <Text style={styles.ErrorMsg}>
                    {formikprops.errors.Email}
                  </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Create-Password"
                    onChangeText={formikprops.handleChange("Create_Password")}
                    value={formikprops.values.Create_Password}
                    secureTextEntry={true}
                  />
                  <Text style={styles.ErrorMsg}>
                    {formikprops.errors.Create_Password}
                  </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Confirm-Password"
                    onChangeText={formikprops.handleChange("Confirm_Password")}
                    value={formikprops.values.Confirm_Password}
                    secureTextEntry={true}
                  />
                  <Text style={styles.ErrorMsg}>
                    {formikprops.errors.Confirm_Password}
                  </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Aadhar No."
                    onChangeText={formikprops.handleChange("AadharNo")}
                    value={formikprops.values.AadharNo}
                    keyboardType={"numeric"}
                  />
                  <Text style={styles.ErrorMsg}>
                    {formikprops.errors.AadharNo}
                  </Text>
                  <TouchableOpacity
                    style={styles.Sign_up}
                    onPress={formikprops.handleSubmit}
                  >
                    <Text style={{ color: "white" }}>Sign-Up</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={{
                    margin: 10,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={() => this.props.navigation.push("Login")}
                >
                  <Text>Already Registered?</Text>
                </TouchableOpacity>
              </ScrollView>
            </TouchableWithoutFeedback>
          )}
        </Formik>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "25%",
  },
  textInput: {
    backgroundColor: "#e8e8e8",
    width: "80%",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  Sign_up: {
    backgroundColor: "dodgerblue",
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 100,
    margin: 10,
  },
  LoginText: {
    color: "dodgerblue",
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 15,
  },
  ErrorMsg: {
    color: "red",
  },
});
