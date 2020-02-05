import React from "react";
import * as S from "./styled";

function Share() {
	return (
		<S.Section>
			<S.Title>Compartilhe a novidade</S.Title>
			<S.Text>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</S.Text>
			<S.Box>
				<S.Type>
					Nome do seu amigo:
					<S.Input 
						type="text" 
						name="name"
					/>
				</S.Type>
				<S.Type>
					E-mail:
					<S.Input 
						type="email" 
						name="emailaddress"
					/>
				</S.Type>
			</S.Box>
			<S.Send>
				<S.Button>Enviar agora</S.Button>
			</S.Send>
		</S.Section>
	)
}

export default Share;