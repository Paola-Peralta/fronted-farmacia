import { Menu }from 'antd';
import { Link } from 'react-router-dom';
import {UserAddOutlined, ProductOutlined, InboxOutlined,ShoppingCartOutlined,
    UserSwitchOutlined,FileProtectOutlined,BarChartOutlined } from '@ant-design/icons';

const MenuList = () => {
    return <Menu theme='dark' mode='inline' className='menu-bar'>
        <Menu.Item key="clientes" icon={<UserAddOutlined/>}>
            <Link to="/clientes">Clientes</Link>
        </Menu.Item>

        <Menu.Item key="productos" icon={<ProductOutlined/>}>
           <Link to="/productos">Productos</Link>
        </Menu.Item>

        <Menu.Item key="ventas" icon={<InboxOutlined/>}>
            <Link to="/ventas">Ventas</Link>
        </Menu.Item>

        <Menu.Item key="compras" icon={<ShoppingCartOutlined/>}>
            <Link to="/compras">Compras</Link>
        </Menu.Item>

        <Menu.Item key="proveedores" icon={<UserSwitchOutlined/>}>
            <Link to="/proveedores">Proveedores</Link>
        </Menu.Item>

        <Menu.SubMenu key="examenes" icon={<FileProtectOutlined/>}
        title="Examenes">
            <Menu.Item key="Consultas">Consultas</Menu.Item>
            <Menu.Item key="Examenes">Examenes</Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="reportes" icon={<BarChartOutlined/>}>
            Reportes
        </Menu.Item>
    </Menu>;
};

export default MenuList