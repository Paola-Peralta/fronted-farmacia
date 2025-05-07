import { Layout } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import MenuList from "./Components/Menu";
 import HeaderBar from "./Components/HeaderBar"

 import Clientes from "./Pages/ClientePage";
 import Compras from "./Pages/ComprasPage";
 import Ventas from "./Pages/VentasPage";
 import Productos from "./Pages/ProductoPage";
 import Proveedores from "./Pages/ProveedoresPage";

 const { Sider, Header, Content } = Layout;

function App() {

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
          <Header className="header-top">
            <HeaderBar />
          </Header>
          <Layout>
            <Sider width={190}>
              <MenuList />
            </Sider>

            <Layout>
              <Content className="main-content">
                <Routes>
                  <Route path="/clientes" element={<Clientes />} />
                  <Route path="/compras" element={<Compras />} />
                  <Route path="/ventas" element={<Ventas />} />
                  <Route path="/proveedores" element={<Proveedores />} />
                  <Route path="/productos" element={<Productos />} />
                </Routes>
              </Content>
            </Layout>
          </Layout>
      </Layout>
    </Router>
    
  )
}

export default App
