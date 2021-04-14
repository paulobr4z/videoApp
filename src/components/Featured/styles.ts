import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

export const Poster = styled.ImageBackground`
	height: ${(Dimensions.get('window').height * 35) / 100}px;
`

export const ContainerTitle = styled.View`
  position: absolute;
  width: 100%;
  align-items: center;
  bottom: 40px;
`;

export const TitlePoster = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: white;
`;

export const Gradient = styled(LinearGradient)`
	height: 100%;
`;

export const ButtonContainer = styled.View`
  position: absolute;
  bottom: -10px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ButtonTitle = styled.TouchableOpacity`
  flex-direction: row;
  background-color: #fff;
  border-radius: 4px;
  padding: 8px 20px;
  margin-top: 10px;
`;