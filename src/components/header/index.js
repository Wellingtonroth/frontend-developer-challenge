import React from "react";
import * as S from "./styled";

const box = [
  { label: "Conheça a Linx", field: "linx" },
  { label: "Ajude o algorítimo", field: "support" },
  { label: "Seus produtos", field: "products" },
  { label: "Compartilhe", field: "share" }
];

function Header() {
	return (
		<S.Section>
			<S.Title>uma seleção de produtos</S.Title>
			<S.SubTitle>especial para você</S.SubTitle>
			<S.Text>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</S.Text>
			<S.Content>
				{box.map((it, i) => (
					<S.Box key={i}>
						{it.label}
					</S.Box>
				))}
			</S.Content>
		</S.Section>
	)
}

export default Header;