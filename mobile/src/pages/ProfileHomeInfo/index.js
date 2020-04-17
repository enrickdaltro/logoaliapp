import React, { useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import { Container, Content, Avatar, Name, Title } from './styles';

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    marginVertical: 320,
    height: '120%',
  },
});

export default function ProfileHomeInfo({ route }) {
  const [loading, setLoading] = useState(true);
  const [points, setPoints] = useState(null);
  const [items, setItems] = useState(null);

  useEffect(() => {
    route.params.item
      ? setItems(route.params.item)
      : setPoints(route.params.point);

    setLoading(false);
  }, [route.params.item, route.params.point]);

  console.tron.log(points);
  console.tron.log(items);

  return (
    <Container>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Content>
          <Avatar source={{ uri: points ? points.avatar : items.avatar }} />

          <Name>{points ? points.name : items.name}</Name>
          <Title>{points ? points.title : items.title}</Title>

          <MapView
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: parseFloat(points ? points.latitude : items.latitude),
              longitude: parseFloat(
                points ? points.longitude : items.longitude,
              ),
              latitudeDelta: 0.0068,
              longitudeDelta: 0.0068,
            }}
            style={styles.map}>
            <Marker
              key={points ? points.id : items.id}
              coordinate={{
                latitude: parseFloat(points ? points.latitude : items.latitude),
                longitude: parseFloat(
                  points ? points.longitude : items.longitude,
                ),
              }}
              title={points ? points.name : items.name}>
              <Icon name="place" color="#000" size={60} />
            </Marker>
          </MapView>
        </Content>
      )}
    </Container>
  );
}
