import { Menu }from 'antd'; 
import {UserAddOutlined, ProductOutlined, InboxOutlined,ShoppingCartOutlined,
    UserSwitchOutlined,FileProtectOutlined,BarChartOutlined } from '@ant-design/icons';

const MenuList = () => {
    return <Menu theme='dark' mode='inline' className='menu-bar'>
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