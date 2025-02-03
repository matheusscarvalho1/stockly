import { Button } from '@/app/_components/ui/button';
import { PlusIcon } from 'lucide-react';
import { productTableColumns } from './_components/table-columns';
import { DataTable } from '@/app/_components/ui/data-table';
import { getProducts } from '@/app/_data-access/product/get-products';

export default async function Products() {
    const products = await getProducts();

    return (
        <div className="m-8 rounded-lg w-full space-y-8 bg-white p-8">
            <div className="flex w-full items-center justify-between">
                <div className="space-y-1">
                    <span className="text-xs font-semibold text-slate-500">Gestão de Produtos</span>
                    <h2 className="text-xl font-semibold">Produtos</h2>
                </div>
                <div>
                    <Button className="gap-2">
                        <PlusIcon size={20} />
                        Novo Produto 
                    </Button>
                </div>   
            </div>
            <DataTable 
                columns={productTableColumns} 
                data={products} 
            />
        </div>
    );
}
