// src/app/(tabs)/pengaturan.tsx
import { useState } from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { typeScale, spacing } from "@/constants/styles";
import { hapusSemuaCache } from "@/services/cacheRepository"; // Menggunakan alias path agar konsisten

export default function TabPengaturan() {
  const [pesan, setPesan] = useState<string | null>(null);

  async function hapusDataTersimpan() {
    try {
      await hapusSemuaCache();
      setPesan("Data cuaca tersimpan sudah dihapus.");
    } catch (error) {
      setPesan("Gagal menghapus data cache.");
    }
  }

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

      <Text style={{ fontSize: typeScale.keterangan, color: "#666" }}>
        Versi 1.0.0
      </Text>

      <View style={{ marginTop: spacing.kecil, gap: spacing.kecil }}>
        <Button title="Hapus Data Tersimpan" onPress={hapusDataTersimpan} />
        {pesan && (
          <Text style={{ fontSize: typeScale.keterangan, color: "#333" }}>
            {pesan}
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
}