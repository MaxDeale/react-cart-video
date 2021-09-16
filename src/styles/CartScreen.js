import styled from 'styled-components'

export const CartContainerStyle = styled.div`
  width: 80%;
  margin: 2% auto;
  height: 100%;
  border: 1px solid black;
  border-radius: 7px;
  background-color: ${(props) => (props.primary ? '#919aa1' : '#343a40')};
  color: ${(props) => (props.primary ? '#343a40' : '#919aa1')};
  display: flex;
  flex-direction: column;
`

export const CartItemStyle = styled.div`
  width: 90%;
  background-color: white;
  color: ${(props) => (props.primary ? '#919aa1' : '#343a40')};
  margin: 2rem;
  justify-content: space-around;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 1rem;
`

export const PageHeading = styled.h1`
  margin: 45px auto;
  text-align: center;
  font-size: 4rem;
`
export const CartDeleteButtonStyle = styled.button`
  background-color: whitesmoke;
  cursor: pointer;
  border: 1px solid grey;
  color: black;
  overflow: hidden;
  padding: 1rem;
  width: 10%;
  transition: all 1s;
  &:hover {
    background-color: orange;
    color: black;
    border: 1px solid black;
  }
`

export const CartInfoStyle = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  h3 {
    font-weight: bolder;
  }
  flex-direction: column;
  h4 {
    font-weight: 100;
  }
`
