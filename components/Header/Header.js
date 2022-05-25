import Logo from "../../Images/Icons/logo.png";
import Menu from "../../Images/Icons/menu.png";
import Notification from "../../Images/Icons/notification.png";
import Login from "../../Images/Icons/login.png";
import Theme from "../../Images/Icons/theme.png";
import { strings } from "../../localization.js";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Overlay } from "@rneui/base";
import HeaderMenu from "./ModalPages/HeaderMenu";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const [modalState, setModalState] = useState("closed");
  const [lng, setLng] = useState("ru");
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  function changeLng() {
    if (strings.getLanguage() === "ru") {
      AsyncStorage.setItem("lng", "kg");
      strings.setLanguage("kg");
      setLng("КЫРГ");
    } else if (strings.getLanguage() === "kg") {
      AsyncStorage.setItem("lng", "en");
      strings.setLanguage("en");
      setLng("EN");
    } else if (strings.getLanguage() === "en") {
      AsyncStorage.setItem("lng", "tj");
      strings.setLanguage("tj");
      setLng("TJ");
    }else if (strings.getLanguage() === "tj") {
      AsyncStorage.setItem("lng", "ru");
      strings.setLanguage("ru");
      setLng("РУС");
    }
    dispatch({ type: "CHANGE_LANG", lang: strings.getLanguage() });
  }
  useEffect(async () => {
    let lgn_dict = { en: "EN", ru: "РУС", kg: "КЫРГ" };
    if ((await AsyncStorage.getItem("lng")) !== null) {
      strings.setLanguage(await AsyncStorage.getItem("lng"));
      setLng(lgn_dict[await AsyncStorage.getItem("lng")]);
    } else if (strings.getLanguage() === "ru") {
      setLng("РУС");
    } else if (strings.getLanguage() === "kg") {
      setLng("КЫРГ");
    } else if (strings.getLanguage() === "en") {
      setLng("EN");
    }else if (strings.getLanguage() === "tj") {
      setLng("TJ");
    }
  }, []);
  return (
    <View style={styles.container}>
      {modalState && (
        <Overlay
          isVisible={modalState != "closed"}
          style={styles.modal}
          onBackdropPress={() => setModalState("closed")}
          overlayStyle={[
            styles.modalOverlay,
            {
              top: modalState == "menu" ? "-35%" : "-20%",
              left: modalState == "menu" ? "30%" : 0,
            },
          ]}
        >
          {modalState === "menu" && (
            <HeaderMenu
              strings={strings}
              closeMenu={() => setModalState("closed")}
            />
          )}
          
        </Overlay>
      )}
      <View style={styles.wrapper}>
        <View style={styles.grid}>
          <View style={styles.subgridLeft}>
            <Link to="/">
              <View style={styles.item}>
                <Image
                  style={styles.logoImage}
                  source={Logo}
                  alt="Logo"
                ></Image>
              </View>
            </Link>
            <View style={styles.item}>
              <Link to="/">
                <Text style={styles.logo}>BilimHub</Text>
              </Link>
            </View>
          </View>
          {!store.cuttedHeader && (
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => changeLng()}
                underlayColor="white"
              >
                <View style={styles.button}>
                  <Text style={styles.buttonText}> {String(lng)}</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
         
          
          <View style={styles.item}>
            <TouchableHighlight
              onPress={() => setModalState("menu")}
              underlayColor="white"
            >
              <Image style={styles.menu_img} source={Menu} alt="menu"></Image>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  logo: {
    fontSize: 28,
    width: 133,
    height: 67,
    paddingTop: 30,
    lineHeight: 34,
    fontFamily: "Roboto",
    color: "#374B73",
  },
  logoImage: {
    height: 68,
    width: 58,
  },
  grid: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subgridLeft: {
    width: "40%",
    flexDirection: "row",
    marginRight: "auto",
  },
  item: {
    justifyContent: "center",
  },
  wrapper: {
    flexDirection: "row",
  },
  button: {
    alignItems: "center",
  },
  buttonText: {
    textAlign: "center",
    padding: 10,
    color: "black",
    fontSize: 14,
  },
  menu_img: {
    width: 45,
    height: 30,
    margin: 5,
  },
  theme_img: {
    width: 30,
    height: 30,
    margin: 5,
  },
  login_img: {
    width: 32,
    height: 33,
  },
  notification_img: {
    width: 30,
    height: 30,
  },
  modal: {
    backgroundColor: "white",
  },
  modalOverlay: {
    backgroundColor: "white",
    borderRadius: 28,
    padding: 0,
    overflow: "hidden",
  },
});
