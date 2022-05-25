import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SafeAreaView, useWindowDimensions } from 'react-native';
import { Reader, ReaderProvider } from 'epubjs-react-native';
import { useParams } from "react-router-native";

export default function ReadPage() {
  const { width, height } = useWindowDimensions();
  const {id} = useParams()
  const dispatch = useDispatch();
  const [uri, setUri] = useState("http://192.168.43.216:4000/books/shekspir_romeo-i-dzhuletta_474836_fb2.epub")
  useEffect(() => {
    dispatch({ type: "CUT_HEADER" });
    fetch("http://192.168.43.216:8000/books/"+id, {
      method: 'GET'

    }).then( resp => resp.json())
    .then(response => setUri(response.path))
    .catch (error => console.log(error))
    return () => {
      dispatch({ type: "RETURN_HEADER" });
    };
  }, [dispatch, uri]);
  return (
    <SafeAreaView>
      <ReaderProvider>
        <Reader
          src={{ uri: uri }}
          width={width}
          height={height-90}
        />
      </ReaderProvider>
    </SafeAreaView>
  );
}
