import { View, Text, StyleSheet, Image } from "react-native";
import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import GeneralInformation from "./GeneralInformation/GeneralInformation";
import { useParams } from "react-router-native";
import Photo from "./../../Images/test/books/1.png";
import image from "./../../Images/Icons/default_book_cover.png"
import { strings } from "../../localization";
import { Link } from "react-router-native";

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
  const store = useSelector((state) => state);
  const {id} = useParams()
  const [data, setData] = useState({
    })
  useEffect(() => {
    strings.setLanguage(store.lang);
    fetch("http://192.168.43.216:8000/books/"+id, {
      method: 'GET'

    }).then( resp => resp.json())
    .then(response => {
      let author_name = ""
      let a = response.authors
      for (let i=0; i<a.length; i++){
        author_name+=a[i].first_name + " " + a[i].last_name
        console.log(a[0])
      }
      new_obj = {
        title: response.name,
        author: author_name,
        publishDate: response.publish_year,
        source: response.source,
        description: response.description,
        image: image,
        id: response.id
      }
      setData(new_obj)
    })
    .catch (error => console.log(error))
  
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.topGrid}>
        <View style={styles.leftGrid}>
          <Image style={styles.image} source={data.image} />
        </View>
        <View style={styles.rightGrid}>
          <View style={{ paddingLeft: 6 }}>
            <Text style={styles.citationText}>
              {strings.nameText}: {data.title}
            </Text>
            <Text style={styles.citationText}>
              {strings.authorText}: {data.author}
            </Text>
            <Text style={styles.citationText}>
              {strings.sourceText}: {data.source}
            </Text>
            <Text style={styles.citationText}>
              {strings.publishYearText}: {data.publishDate}
            </Text>
          </View>
          <View style={styles.buttonWrapper}>
            <Link style={styles.button} to={`read/`}>
              <Text style={styles.ButtonText}>{strings.readText}</Text>
            </Link>
            
          </View>
          
        </View>
      </View>
      <View style={styles.downGrid}>
        <Text style={styles.descriptionTitle}>{strings.descriptionText}</Text>
        <Text style={styles.text}>{data.description}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: -70,
  },
  topGrid: { flexDirection: "row", alignItems: "center" },
  rightGrid: { flex: 1 },
  leftGrid: { flex: 1, paddingHorizontal: 10 },
  image: {
    maxWidth: 150,
    maxHeight: 200,
  },
  citationText: {
    fontSize: 12,
    marginBottom: 5,
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 10,
  },
  button: {
    paddingHorizontal: 6,
    paddingVertical: 0,
    margin: 0,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: "rgba(193, 201, 231, 0.5);",
  },
  buttonContainer: {
    borderRadius: 0,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: "rgba(193, 201, 231, 0.5);",
  },
  ButtonText: { color: "black", fontSize: 12 },
  downGrid: {
    alignItems: "center",
    width: "100%",
    marginTop: -40,
    paddingHorizontal: 15,
  },
  descriptionTitle: { fontSize: 20, paddingBottom: 20 },
  text: { fontSize: 15 },
});
