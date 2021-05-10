import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
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
      id: '_' + Math.random().toString(36).substr(2, 9),
      user: "u1",
      title,
      content,
      photo,
      price,
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
      price,
    };
    editProduct(editedProduct);
    navigation.goBack();
  };
  return (
    <View>
      <View style={{ marginHorizontal: 20, marginTop: 50 }}>
        <TextInput
          style={styles.input}
          title="Title"
          placeholder="Title"
          onChangeText={(value) => setTitle(value)}
          value={title}
        />
        <TextInput
          style={styles.input}
          title="Content"
          placeholder="Content"
          value={content}
          onChangeText={(value) => setContent(value)}
        />
        <TextInput
          style={styles.input}
          title="Photo Link"
          placeholder="Photo Link"
          value={photo}
          onChangeText={(value) => setPhoto(value)}
        />
        <TextInput
          style={styles.input}
          title="Price"
          placeholder="Price"
          value={price?.toString()}
          onChangeText={(value) => setPrice(value)}
        />
      </View>
      <Button
        backgroundColor="#49b6ff"
        label={item ? "EDIT" : "AJOUTER"}
        labelStyle={{ fontWeight: "600" }}
        style={{ marginHorizontal: 10 }}
        enableShadows
        onPress={() => (item ? editItem() : addItem())}
      />
      {item ? (
        <Button
          backgroundColor="red"
          label="DELETE"
          labelStyle={{ fontWeight: "600" }}
          style={{ marginHorizontal: 10, marginTop: 20 }}
          enableShadows
          onPress={() => deleteItem()}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 20,
  },
});

export default connect(null, { deleteProduct, editProduct, addNewProduct })(
  EditProductView
);
