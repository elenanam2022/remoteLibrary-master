import { View, Text, StyleSheet } from "react-native";
import React from "react";
import GeneralInformation from "./GeneralInformation/GeneralInformation";
import Photo from "./../../Images/test/books/1.png";

const data = {
  title: "Тревожные люди",
  author: "Фредрик Бакман",
  publishDate: "2020",
  translateDate: "2019",
  source: "Литрес",
  description:
    "      В маленьком шведском городке накануне Нового года вооруженный пистолетом человек в маске после неудачной попытки ограбить банк захватывает восемь заложников во время показа покупателям выставленной на продажу квартиры. У подъезда тут же собирается толпа жадных до сенсаций репортеров, полиция блокирует все подступы к дому и готовится штурмовать квартиру… атмосфера накаляется. Не выдерживая нарастающего напряжения, заложники делятся друг с другом своими самыми сокровенными тайнами… Вскоре грабитель начинает склоняться к тому, что, возможно, лучше добровольно отдать себя в руки полиции, чем продолжать оставаться в замкнутом пространстве со всеми этими невыносимыми людьми…",
  image: Photo,
  id: 1,
};
export default function BookDetails({history}) {
  return (
    <View style={styles.container}>
      <GeneralInformation data={data} readTo={`/books/${data.id}/read`} history={history} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 22,
  },
});
