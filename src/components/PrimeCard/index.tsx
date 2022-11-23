import React from 'react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useRef } from 'react';
import { Toast } from 'primereact/toast';

export const PrimeCard = ({props}: {props?: any}) => {
    const toast = useRef<any>(null);
    const confirm1 = () => {
        confirmDialog({
            message: 'Вы открыли модальное окно подтверждения',
            header: 'Нажмите на да если подтверждаете свои действия',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: "Да",
            rejectLabel: "Отмена",
            accept: () => {
                toast.current.show({ severity: 'info', summary: 'Вы купили товар!', detail: 'Куплено', life: 1500 });
            }
            
        });
    };
    const header = (
        <img alt="Card" src="/img/img1.jpg" className='card_img' />
    );
    
    const footer = (
        <span>
            <Button label="Купить..." icon="pi pi-check" onClick={confirm1} />
        </span>
    );

    return (
        <div>
            <Toast ref={toast} />
            <Card title="Advanced Card" subTitle="Subtitle" className='card' style={{ width: '25em' }} footer={footer} header={header}>
                <p className="m-0" style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                    quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
            </Card>
        </div>
    )
}