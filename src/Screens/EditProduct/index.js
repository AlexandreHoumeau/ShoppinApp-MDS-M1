import React, { useEffect, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import { Button, View } from "react-native-ui-lib";
import { connect } from "react-redux";
import {
  deleteProduct,
  editProduct,
  addNewProduct,
} from "../../actions/productActions";

const EditProductView = ({
  route,
  deleteProduct,
  navigation,
  editProduct,
  addNewProduct,
}) => {
  const { params } = route;
  const item = params?.item;
  const [title, setTitle] = useState(item?.title || null);
  const [content, setContent] = useState(item?.content || null);
  const [photo, setPhoto] = useState(item?.photo || null);
  const [price, setPrice] = useState(item?.price || null);

  const deleteItem = () => {
    deleteProduct(item.id);
    navigation.goBack();
  };

  const addItem = () => {
    const newProduct = {
      id: "_" + Math.random().toString(36).substr(2, 9),
      user: "u1",
      title,
      content,
      photo,
      price: parseFloat(price),
    };
    addNewProduct(newProduct);
    navigation.goBack();
  };

  const editItem = () => {
    const editedProduct = {
      id: item.id,
      user: item.user,
      title,
      content,
      photo,
      price: parseFloat(price),
    };
    editProduct(editedProduct);
    navigation.goBack();
  };
  return (
    <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column',justifyContent: 'center',}} behavior="padding" enabled   keyboardVerticalOffset={100}>
    <ScrollView style={{ flex: 1 }}>
      <SafeAreaView>
        {photo ? (
          <View style={{ width: "100%", height: 200 }}>
            <Image
              source={{ uri: photo }}
              style={{ resizeMode: "cover", width: "100%", height: "100%" }}
            />
          </View>
        ) : null}
        <View style={{ marginHorizontal: 20, marginTop: 50 }}>
          <View style={styles.formContainer}>
            <Text style={styles.label}>Title</Text>
            <TextInput
              style={styles.input}
              title="Title"
              placeholder="Title"
              onChangeText={(value) => setTitle(value)}
              value={title}
            />
            <Text style={styles.label}>Content</Text>
            <TextInput
              style={styles.input}
              title="Content"
              placeholder="Content"
              value={content}
              onChangeText={(value) => setContent(value)}
            />
            <Text style={styles.label}>Photo</Text>
            <TextInput
              style={styles.input}
              title="Photo Link"
              placeholder="Photo Link"
              value={photo}
              onChangeText={(value) => setPhoto(value)}
            />
            <Text style={styles.label}>Price</Text>
            <TextInput
              style={styles.input}
              title="Price"
              placeholder="Price"
              value={price?.toString()}
              onChangeText={(value) => setPrice(value)}
            />
            <Button
              backgroundColor="#49b6ff"
              label={item ? "EDIT" : "ADD"}
              style={styles.btn}
              labelStyle={{ fontWeight: "600" }}
              enableShadows
              onPress={() => (item ? editItem() : addItem())}
            />
            {item ? (
              <Button
                backgroundColor="red"
                label="DELETE"
                style={styles.btn}
                labelStyle={{ fontWeight: "600" }}
                enableShadows
                onPress={() => deleteItem()}
              />
            ) : null}
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  input: {
    marginVertical: 10,
    backgroundColor: "#fff",
    padding: 20,
    borderColor: "#49b6ff",
    borderWidth: 1,
    borderRadius: 10,
  },
  formContainer: {
    marginHorizontal: 10,
  },
  btn: {
    height: 55,
    borderRadius: 10,
    marginTop: 30,
  },
  label: {
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default connect(null, { deleteProduct, editProduct, addNewProduct })(
  EditProductView
);
