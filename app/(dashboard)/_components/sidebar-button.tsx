import { usePathname } from "next/navigation";
import { Button } from "@/app/_components/ui/button";
import Link from "next/link";

interface SidebarButtonProps {
    href: string;
    children: React.ReactNode;
}

const SidebarButton = ({ href, children }: SidebarButtonProps) => {
    const pathName = usePathname ();
    return ( 
        <>
            <Button variant={pathName === `${href}` ? "secondary" : "ghost"} className="justify-start gap-2" asChild>
                    <Link href={href}>
                        {children}
                    </Link>
                </Button>
        </>
     );
}
 
export default SidebarButton;