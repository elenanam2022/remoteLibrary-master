import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { AppRegistry } from "react-native-web";
import { NativeRouter, Route, Link, Routes } from "react-router-native";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import VideosDetails from "./components/Details/VideosDetails";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import store from "./redux/store";
import Catalog from "./pages/Catalog";
import CatalogBooks from "./pages/prePages/CatalogBooks";
import CatalogAudioBooks from "./pages/prePages/CatalogAudioBooks";
import CatalogVideos from "./pages/prePages/CatalogVideos";
import BookDetails from "./components/Details/BookDetails";
import AudioBookDetails from "./components/Details/AudioBookDetails";
import ReadPage from "./pages/prePages/ReadPage";
import { registerRootComponent } from 'expo';



export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NativeRouter>
          <View style={styles.container}>
            <View style={styles.header}>
              <Header />
            </View>
            <ScrollView contentContainerStyle={styles.scrollView}>
              <Routes style={styles.routers}>
                <Route exact path="/" element={<Home />} />
                <Route
                  exact
                  path="/videos/:id"
                  element={
                    <Catalog>
                      <VideosDetails />
                    </Catalog>
                  }
                />
                <Route
                  exact
                  path="videos/videos/:id"
                  element={
                    <Catalog>
                      <VideosDetails />
                    </Catalog>
                  }
                />
                <Route
                  exact
                  path="/books/:id"
                  element={
                    <Catalog>
                      <BookDetails />
                    </Catalog>
                  }
                />
                <Route exact path="/books/:id/read" element={<ReadPage />} />
                <Route
                  exact
                  path="/audioBooks/:id"
                  element={
                    <Catalog>
                      <AudioBookDetails />
                    </Catalog>
                  }
                />
                <Route
                  exact
                  path="/books"
                  element={
                    <Catalog>
                      <CatalogBooks />
                    </Catalog>
                  }
                />
                <Route
                  exact
                  path="/audioBooks"
                  element={
                    <Catalog>
                      <CatalogAudioBooks />
                    </Catalog>
                  }
                />
                <Route
                  exact
                  path="/videos"
                  element={
                    <Catalog>
                      <CatalogVideos />
                    </Catalog>
                  }
                />
                {/* <Route exact path="/book/:id" element={<BookDetails />} />
        <Route
          exact
          path="/book-directory/book/:id"
          element={<BookDetails />}
          />
          <Route exact path="book-directory" element={<BookDirectory />} />
          <Route
          exact
          path="video-directory/video/:id"
          element={<VideosDetails />}
          />
          <Route
          exact
          path="gov-directory/gov-resource/:id"
          element={<GovResource />}
          />
          <Route exact path="gov-resource/:id" element={<GovResource />} />
          <Route
        exact
        path="gov-directory/gov-resource/:id"
        element={<GovResource />}
        />
        <Route exact path="gov-directory" element={<GovResourcesDirectory />} />
        <Route exact path="/video-directory" element={<VideoDirectory />} />
        <Route path="book/:id/book-reader-pdf" element={<BookReaderPdf />} />
        <Route
        path="/book-directory/book/:id/book-reader-pdf"
        element={<BookReaderPdf />}
        />
        <Route path="book/:id/book-reader-epub" element={<BookReaderEpub />} />
        <Route
        path="book-directory/book/:id/book-reader-epub"
        element={<BookReaderEpub />}
      /> */}
              </Routes>
            </ScrollView>
          </View>
        </NativeRouter>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
    backgroundColor: "#fff",
    alignItems: "stretch",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  header: {
    width: "100%",
  },
  routers: { width: "100%" },
  scrollView: {},
});
registerRootComponent(App);
