
import React, { useState, useRef } from 'react';
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export const MyConfirmPopup = () => {
    const accept = () => {
        console.log("Принято");
    };
    const reject = () => {
        console.log("Отменено");
    };
    const confirm1 = (event: any) => {
        confirmPopup({
            target: event.currentTarget,
            message: 'Сохранить?',
            icon: 'pi pi-exclamation-triangle',
            accept,
            reject
        });
    };
    const confirm2 = (event: any) => {
        confirmPopup({
            target: event.currentTarget,
            message: 'Удаление?',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
            accept,
            reject
        });
    };
    return (
        <div className="popup">
            <ConfirmPopup/>
            <Button onClick={confirm1} icon="pi pi-check" className="mr-2"></Button>
            <Button onClick={confirm2} icon="pi pi-times" className="p-button-danger p-button-outlined"></Button>
        </div>
    )
}
                 