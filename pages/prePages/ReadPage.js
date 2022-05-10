import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
export default function ReadPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "CUT_HEADER" });
    return () => {
      dispatch({ type: "RETURN_HEADER" });
    };
  }, [dispatch]);
  return (
    <View style={{ paddingTop: 20 }}>
      <Text style={{ fontSize: 30, paddingBottom: 10 }}>Глава 1</Text>
      <Text style={{ fontSize: 20, paddingBottom: 30 }}>
        Ограбление банка. Захват заложников. Выстреп, На лестничной клетке -
        топпа полицейских, которые собираются брать штурмом квартиру. На месте
        запожников мог оказаться кто угодно, это гораздо проще, чем можно поду
        мать. Все, что для этого нужно, - одна по-настоящему плохая идея
      </Text>
      <Text style={{ fontSize: 20, paddingBottom: 30 }}>
        Это история обо всем на свете, но главным образом-об идиота. Идио том,
        скажем прямо, можно назвать любого, вот только не стоит забывать быть
        человеком - депо вообще трудное до безумия. Особенно если рядом с тобой
        пюди, перед которыми ты пытаешься выглядеть хорошим
      </Text>
      <Text style={{ fontSize: 20, paddingBottom: 30 }}>
        В наше время человеку то и дело приходится отвечать самым разным
        сониданиям. Нужно иметь работу, крышу над головой, платить напоги,
        следить за тем, чтобы на тебе всегда из рук, несется вперед, влюбляется
        и разбива ется на куски. С этим ничего не поделаешь. Мы учимся
        притворяться, посто
      </Text>
    </View>
  );
}
