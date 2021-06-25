import React from 'react';
import styled from 'styled-components';

function Product() {
    return (
        <Container>
            <Title>
                iPad Pro
            </Title>

            <Price>
                $1499
            </Price>

            <Rating>
                ⭐️⭐️⭐️⭐️⭐️
            </Rating>
                
            <Image src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202104?wid=940&hei=1112&fmt=p-jpg&qlt=95&.v=1617126621000'/>
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

const Rating = styled.div``

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