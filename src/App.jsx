import { useState } from 'react'
import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import RouterConfig from './config/RouterConfig'
import Loading from './components/Loading'
import Drawer from '@mui/material/Drawer';
import { useSelector } from 'react-redux'


function App() {

  const { products } = useSelector((store) => store.basket);

  return (
    <div>
      <PageContainer>
        <Loading />
        <Drawer className='drawer' anchor='right' open={true}>
          {
            products && products.map((product) => {
              return (
                <div className='flex-row' style={{ padding: '20px' }}>
                  <img style={{ marginRight: '5px' }} src={product.image} width={50} height={50} />
                  <p style={{ width: '350px', marginRight: '5px' }}>{product.title}({product.count})</p>
                  <p style={{ fontWeight: 'bold', marginRight: '10px' }}>{product.price} AZN</p>
                  <button style={{ padding: '5px', borderRadius: '5px', backgroundColor: 'red', border: 'none', color: '#fff', width: '100px' }}>Delete</button>
                </div>
              )
            })
          }
        </Drawer>
        <Header />
        <RouterConfig />
      </PageContainer>
    </div>
  )
}

export default App
