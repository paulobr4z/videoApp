import React, { useState, useEffect, useContext, useCallback } from 'react';
import { View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { CountContext } from '../../context/DetailsContext';

import api from '../../services/api';

import {
  PosterContainer,
  Title,
} from './styles';

interface Movies {
  id: number;
  original_title: string;
  poster_path: string;
}

export default function Romance() {
  const [movies, setMovies] = useState<Movies[]>([]);
  const apiKey = '19bbf67061d9d2a2718489aff8e99eb9';
  const navigation = useNavigation();
  const { setDetails } = useContext(CountContext);

  useEffect(() => {
    async function getMovie() {
      const response = await api(`discover/movie?with_genres=10749&api_key=${apiKey}&language=pt-br`);
      setMovies(response.data.results);
    };

    getMovie();
  }, []);

  function getDetails(index: number) {
    setDetails(movies[index]);
    navigation.navigate('SaibaMais');
  };

  return (
    <>
      <View>

        <Title>Romance</Title>

        <ScrollView horizontal={true}>
          {movies.map((movie, index) => (
            <PosterContainer
              key={movie.id.toString()}
              onPress={() => getDetails(index)}
            >
              <Image
                source={{ uri: `https://image.tmdb.org/t/p/w300/${movie.poster_path}` }}
                style={{ height: '100%', width: '100%', resizeMode: 'cover' }}
              />
            </PosterContainer>
          ))}
        </ScrollView>

      </View>
    </>
  );
}
