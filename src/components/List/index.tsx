

import React, { useState, useEffect, useRef, ChangeEvent, FormEvent } from 'react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton, RadioButtonChangeParams } from 'primereact/radiobutton';
import { InputNumber, InputNumberChangeParams } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Panel } from 'primereact/panel';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { PrimeCard } from './../PrimeCard/index';
import { PrimeTable } from './../Table/index';

function ListPrime() {
  const [activeIndex, setActiveIndex] = useState<number>()
  const [activeIndex2, setActiveIndex2] = useState<number>()
    return ( 
        <>
            <div className="new-block" style={{width: activeIndex != null? "1002px": "480px"}}>
                <Accordion activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                <AccordionTab header="Тут может располагаться разная информация">
                    <Accordion activeIndex={activeIndex2}  onTabChange={(e) => setActiveIndex2(e.index)}>
                        <AccordionTab header="Карточки товара">
                        <div className="cards_wrap">
                            <PrimeCard />
                            <PrimeCard />
                            <PrimeCard />
                            <PrimeCard />
                            <PrimeCard />
                        </div>
                        </AccordionTab >
                        <AccordionTab header="Карточки товара">
                        <div className="cards_wrap">
                            <PrimeCard />
                            <PrimeCard />
                            <PrimeCard />
                            </div>
                        </AccordionTab>
                        <AccordionTab header="Таблица данных">
                            <PrimeTable />
                        </AccordionTab>
                    </Accordion>
                </AccordionTab>
            </Accordion>
          </div>
        </>
     );
}

export default ListPrime;