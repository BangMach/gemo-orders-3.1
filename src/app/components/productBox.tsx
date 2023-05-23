"use client"

import Button from "./button"
import { CartContext } from "./cartContext"
import CartIcon from "./icons/CartIcons"
import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"
import { useContext } from "react"

const ProductWrapper = styled.div``
const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 100%;
    max-height: 80px;
  }
`

const Title = styled(Link)`
  font-weight: normal;
  font-size: 0.9rem;
  color: inherit;
  text-decoration: none;
  margin: 0;
`

const ProductInfoBox = styled.div`
  margin-top: 5px;
`

const PriceRow = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 5px;
  }
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
`

const Price = styled.div`
  font-size: 1rem;
  font-weight: 400;
  text-align: right;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    font-weight: 600;
    text-align: left;
  }
`



export default function ProductBox({ _id, title, description, price, images }) {
  //const { addProduct } = useContext(CartContext)
  const url = "/" + description + "/" + _id
  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <div>
          <img
            className="coffeeImg"
            alt="coffee"
            height={60}
            width={60}
            src={images}
          />
        </div>
      </WhiteBox>
      <ProductInfoBox>
        <Title href={url}>{title}</Title>
        <PriceRow>
          <Price>${price}</Price>
          <Button
            block
            primary
            outline
            //onClick={() => <ProductBox key={product._id} {...product} />}
          >
            Add to cart
          </Button>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  )
}
