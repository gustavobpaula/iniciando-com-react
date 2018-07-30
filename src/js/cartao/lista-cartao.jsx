import React from 'react';
import Cartao from './cartao';

class ListaCartao extends React.Component {
	render() {

		let noticias = [
			{ titulo: 'Título 1', descricao: 'Descrição 1', detalhe: 'Detalhe 1', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste' },
			{ titulo: 'Título 2', descricao: 'Descrição 2', detalhe: 'Detalhe 2', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste' },
			{ titulo: 'Título 3', descricao: 'Descrição 3', detalhe: 'Detalhe 3', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste' },
			{ titulo: 'Título 4', descricao: 'Descrição 4', detalhe: 'Detalhe 4', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste' },
			{ titulo: 'Título 5', descricao: 'Descrição 5', detalhe: 'Detalhe 5', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste' },
			{ titulo: 'Título 6', descricao: 'Descrição 6', detalhe: 'Detalhe 6', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste' },
			{ titulo: 'Título 7', descricao: 'Descrição 7', detalhe: 'Detalhe 7', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste' }
		];

		let aux = [],
			novaLista = []

		for (let k = 0; k < noticias.length; k++) {
			aux.push(noticias[k]);
			if(aux.length === this.props.qtdLinha) {
				novaLista.push(aux);
				aux = [];
			}else if(k === noticias.length -1) {
				novaLista.push(aux);
			}
		}

		const tamanhoCol = `col m${this.props.tamanhoCol}`;

		let ListaCartoes = (grupo) => {
			return grupo.map((item, index)=>{
				return (
					<div key={index} className={tamanhoCol}>
						<Cartao dados={item} />
					</div>
				);
			});
		}

		let linha = novaLista.map((grupo, index) =>{
			return (
				<div key={index} className= 'row'>
					{ListaCartoes(grupo)}
				</div>
			);
		});

		console.log(novaLista);

		return (
			<div>
				{linha}
			</div>
		);
	}
}

export default ListaCartao;


