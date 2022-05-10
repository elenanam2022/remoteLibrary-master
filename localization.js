import LocalizedStrings from "react-localization";

const prestrings = {
  searchPlaceholder: {
    en: "Search Books, Audiobooks, Podcasts",
    kg: "Китептерди, аудиокитептерди, подкасттарды издөө",
    ru: "Искать Книги, Аудиокниги, Подкасты",
  },
  popularText: {
    en: "Popular",
    kg: "Популярдуу",
    ru: "Популярное",
  },
  bookBestSellers: {
    en: "Book Bestsellers",
    kg: "Китеп Бестселлерлери",
    ru: "Книжные Бестселлеры",
  },
  videoText: {
    en: "Video",
    kg: "Видео",
    ru: "Видео",
  },
  booksText: {
    en: "Books",
    kg: "Китептер",
    ru: "Книги",
  },
  newsText: {
    en: "News",
    kg: "Жанылыктар",
    ru: "Новости",
  },
  nameText: {
    en: "Title",
    kg: "Аты-жөнү",
    ru: "Название",
  },
  authorText: {
    en: "Author",
    kg: "Автор",
    ru: "Автор",
  },
  sourceText: {
    en: "Source",
    kg: "Булак",
    ru: "Источник",
  },
  publishYearText: {
    en: "Publish Year",
    kg: "Жарыялоо жылы",
    ru: "Год издания",
  },
  descriptionText: {
    en: "Description",
    kg: "Сыпаттама",
    ru: "Описание",
  },
  readText: {
    en: "Read",
    kg: "Оку",
    ru: "Читать",
  },
  downloadText: {
    en: "Download",
    kg: "Көчүрү",
    ru: "Скачать",
  },
  saveText: {
    en: "Save",
    kg: "Сактоо",
    ru: "Сохранить",
  },
  movePageText: {
    en: "Move",
    kg: "Жылдыруу",
    ru: "Перейти",
  },
  viwsText: {
    en: "views",
    kg: "көрүүлөр",
    ru: "просмотров",
  },
  uploadDateText: {
    en: "Date added",
    kg: "Датасы кошулган",
    ru: "Дата добовления",
  },
  govResourcesText: {
    en: "State Sources of Information and News",
    kg: "Мамлекеттик маалымат жана кабар булактары",
    ru: "Государственные источники информации и Новости",
  },
  Login_and_Registration: {
    en: "Login and Registration",
    kg: "Login and Registration kg",
    ru: "Login and Registration ru",
  },
  email: {
    en: "Email",
    kg: "Email kg",
    ru: "Email ru",
  },
  phone_number: {
    en: "phone number",
    kg: "phone number kg",
    ru: "phone number ru",
  },
  continue: {
    en: "continue en",
    kg: "continue kg",
    ru: "continue ru",
  },
  enter_email_address: {
    en: "Enter email address",
    kg: "Enter email address kg",
    ru: "Enter email address ru",
  },
  enter_phone_number: {
    en: "Enter phone number",
    kg: "Enter phone number kg",
    ru: "Enter phone number ru",
  },
  Book_Bestsellers: {
    en: "Book_Bestsellers",
    kg: "Book_Bestsellers kg",
    ru: "Book_Bestsellers ru",
  },
  Audio_Books: {
    en: "Audio_Books",
    kg: "Audio_Books kg",
    ru: "Audio_Books ru",
  },
  Videos: {
    en: "Videos",
    kg: "Videos kg",
    ru: "Videos ru",
  },
  Catalog: {
    en: "Catalog",
    ru: "Catalog ru",
    kg: "Catalog kg",
  },
  Rating: {
    en: "Rating",
    ru: "Rating ru",
    kg: "Rating kg",
  },
  Year: {
    en: "Year",
    ru: "Year ru",
    kg: "Year kg",
  },
  Genre: {
    en: "Genre",
    ru: "Genre ru",
    kg: "Genre kg",
  },
  translateDate: {
    en: "translate date",
    ru: "translate date ru",
    kg: "translate date kg",
  },
  Listen: {
    en: "Listen",
    ru: "Listen ru",
    kg: "Listen kg",
  },
};

const strings = new LocalizedStrings(
  Object.keys(prestrings).reduce(
    (dictionary, word) => ({
      ...Object.keys(prestrings[word]).reduce(
        (acc, lang) => ({
          ...acc,
          [lang]: { [word]: prestrings[word][lang], ...dictionary[lang] },
        }),
        {}
      ),
    }),
    {}
  )
);
// const strings = new LocalizedStrings({
//   ru: {
//     searchPlaceholder: "Искать Книги, Аудиокниги, Подкасты",
//     popularText: "Популярное",
//     bookBestSellers: "Книжные Бестселлеры",
//     videoText: "Видео",
//     booksText: "Книги",
//     newsText: "Новости",
//     nameText: "Название",
//     authorText: "Автор",
//     sourceText: "Источник",
//     publishYearText: "Год издания",
//     descriptionText: "Описание",
//     readText: "Читать",
//     downloadText: "Скачать",
//     saveText: "Сохранить",
//     movePageText: "Перейти",
//     viwsText: "просмотров",
//     uploadDateText: "Дата добовления",
//     govResourcesText: "Государственные источники информации и Новости",
//   },
//   kg: {
//     searchPlaceholder: "Китептерди, аудиокитептерди, подкасттарды издөө",
//     popularText: "Популярдуу",
//     bookBestSellers: "Китеп Бестселлерлери",
//     videoText: "Видео",
//     booksText: "Китептер",
//     newsText: "Жанылыктар",
//     nameText: "Аты-жөнү",
//     authorText: "Автор",
//     sourceText: "Булак",
//     publishYearText: "Жарыялоо жылы",
//     descriptionText: "Сыпаттама",
//     readText: "Оку",
//     downloadText: "Көчүрү",
//     saveText: "Сактоо",
//     movePageText: "Жылдыруу",
//     viwsText: "көрүүлөр",
//     uploadDateText: "Датасы кошулган",
//  govResourcesText: "Мамлекеттик маалымат жана кабар булактары",
//   },
//   en: {
//     searchPlaceholder: "Search Books, Audiobooks, Podcasts",
//     popularText: "Popular",
//     bookBestSellers: "Book Bestsellers",
//     videoText: "Video",
//     booksText: "Books",
//     newsText: "News",
//     nameText: "Title",
//     authorText: "Author",
//     sourceText: "Source",
//     publishYearText: "Publish Year",
//     descriptionText: "Description",
//     readText: "Read",
//     downloadText: "Download",
//     saveText: "Save",
//     movePageText: "Move",
//     viwsText: "views",
//     uploadDateText: "Date added",
//     govResourcesText: "State Sources of Information and News",
//   },
// });
export { strings };
