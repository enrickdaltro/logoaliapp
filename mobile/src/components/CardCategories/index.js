import React from 'react';
import { FlatList } from 'react-native';

import { Container, CardList, CardBox, CardImage, CardTitle } from './styles';

export default function CardCategories({ data }) {
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
              <CardImage source={{ uri: item.image }} />
              <CardTitle>{item.name}</CardTitle>
            </CardBox>
          </CardList>
        )}
      />
    </Container>
  );
}
