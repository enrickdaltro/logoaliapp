import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';

import Card from '../../components/Card';
import CardCategories from '../../components/CardCategories';

import api from '../../services/api';

import {
  Container,
  Content,
  Title,
  ProviderTitle,
  CategoriesTitle,
} from './styles';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [infos, setInfos] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await api.get('/points');

      setInfos(response.data);
      setLoading(false);
    }

    async function getCategories() {
      const response = await api.get('/categories');

      setCategories(response.data);
      setLoading(false);
    }

    getData();
    getCategories();
  }, []);
  return (
    <Container>
      <Content>
        <Title>Olá!</Title>

        <ProviderTitle>Últimos prestadores</ProviderTitle>

        {loading ? (
          <ActivityIndicator size="large" margin={10} />
        ) : (
          <Card data={infos} />
        )}

        <CategoriesTitle>Categorias</CategoriesTitle>

        {loading ? (
          <ActivityIndicator size="large" margin={10} />
        ) : (
          <CardCategories data={categories} />
        )}
      </Content>
    </Container>
  );
}
