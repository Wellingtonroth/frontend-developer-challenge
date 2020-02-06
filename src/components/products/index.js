import React from "react";
import * as S from "./styled";

function Products({ products }) {

  return (
    <S.Section>
      <S.Title>Sua seleção especial</S.Title>
      <S.Content>
        {products && products.map((product, index) =>
          <S.Box>
            <S.Image alt="imagem do produto" src={product.image} />
            <S.Information>
              <S.Product>{product.name}</S.Product>
              <S.Description>{product.description}</S.Description>
              <S.OldPrice>De: R${product.oldPrice},99</S.OldPrice>
              <S.NewPrice>Por: R${product.price},99</S.NewPrice>
              <S.Split>ou {product.installments.count}x de R${product.installments.value}</S.Split>
              <S.Buy>Comprar</S.Buy>
            </S.Information>
          </S.Box>
        )}
      </S.Content>
      <S.BoxMore>
        <S.More>Ainda mais produtos aqui!</S.More>
      </S.BoxMore>
    </S.Section>
  );
}

export default Products;