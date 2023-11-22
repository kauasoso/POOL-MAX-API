import conexao from "./connection.js";



export async function Login (email , senha) {

    let comando = `select   nm_nome nome ,
                            ds_email   email ,
                            ds_senha  senha 
                    from    TB_CADASTRO_CLIENTE
                    WHERE ds_email = ? and
                          ds_senha = ? `

   let r = await conexao.query(comando , [email ,senha])
   console.log(r[0])
   return r[0];
    
}



export  async function Buscar () {

let comando = `select *
    from TB_CADASTRO_CLIENTE`


    let r = await conexao.query(comando)

    return r;
}


export async function Cadastrar(pessoa) {

    let comando = `INSERT INTO TB_CADASTRO_CLIENTE (NM_NOME,DS_EMAIL,DS_SENHA) 
    VALUES           (?, ?, ?)`

    let r = await conexao.query(comando , [pessoa.nome , pessoa.email , pessoa.senha])

    pessoa.id = r.insertId;
    return pessoa;

}

export async function CadastroAdm(email, senha){

    let comando = `select   nm_nome nome     ,
                            ds_email   email ,
                            ds_senha  senha 
                    from    TB_ADMIN
                    WHERE ds_email = ? and
                          ds_senha = ?`

    let [r] = await conexao.query(comando, [email, senha]);

    return r;


}


export async function CadastrarProduto(produto) {


        let comando = `insert into tb_produto (nm_produto,id_categoria,vl_preco_venda,qtd_estoque,ds_imagem)
        values (?, ?,? ,? ,?) ;`


        let r = await conexao.query(comando , [
            produto.nome ,
            produto.categoria,
            produto.preco,
            produto.estoque, 
            produto.imagem
        ])

        return r ;

}

export async function alterarImagem(imagem,id) {

const comando = `update TB_PRODUTO
set ds_imagem = ?   
where id_produto =? ;`

const [resposta] = await conexao.query(comando,[imagem , id])
 resposta.affectedRows;
}


export async function BuscarPorProduto() {

    let comando = `select id_produto,
    nm_produto  nome ,
    vl_preco_venda preco,
    id_categoria  categoria,
    qtd_estoque   quantidade  
    from tb_produto
    order by id_categoria
`      


    const [info] = await conexao.query(comando)

    return info ;
   
   }


   export async function BuscarPorCategoria(id) {

    let comando = `select
    id_produto id_produto ,
    nm_produto nome , 
	id_categoria categoria,
     vl_preco_venda preco,
     qtd_estoque quantidade
     from tb_produto where id_categoria = ?`

     const [info] = await conexao.query(comando , [id])
   
     return info;
 
   }




   export async function AlterarProduto(item , id) {
     let comando = `update tb_produto 
     set   nm_produto   = ? ,
           id_categoria = ? ,
        vl_preco_venda  = ? ,
           qtd_estoque  = ? ,
           ds_imagem    = ?
     where id_produto   = ? ` 


    const[info] = await conexao.query(comando ,
         [item.produto    ,
          item.categoria  ,
          item.preco      ,
          item.quantidade ,
          item.imagem     ,
          id
        ])
 
     info.affectedRows ;

   }
   export async function Deletar (id) {

      let comando = `  delete from tb_produto
      where id_produto = ?`;

      const [resposta] = await conexao.query(comando , [id])

      return resposta.affectedRows ;
   }
