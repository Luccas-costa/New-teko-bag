'use server'

import { sql } from '@vercel/postgres'
import { SearchPedidos } from '@/types/teste-pedidos'

// Função para buscar registros na tabela pizza_shop_pedidos
export async function SearchPedidosBD({
  identificador,
  status,
  name,
}: {
  identificador?: string
  status?: string
  name?: string
}): Promise<SearchPedidos[]> {
  try {
    let query = sql`SELECT * FROM pizza_shop_pedidos`

    if (identificador) {
      query = sql`SELECT * FROM pizza_shop_pedidos WHERE identificador = ${identificador}`
    } else if (status) {
      query = sql`SELECT * FROM pizza_shop_pedidos WHERE status = ${status}`
    } else if (name) {
      query = sql`SELECT * FROM pizza_shop_pedidos WHERE name = ${name}`
    }

    const result = await query
    const pedidos: SearchPedidos[] = result.rows.map((row) => ({
      identificador: row.identificador,
      data_pedido: row.data_pedido,
      status: row.status,
      nome_cliente: row.nome_cliente,
      valor: row.valor,
    }))
    return pedidos
  } catch (error) {
    console.log(error)
    throw new Error('Erro ao buscar dados do banco de dados')
  }
}
