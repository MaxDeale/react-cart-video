import styled from 'styled-components'

export const ProductContainerStyle = styled.div`
  width: 80%;
  margin: 2% auto;
  height: 100%;
  border: 1px solid black;
  border-radius: 7px;
  background-color: ${(props) => (props.primary ? '#919aa1' : '#343a40')};
  color: ${(props) => (props.primary ? '#343a40' : '#919aa1')};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
`

export const ProductItemStyle = styled.div`
  width: 300px;
  background-color: ${(props) => (props.primary ? 'white' : '#919aa1')};
  color: ${(props) => (props.primary ? '#919aa1' : '#343a40')};
  margin: 2rem;
  padding: 1rem;
`

export const PageHeading = styled.h1`
  margin: 45px auto;
  text-align: center;
  font-size: 4rem;
  color: ${(props) => (props.primary ? '#1a1a1a' : '#6f42c1')};
`
export const CartAddButton = styled.button`
  background-color: ${(props) => (props.primary ? 'green' : 'red')};
  border: none;
  margin-top: 20px;
  color: ${(props) => (props.primary ? 'yellow' : 'black')};
  padding: 1rem;
  width: 100%;
  transition: all 1s;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid yellow;
  }
`

export const NavBarStyle = styled.nav`
  width: 80%;
  background-color: black;
  height: 150px;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  & ul {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  & li {
    & a {
      font-size: 2rem;
      text-decoration: none;
      transition: all 1s;
      color: white;
      &:hover {
        background-color: white;
        border: 1px solid black;
        color: black;
        padding: 0.4rem;
        border-radius: 10px;
      }
    }
    list-style: none;
  }
`
