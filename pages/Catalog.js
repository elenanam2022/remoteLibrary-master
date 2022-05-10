import { View, Text } from "react-native";
import React  from "react";
import CatalogHeader from "../components/CatalogHeader/CatalogHeader";
import Hr from "../components/Elements/Basic/Hr";
import CatalogBooks from "./prePages/CatalogBooks";
import { NativeRouter, Route, Routes } from "react-router-native";

export default function Catalog({children}) {
  return (
    <View>
      <CatalogHeader />
      <Hr style={{ marginVertical: 2, marginTop: 8 }} />
      <Hr />
      {children}
    </View>
  );
}
