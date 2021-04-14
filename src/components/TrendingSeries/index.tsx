import React, { useState, useEffect, useContext } from 'react';
import { View, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import { CountContext } from '../../context/DetailsContext';

import { PosterContainer, Title } from './styles';

interface Series {
  id: number;
  original_title: string;
  poster_path: string;
}

export default function TrendingMovies() {
  const [series, setSeries] = useState<Series[]>([]);
  const apiKey = '19bbf67061d9d2a2718489aff8e99eb9';
  const navigation = useNavigation();
  const { setDetails } = useContext(CountContext);

  useEffect(() => {
    async function getSeries() {
      const response = await api(`trending/tv/week?api_key=${apiKey}&language=pt-br`);
      setSeries(response.data.results);
    };

    getSeries();
  }, [])

  function getDetails(index: number) {
    setDetails(series[index]);
    navigation.navigate('SaibaMais');
  }

  return (
    <View>

      <Title>Séries da semana</Title>

      <ScrollView horizontal={true}>
        {series.map((serie, index) => (
          <PosterContainer
            key={serie.id.toString()}
            onPress={() => getDetails(index)}
          >
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w300/${serie.poster_path}` }}
              style={{ height: '100%', width: '100%', resizeMode: 'cover' }}
            />
          </PosterContainer>
        ))}
      </ScrollView>

    </View>
  );
}
