import styled from 'styled-components';

export default function TestComponent1() {
  return (
    <Container>
      <p>컴포넌트1</p>
    </Container>
  );
}

const Container = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${({ theme }) => theme.color.main};
`;
