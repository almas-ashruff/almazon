import React from 'react';
import styled from 'styled-components';

function Product({ title, price, rating, image, id }) {

    return (
        <Container>
            <Title>
            </Title>
                {title}
            <Price>
                ${price}
            </Price>

            <Rating>
                {
                    Array(rating)
                    .fill()
                    .map(rating => <p>⭐️</p>)
                }
            </Rating>
                
            <Image src={image}/>
            <ActionSection>
                <AddToCartButton>
                    Add to Cart
                </AddToCartButton>
            </ActionSection>
        </Container>
    )
}

export default Product

const Container = styled.div`
    background-color: white;
    z-index: 100;
    flex: 1;
    padding: 20px;
    margin: 10px;
    max-height: 400px;
    display: flex;
    flex-direction: column;
`

const Title = styled.span``

const Price = styled.span`
    font-weight: 500;
    margin-top: 5px;
`

const Rating = styled.div`
    display: flex;
`

const AddToCartButton = styled.button`
    width: 100px;
    height: 30px;
    background-color: #f0c14b;
    border: 2px solid #a88734;
    border-radius: 2px;
`

const Image = styled.img`
    max-height: 200px;   
    object-fit: contain; 
`

const ActionSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`