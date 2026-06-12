import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#E8EEFF' },
  container: { flex: 1, paddingTop: 20, paddingHorizontal: 16 },
  title: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  item: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#ddd', backgroundColor: '#fff' },
  itemText: { fontSize: 16 },
  footer: { paddingVertical: 20, alignItems: 'center' },
  flatListContent: { paddingBottom: 120 },
});

export default styles;
