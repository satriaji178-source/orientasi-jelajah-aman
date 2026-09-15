// components/IndikatorAQI.tsx
import { View, Text } from "react-native";
import { LaporanUdara } from "../../types/cuaca";

interface IndikatorAQIProps {
  data: LaporanUdara;
}

export default function IndikatorAQI({ data }: IndikatorAQIProps) {
  // Fungsi penentu warna teks berdasarkan tingkat kualitas udara
  const getWarnaTingkat = (tingkat: LaporanUdara["tingkat"]) => {
    switch (tingkat) {
      case "BAIK":
        return "green";
      case "SEDANG":
        return "orange";
      case "TIDAK_SEHAT":
        return "red";
      case "BERBAHAYA":
        return "purple";
      default:
        return "black";
    }
  };

  const warnaTeks = getWarnaTingkat(data.tingkat);

  return (
    <View style={{ padding: 16, borderRadius: 8, backgroundColor: "#EFEFEF" }}>
      <Text style={{ fontWeight: "bold", fontSize: 16 }}>
        Kota: {data.kota}
      </Text>
      <Text style={{ fontSize: 14, marginVertical: 4 }}>
        Indeks AQI: {data.indeksAQI}
      </Text>
      <Text style={{ color: warnaTeks, fontWeight: "bold" }}>
        Status: {data.tingkat}
      </Text>
      {data.diperbaruiPada && (
        <Text style={{ fontSize: 12, color: "gray", marginTop: 4 }}>
          Diperbarui pada: {data.diperbaruiPada}
        </Text>
      )}
    </View>
  );
}