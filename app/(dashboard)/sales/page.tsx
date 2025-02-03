import { Button } from '@/app/_components/ui/button';
import { PlusIcon } from 'lucide-react';



const Sales = () => {
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
                {/* Import table*/}
            </div>
        </> 
    );
}
 
export default Sales;