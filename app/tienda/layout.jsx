import Link from 'next/link';

export default function TiendaLayout( {children} ) {
    return (
        <>
            <nav>
                <h3>Seccion Tienda</h3>
                <h4>Categorias</h4>
                <ul>
                    <li>
                        <Link href='/tienda/categorias/computadoras'>Computadores</Link>
                    </li>
                    <li>
                        <Link href='/tienda/categorias/celulares'>Celulares</Link>
                    </li>
                </ul>
            </nav>
            {children}
        </>
    );
}