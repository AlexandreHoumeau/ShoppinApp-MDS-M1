import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import { Formik } from "formik";
import loginValidationSchema from "./LoginValidationSchema";
import { connect } from "react-redux";
import { signIn } from "../../../actions/authActions";
import Spinner from "react-native-loading-spinner-overlay";
import navigation from "../../../navigation";

const Login = ({ signIn, error, navigation }) => {
  const [spinner, setSpinner] = useState(false);

  const handleSubmit = async (values) => {
    setSpinner(true);

    setTimeout(async () => {
      signIn(await values);
      setSpinner(false);
    }, 2000);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={{ marginHorizontal: 20, flex: 1 }}>
        <Spinner
          color="#fff"
          visible={spinner}
          textContent={"Loading..."}
          textStyle={{ color: "#fff" }}
          overlayColor="rgba(0, 0, 0, 0.7)"
        />
        <View style={{ justifyContent: "flex-end", flex: 3 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#764abc" }}>
            Log into your account
          </Text>
          <Text style={{ fontSize: 15, color: "#585858" }}>
            Please enter your email and password to access your Shopping App
            account
          </Text>
        </View>
        <KeyboardAvoidingView
          style={{ flex: 5, marginTop: 30 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={{ justifyContent: "center" }}>
            <Formik
              validationSchema={loginValidationSchema}
              initialValues={{ email: "", password: "" }}
              onSubmit={(values) => handleSubmit(values)}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                isValid,
                touched,
              }) => (
                <>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                    Email
                  </Text>
                  <TextInput
                    onChangeText={handleChange("email")}
                    onChange={handleBlur("email")}
                    value={values.email}
                    keyboardType="email-address"
                    style={{
                      backgroundColor: values.password ? "#fff" : "#EBEBEB",
                    }}
                    mode="outlined"
                    placeholder="Enter your email"
                    outlineColor="transparent"
                  />
                  {errors.email && touched.email && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.email}
                    </Text>
                  )}
                  <Text
                    style={{ fontSize: 15, fontWeight: "bold", marginTop: 15 }}
                  >
                    Password
                  </Text>
                  <TextInput
                    onChangeText={handleChange("password")}
                    onChange={handleBlur("password")}
                    value={values.password}
                    secureTextEntry
                    mode="outlined"
                    style={{
                      backgroundColor: values.password ? "#fff" : "#EBEBEB",
                    }}
                    outlineColor="transparent"
                    placeholder="Enter your Password"
                  />
                  {errors.password && touched.password && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.password}
                    </Text>
                  )}
                  <Button
                    style={{ marginTop: 30 }}
                    contentStyle={{ padding: 10 }}
                    mode="contained"
                    disabled={!isValid || !values.email || !values.password}
                    onPress={() => handleSubmit()}
                  >
                    Sign In
                  </Button>
                  <Text
                    style={{
                      color: "red",
                      fontSize: 15,
                      textAlign: "center",
                      marginVertical: 10,
                    }}
                  >
                    {error}
                  </Text>
                  <View
                    style={{
                      justifyContent: "flex-end",
                      alignItems: "center",
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Register")}
                    >
                      <Text
                        style={{
                          color: "#764abc",
                          fontWeight: "bold",
                          fontSize: 15,
                        }}
                      >
                        Don't have an account ?
                      </Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </Formik>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const mapStateToProps = (state) => ({
  error: state.authError,
});

export default connect(mapStateToProps, { signIn })(Login);
