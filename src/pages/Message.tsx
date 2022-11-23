

import React, { useState } from 'react';
import { Button } from 'primereact/button';
import Header from './../components/Header/index';
import { ConfirmModal } from './../components/OverLay/index';
import { MyConfirmPopup } from './../components/Dialog/index';
import SliderPrime from './../components/Slider/index';
import { SidebarPrime } from './../components/Sidebar';
import ListPrime from './../components/List/index';
import { Image } from 'primereact/image';

function Home() {

  const [ header, setHeader ] = useState<boolean>(false)
    return (
        <>
        <main className="main">
          <div className="main_sidebar">
            <SidebarPrime />
            <ConfirmModal />
            <MyConfirmPopup/>
            
          </div>
          <div className="main_content">
          {
            !header?
            <Button icon="pi pi-angle-down pi-angle-down" className="btn" style={{background: "red",padding: "4px 12px", fontSize: "12px", fontWeight: "400", position: "absolute", top: 12, right: 12}} onClick={() => {
              setHeader(!header)
            }}/>:
            <Button icon="pi pi-angle-up pi-angle-down" className="btn" style={{background: "red",padding: "4px 12px", fontSize: "12px", fontWeight: "400", position: "absolute", top: 12, right: 12}} onClick={() => {
              setHeader(!header)
            }}/>
          }
          {
            header && <Header />
          }
          
            {/* <SliderPrime /> */}
            <ListPrime />
              <Image imageClassName="primeImg" src="/img/bg.jpg" alt="Image Text" />
          </div>
        </main>
          
        </>
    );
}

export default Home;
