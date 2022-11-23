import React, { useState, useRef } from 'react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export const ConfirmModal = () => {
    const accept = () => {
        console.log("Подтверждение");
    }
    const reject = () => {
        console.log("Отмена");
    }
    const confirmPosition = (position: any) => {
        confirmDialog({
            message: 'Из разного уголка выходит',
            header: 'Модальное окно или попап.',
            icon: 'pi pi-info-circle',
            rejectLabel: "Отмена",
            acceptLabel: "Принять",
            position,
            accept,
            reject
        });
    };
    return (
        <div className="confirm-dialog">
            <ConfirmDialog />
            <div className="vert">
                <Button title="Кнопка вывода окна с лева" onClick={() => confirmPosition('left')} icon="pi pi-arrow-right" className="p-button-help mr-2"></Button>
                <Button title="Кнопка вывода окна с права" onClick={() => confirmPosition('right')} icon="pi pi-arrow-left" className="p-button-help"></Button>
                <Button title="Кнопка вывода окна с лева вверху" onClick={() => confirmPosition('top-left')} icon="pi pi-arrow-down-right" className="p-button-warning mr-2"></Button>
                <Button title="Кнопка вывода окна в вверзу" onClick={() => confirmPosition('top')} icon="pi pi-arrow-down" className="p-button-warning mr-2"></Button>
                <Button title="Кнопка вывода окна с права вверху" onClick={() => confirmPosition('top-right')} icon="pi pi-arrow-down-left" className="p-button-warning"></Button>
                <Button title="Кнопка вывода окна с лева снизу" onClick={() => confirmPosition('bottom-left')} icon="pi pi-arrow-up-right" className="p-button-success mr-2"></Button>
                <Button title="Кнопка вывода окна снизу" onClick={() => confirmPosition('bottom')} icon="pi pi-arrow-up" className="p-button-success mr-2"></Button>
                <Button title="Кнопка вывода окна с права снизу" onClick={() => confirmPosition('bottom-right')} icon="pi pi-arrow-up-left" className="p-button-success"></Button>
            </div>
        
        </div>
    )
}