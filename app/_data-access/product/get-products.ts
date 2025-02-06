import "server-only"

import { db } from '@/app/_lib/prisma';
import { Product } from "@prisma/client"
import { unstable_cache } from "next/cache";
import { cache } from "react";

export const getProducts = async (): Promise<Product[]> => {
    return db.product.findMany({});
}


//o cache do next nao gera cache ele memoiza o resultado de uma função e revalida a cada 5 segundos
export const cachedGetProducts = unstable_cache(getProducts, ["get-products"], {
    revalidate: 5
});

//o cache do react nao gera cache ele memoiza o resultado de uma função ou
//  seja quando eu tenho uma função que eu chamo várias vezes e não quero chamar ela várias vezes, apenas uma vez eu chamos essa função cache do react
export const cachedGetProductsMemo = cache(getProducts)