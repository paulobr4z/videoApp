import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

export const Poster = styled.ImageBackground`
	height: ${(Dimensions.get('window').height * 35) / 100}px;
  margin-bottom: 20px;
`

export const ContainerTitle = styled.View`
  justify-content: center;
  align-items: flex-start;
  height: 100px;
  width: 70%;
  bottom: -30px;
  margin-left: 10px;
`;

export const TitlePoster = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: white;
  margin-bottom: 4px;
`;

export const Gradient = styled(LinearGradient)`
	height: 100%;
  flex-direction: row;
  align-items: flex-end;
`;

export const ButtonContainer = styled.View`
  height: 100px;
  width: 25%;
  align-items: center;
  justify-content: center;
  bottom: -30px;
`;

export const ButtonTitle = styled.TouchableOpacity`
  background-color: #8A1A9C;
  border-radius: 50px;
  height: 50px;
  width: 50px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;