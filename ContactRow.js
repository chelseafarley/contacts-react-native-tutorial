import { Button, StyleSheet, View, Text } from "react-native";
import * as Contacts from "expo-contacts";

export default ContactRow = ({ contact, deleteContact, editContact }) => {
  return (
    <View style={styles.row}>
      <Text>
        {contact.firstName} {contact.lastName}
      </Text>
      <Button title="Edit" onPress={() => editContact(contact.id)} />
      <Button title="Delete" onPress={() => deleteContact(contact.id)} />
      <Button
        title="Share"
        onPress={() =>
          Contacts.shareContactAsync(contact.id, "Sharing contact")
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});
