import styled from 'styled-components/native';

export const Container = styled.View``;

export const CardList = styled.View`
  margin-right: 20px;
  margin-top: 20px;
`;

export const CardBox = styled.View`
  align-items: center;
  width: 180px;

  padding: 20px;
  border: 1px solid #eee;
  border-radius: 4px;
`;

export const UserImage = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 40px;
`;

export const UserName = styled.Text`
  margin-top: 10px;
  font-size: 18px;
`;

export const UserTitle = styled.Text`
  color: #666;
  margin-top: 5px;
  text-align: center;
  width: 100px;
  height: 40px;
`;

export const ProfileButton = styled.TouchableOpacity`
  padding: 10px;
  background: #1f33c9;
  border: none;
  border-radius: 4px;
  align-self: stretch;
  margin-top: 10px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
