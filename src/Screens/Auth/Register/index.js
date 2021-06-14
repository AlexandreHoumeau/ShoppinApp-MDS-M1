import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import { Formik } from "formik";
import RegisterValidationSchema from "./RegisterValidationSchema";
import { connect } from "react-redux";
import { signUp } from "../../../actions/authActions";
import Spinner from "react-native-loading-spinner-overlay";
import RegisterModal from "./Modal";

const Register = ({ signUp, error, navigation }) => {
  const [spinner, setSpinner] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = async (values) => {
    setSpinner(true);
    const register = await signUp(values);
    setSpinner(false);
    if (!register.error) {
      setModalVisible(true);
    }
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
        <View style={{ flex: 2, justifyContent: 'flex-end' }}>
          <View
            style={{
              marginBottom: 20,
            }}
          >
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: "#764abc" }}
            >
              Register to create an account
            </Text>
            <Text style={{ fontSize: 15, color: "#585858" }}>
              Please enter your email and password
            </Text>
          </View>
        </View>
        <KeyboardAvoidingView
          style={{ flex: 4, marginTop: 30 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View
            style={{
              justifyContent: "center",
            }}
          >
            <Formik
              validationSchema={RegisterValidationSchema}
              initialValues={{ email: "", password: "", confirmPassword: "" }}
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

                  <Text
                    style={{ fontSize: 15, fontWeight: "bold", marginTop: 15 }}
                  >
                    Confirm your password
                  </Text>
                  <TextInput
                    onChangeText={handleChange("confirmPassword")}
                    onChange={handleBlur("confirmPassword")}
                    value={values.confirmPassword}
                    secureTextEntry
                    mode="outlined"
                    style={{
                      backgroundColor: values.password ? "#fff" : "#EBEBEB",
                    }}
                    outlineColor="transparent"
                    placeholder="Re-enter your Password"
                  />
                  {errors.confirmPassword && touched.confirmPassword && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.confirmPassword}
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
                      alignItems: "center",
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Login")}
                    >
                      <Text
                        style={{
                          color: "#764abc",
                          fontWeight: "bold",
                          fontSize: 15,
                        }}
                      >
                        Already have an account ?
                      </Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </Formik>
          </View>
        </KeyboardAvoidingView>
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
          <RegisterModal navigation={navigation} />
        </Modal>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const mapStateToProps = (state) => ({
  error: state.authError,
});

export default connect(mapStateToProps, { signUp })(Register);
