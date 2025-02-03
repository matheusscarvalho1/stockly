import { Button } from '@/app/_components/ui/button';
import { db } from '../../_lib/prisma'
import { PlusIcon } from 'lucide-react';
import { productTableColumns } from './_components/table-columns';
import { DataTable } from '@/app/_components/ui/data-table';


const Sales = () => {
    const products = await db.product.findMany();
    return (
        <>
            <div className="w-full space-y-8 p-8">
                <div className="flex w-full items-center justify-between">
                    <div className="space-y-1">
                        <span className="text-xs font-semibold text-slate-500">Gestão de Produtos</span>
                        <h2 className="text-xl font-semibold">Vendas</h2>
                    </div>
                    <div>
                        <Button className="gap-2">
                            <PlusIcon size={20} />
                            Nova venda
                        </Button>
                    </div>   
                </div>
                {/* <DataTable columns={productTableColumns} data={products} /> */}
            </div>
        </> 
    );
}
 
export default Sales;