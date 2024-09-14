import {
  Button,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Modal,
} from "react-native";
import { useState } from "react";
import * as Contacts from "expo-contacts";

export default AddContactModal = ({
  modalVisible,
  closeModal,
  saveContact,
}) => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [company, setCompany] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  const clearFields = () => {
    setCompany();
    setEmail();
    setFirstName();
    setLastName();
    setPhoneNumber();
  };
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      onRequestClose={closeModal}
    >
      <SafeAreaView style={styles.modal}>
        <TextInput
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput
          placeholder="Company"
          value={company}
          onChangeText={setCompany}
        />
        <TextInput
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="numeric"
        />
        <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
        <Button
          title="Cancel"
          onPress={() => {
            closeModal();
            clearFields();
          }}
        />
        <Button
          title="Save"
          onPress={() => {
            const contact = {
              [Contacts.Fields.FirstName]: firstName,
              [Contacts.Fields.LastName]: lastName,
              [Contacts.Fields.Company]: company,
              [Contacts.Fields.Emails]: [
                { email: email, isPrimary: true, label: "Email" },
              ],
              [Contacts.Fields.PhoneNumbers]: [
                {
                  digits: phoneNumber,
                  number: phoneNumber,
                  isPrimary: true,
                  label: "Phone Number",
                },
              ],
            };
            saveContact(contact);
            clearFields();
            closeModal();
          }}
        />
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    alignItems: "center",
    justifyContent: "center",
  },
});
