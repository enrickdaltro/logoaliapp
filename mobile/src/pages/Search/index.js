import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, Image, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import api from '../../services/api';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  map: {
    ...StyleSheet.absoluteFillObject,
  },

  modal: {
    height: 100,
    width: 170,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },

  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginBottom: 10,
  },

  name: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
  },

  title: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
});

export default function Search({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [coordinates, setCoordinates] = useState({});
  const [points, setPoints] = useState([]);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      ({ coords }) => {
        setCoordinates(coords);
        setLoading(false);
      },
      error => {
        console.tron.log(error);
      },
      { enableHighAccuracy: true, maximumAge: 10000, timeout: 10000 },
    );
  }, []);

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await api.get('/points', {
          params: coordinates,
        });
        setPoints(data);
      } catch (error) {
        console.tron.log(error);
      }
    }

    if (coordinates) getData();
  }, [coordinates]);

  function renderPoints() {
    return points.map(point => (
      <Marker
        key={point.id}
        coordinate={{
          latitude: parseFloat(point.latitude),
          longitude: parseFloat(point.longitude),
        }}
        title={point.name}>
        <Callout onPress={() => navigation.navigate('ProfileInfo', { point })}>
          <View style={styles.modal}>
            <Image source={{ uri: point.avatar }} style={styles.avatar} />
            <Text style={styles.name}>{point.name}</Text>
            <Text style={styles.title}>{point.title}</Text>
          </View>
        </Callout>

        <Icon name="place" color="#000" size={60} />
      </Marker>
    ));
  }

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <MapView
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
            latitudeDelta: 0.0068,
            longitudeDelta: 0.0068,
          }}
          style={styles.map}>
          {renderPoints()}
        </MapView>
      )}
    </View>
  );
}
