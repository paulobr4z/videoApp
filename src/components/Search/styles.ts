import styled from 'styled-components/native';
import { Searchbar } from 'react-native-paper';

export const Header = styled.View`
  width: 100%;
  background-color: #000;
`;

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #000;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  margin: 40px 0px 15px 10px;
  color: #fff;
`;

export const InputSearch = styled(Searchbar)`
  color: brown;
  margin: 0px 10px 20px 10px;
`;

export const ResultsContainer = styled.View`
  height: 160px;
  flex-direction: row;
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  border-width: 1px;
  border-top-color: #171717;
`;

export const PosterContainer = styled.View`
  height: 150px;
  width: 100px;
`;

export const TitleContainer = styled.View`
  flex: 1;
  padding-left: 10px;
`;

export const IconContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const IconWrapper = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #8A1A9C;
  border-radius: 50px;
  height: 40px;
  width: 40px;
  margin: 0px 10px;
`;