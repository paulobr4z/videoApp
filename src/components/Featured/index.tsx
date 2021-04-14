import React, { useState, useEffect, useContext } from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import { CountContext } from '../../context/DetailsContext';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Poster,
  Gradient,
  ContainerTitle,
  TitlePoster,
  ButtonContainer,
  ButtonTitle
} from './styles';

interface Movies {
  id: number;
  title: string;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

export default function Featured() {
  const [movies, setMovies] = useState<Movies>();
  const apiKey = '19bbf67061d9d2a2718489aff8e99eb9';
  const { setDetails, randomNumber } = useContext(CountContext);
  const navigation = useNavigation();


  useEffect(() => {
    async function getMovie() {
      const response = await api(`trending/all/week?api_key=${apiKey}&language=pt-br`);
      setMovies(response.data.results[randomNumber]);
    };

    getMovie();
  }, []);

  function getDetails() {
    setDetails(movies);
    navigation.navigate('SaibaMais');
  };

  return (
    <Poster
      source={{ uri: `https://image.tmdb.org/t/p/original/${movies?.backdrop_path}` }}
    >
      <Gradient
        locations={[0, 0.2, 0.6, 0.93]}
        colors={[
          'rgba(0,0,0,0.5)',
          'rgba(0,0,0,0.0)',
          'rgba(0,0,0,0.0)',
          'rgba(0,0,0,1)'
        ]}
      >
        <ContainerTitle>
          <TitlePoster>
            {!movies?.title ? movies?.name : movies?.title}
          </TitlePoster>
        </ContainerTitle>
        <ButtonContainer>
          <ButtonTitle onPress={() => getDetails()}>
            <Icon name="play" size={20} />
            <Text style={{ color: '#000', fontSize: 16, marginLeft: 15, fontWeight: 'bold' }}>Assitir</Text>
          </ButtonTitle>
        </ButtonContainer>
      </Gradient>
    </Poster>
  );
}
