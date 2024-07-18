import styled from 'styled-components';

export default function TestComponent2() {
  return (
    <Container>
      <p>컨포넌트2</p>
    </Container>
  );
}

const Container = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${({ theme }) => theme.color.sub};
`;
