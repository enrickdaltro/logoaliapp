import React from 'react';
import { FlatList } from 'react-native';

import {
  Container,
  CardList,
  CardBox,
  UserImage,
  UserName,
  UserTitle,
  ProfileButton,
  ButtonText,
} from './styles';

export default function Card({ data, navigation }) {
  function handleProfileInfo(item) {
    navigation.navigate('ProfileHomeInfo', { item });
  }

  return (
    <Container>
      <FlatList
        horizontal
        data={data}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <CardList>
            <CardBox>
              <UserImage source={{ uri: item.avatar }} />
              <UserName>{item.name}</UserName>
              <UserTitle>{item.title}</UserTitle>
              <ProfileButton onPress={() => handleProfileInfo(item)}>
                <ButtonText>Ver perfil</ButtonText>
              </ProfileButton>
            </CardBox>
          </CardList>
        )}
      />
    </Container>
  );
}
