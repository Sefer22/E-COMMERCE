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
                <div>
                  <img src={product.image} width={50} height={50} />
                  <p>{product.title}</p>
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
