import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/ScrollLoadingScreenStyles';

const generateItems = (start, count) => {
  let items = [];
  for (let i = start; i < start + count; i++) {
    items.push({ id: i.toString(), title: `Elemento ${i + 1}` });
  }
  return items;
};

export default function ScrollLoadingScreen() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreItems = () => {
    if (loading || !hasMore) return;
    setLoading(true);
    // Simular petición de red
    setTimeout(() => {
      const newItems = generateItems(page * 20, 20);
      if (newItems.length === 0) {
        setHasMore(false);
      } else {
        setData((prev) => [...prev, ...newItems]);
        setPage((prev) => prev + 1);
      }
      setLoading(false);
    }, 1500);
  };

  useEffect(() => {
    loadMoreItems();
  }, []);

  const renderFooter = () => {
    if (!loading) return null;
    return (
      <View style={styles.footer}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text>Cargando más elementos...</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <View style={styles.container}>
        <Text style={styles.title}>Scroll con carga (Infinite Scroll)</Text>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemText}>{item.title}</Text>
            </View>
          )}
          onEndReached={loadMoreItems}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
    </SafeAreaView>
  );
}

