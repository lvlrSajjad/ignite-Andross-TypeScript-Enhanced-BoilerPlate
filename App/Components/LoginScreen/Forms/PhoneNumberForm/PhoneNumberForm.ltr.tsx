import * as React from "react";
import {MKTextField} from 'react-native-material-kit';
import styles from "../../Styles/LoginCardStyles";
import {MKColor} from 'react-native-material-kit'
import {Text, View} from "react-native";
import Fonts from "../../../../Themes/Fonts";
import { CardItem} from "native-base";
import MaterialButton from "../../../MaterialComponents/MaterialButton";
import {connect} from 'react-redux'
import { primaryColor, primaryColorLight} from "../../../../Themes/Colors";

interface PhoneNumberFormProps {
  prefixNumber: string,
  primaryColor: string,
  onTextChange(text:string): void,
  phoneNumber: string,
  isLoading?: boolean,
  onPress(): void,
  isDarkMode: boolean
}

const PhoneNumberFormLtr = (props: PhoneNumberFormProps) => {

  return (
    <View>
    <CardItem>
      <View style={styles.loginFormPhoneInputContainer}>
        <Text
          style={styles.loginFormPrefixText}
        >{props.prefixNumber}</Text>
        <MKTextField
          tintColor={primaryColor}
          textInputStyle={styles.loginFormTextInput}
          floatingLabelFont={{...Fonts.style.farsiInput}}
          placeholder={"Phone number"}
          placeholderColor={MKColor.Grey}
          onTextChange={(text) => props.onTextChange(text)}
          text={props.phoneNumber}
          maxLength={11}
          floatingLabelEnabled
          keyboardType={'numeric'}
          highlightColor={primaryColorLight}
          style={{flex: 1}}
        />
      </View>
    </CardItem>
    <CardItem>
      <MaterialButton
        text={'Confirm'}
        color={primaryColor}
        textColor='white'
        isLoading={props.isLoading}
        fullWidth={true}
        flex={1}
        onPress={() => {
          props.onPress();
        }}
      />
    </CardItem>
    </View>
  );
};
const mapStateToProps = state => {
  return {
    isDarkMode: state.appSettings.isDarkMode
  };
};

export default connect(mapStateToProps)(PhoneNumberFormLtr);