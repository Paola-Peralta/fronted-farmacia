import { Layout } from 'antd';
 import MenuList from "./Components/Menu";
 import HeaderBar from "./Components/HeaderBar"

 const { Sider, Header } = Layout;

function App() {

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout>
        <Header className="header-top">
          <HeaderBar />
        </Header>
        <Layout>
          <Sider width={222}>
            <MenuList />
          </Sider>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default App
