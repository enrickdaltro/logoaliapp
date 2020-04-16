import React from 'react';
import { StyleSheet } from 'react-native';
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

export default function ProfileInfo({ route }) {
  const { id, avatar, name, title, latitude, longitude } = route.params.item;

  return (
    <Container>
      <Content>
        <Avatar source={{ uri: avatar }} />

        <Name>{name}</Name>
        <Title>{title}</Title>

        <MapView
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude),
            latitudeDelta: 0.0068,
            longitudeDelta: 0.0068,
          }}
          style={styles.map}>
          <Marker
            key={id}
            coordinate={{
              latitude: parseFloat(latitude),
              longitude: parseFloat(longitude),
            }}
            title={name}>
            <Icon name="place" color="#000" size={60} />
          </Marker>
        </MapView>
      </Content>
    </Container>
  );
}
