import { StyleSheet, Text, View } from "react-native";


export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trang chủ</Text>
      <Text>Chào mừng bạn đến hệ thống</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  title:{
    fontSize:24,
    fontWeight:"bold",
    marginBottom:10
  }
});