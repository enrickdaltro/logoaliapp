import React, { useState } from 'react';

import Card from '../../components/Card';

import {
  Container,
  Content,
  Title,
  ProviderTitle,
  CategoriesTitle,
} from './styles';

export default function Home() {
  const [infos, setInfos] = useState([
    {
      id: 1,
      name: 'Enrick',
      titulo: 'desenvolvedor',
      avatar: 'https://api.adorable.io/avatars/app.png',
    },
    {
      id: 2,
      name: 'Enrick 2',
      titulo: 'desenvolvedor 2sasasasas',
      avatar: 'https://api.adorable.io/avatars/app.png',
    },
    {
      id: 3,
      name: 'Enrick 3',
      titulo: 'desenvolvedor 3',
      avatar: 'https://api.adorable.io/avatars/app.png',
    },
  ]);
  return (
    <Container>
      <Content>
        <Title>Olá!</Title>

        <ProviderTitle>Últimos prestadores</ProviderTitle>
        <Card data={infos} />
        <CategoriesTitle>Categorias</CategoriesTitle>
        <Card data={infos} />
      </Content>
    </Container>
  );
}
