import { Menu }from 'antd'; 
import {UserAddOutlined, ProductOutlined, InboxOutlined,ShoppingCartOutlined,
    UserSwitchOutlined,FileProtectOutlined,BarChartOutlined } from '@ant-design/icons';

const MenuList = () => {
    return <Menu theme='dark'>
        <Menu.Item key="clientes" icon={<UserAddOutlined/>}>
            Clientes
        </Menu.Item>
        <Menu.Item key="productos" icon={<ProductOutlined/>}>
            Productos
        </Menu.Item>
        <Menu.Item key="ventas" icon={<InboxOutlined/>}>
            Ventas
        </Menu.Item>
        <Menu.Item key="compras" icon={<ShoppingCartOutlined/>}>
            Compras
        </Menu.Item>
        <Menu.Item key="proveedores" icon={<UserSwitchOutlined/>}>
            Proveedores
        </Menu.Item>
        <Menu.Item key="examenes" icon={<FileProtectOutlined/>}>
            Examenes Clinicos
        </Menu.Item>
        <Menu.Item key="reportes" icon={<BarChartOutlined/>}>
            Reportes
        </Menu.Item>
    </Menu>;
};

export default MenuList