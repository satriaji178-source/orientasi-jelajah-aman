import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { typeScale, spacing } from "@/constants/styles";

export default function TabTentang() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: spacing.sedang,
        gap: spacing.kecil,
      }}
    >

      <Text
        style={{
          fontSize: typeScale.subjudul,
          fontWeight: "600",
        }}
      >
        Jelajah Aman
      </Text>

      <Text style={{ fontSize: typeScale.isi, marginBottom: spacing.kecil }}>
        Informasi cuaca dan kualitas udara untuk membantu perjalanan yang lebih
        aman.
      </Text>

      <Text style={{ fontSize: typeScale.keterangan, color: "#666" }}>
        Versi 1.0.0{"\n"}Dibuat oleh Tim Jelajah Aman
      </Text>
    </SafeAreaView>
  );
}