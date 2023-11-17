
 -- LOGIN CLIENTE

select   nm_nome nome ,
                            ds_email   email ,
                            ds_senha  senha 
                    from    TB_CADASTRO_CLIENTE
                    WHERE ds_email = 'adm@adm.com' and
                          ds_senha = '123' ;





------------------------------------------------------------

-------------------------------------------------------------------

-- CADASTRO DE CLIENTE

INSERT INTO TB_CADASTRO_CLIENTE (NM_NOME,DS_EMAIL,DS_SENHA) 
    VALUES           (?, ?, ?)


-----------------------------------------------------------------


------------------------------------------------------
---   Login do ADM

select   nm_nome nome     ,
                            ds_email   email ,
                            ds_senha  senha 
                    from    TB_ADMIN
                    WHERE ds_email = ? and
                          ds_senha = ?

------------------------------------------------------

------------------------------------------------------

---- Cadastro Produto

insert into tb_produto (nm_produto,id_categoria,vl_preco_venda,qtd_estoque,ds_imagem)
        values (?, ?,? ,? ,?) ;

-------------------------------------------------------
--------------------------------------------------------

------ Buscar Por Produto

select id_produto,
    nm_produto  nome ,
    vl_preco_venda preco,
    id_categoria  categoria,
    qtd_estoque   quantidade  
    from tb_produto
    order by id_categoria

---------------------------------------------------------------
---------------------------------------------------------------

--------- Buscar Por Categoria 

select
    id_produto id_produto ,
    nm_produto nome , 
	id_categoria categoria,
     vl_preco_venda preco,
     qtd_estoque quantidade
     from tb_produto where id_categoria = ?
     
----------------------------------------------------------------
----------------------------------------------------------------

---------- Alterar Informações Do Produto 

update tb_produto 
     set   nm_produto   = ? ,
           id_categoria = ? ,
        vl_preco_venda  = ? ,
           qtd_estoque  = ? ,
           ds_imagem    = ?
     where id_produto   = ?

------------------------------------------------------------------
------------------------------------------------------------------

----------- Deletar Produto 

delete from tb_produto
      where id_produto = ?
