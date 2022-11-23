import { InputText } from 'primereact/inputtext';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { Image } from 'primereact/image';
import React, { useState } from 'react';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { RadioButton } from 'primereact/radiobutton';
import { InputTextarea } from 'primereact/inputtextarea';

function Header() {
    const [radioValue1, setRadioValue1] = useState('');
    const [ form, setForm ] = useState({
        fullName: '',
        workPlace: '',
        website: '',
        salary: 0,
        emailForOther: false,
        email: '',
        currentProject: '',
        otherInfoHas: false,
        otherInfo: ""
    })
    function cancel() {
        setForm({
                fullName: '',
                workPlace: '',
                website: '',
                salary: 0,
                emailForOther: false,
                email: '',
                currentProject: '',
                otherInfoHas: false,
                otherInfo: ""
            })
    }

    return ( 
        <header className="header">
            <div className="header_container">
                <div className="header_split">
                    <Splitter style={{width: '100%', height: "580px"}}>
                        <SplitterPanel className="flex align-items-center justify-content-center">
                        <div>
                            <div className="card">
                                <div className="grid p-fluid">
                                    <div className="col-12 md:col-4 mb-12">
                                        <div className="p-inputgroup">
                                            <span className="p-inputgroup-addon">
                                                <i className="pi pi-user"></i>
                                            </span>
                                            <InputText placeholder="Username" value={form.fullName} onChange={(e) => {setForm({...form, fullName: e.target.value})}} />
                                        </div>
                                    </div>
                                    <div className="col-12 md:col-4 mb-12">
                                        <div className="p-inputgroup">
                                            <InputText placeholder="Место работы" value={form.workPlace} onChange={(e) => {setForm({...form, workPlace: e.target.value})}}/>
                                        </div>
                                    </div>
                                    <div className="col-12 md:col-4 mb-12">
                                        <div className="p-inputgroup">
                                            <span className="p-inputgroup-addon">www</span>
                                            <InputText placeholder="Website (Портфолио)" value={form.website} onChange={(e) => {setForm({...form, website: e.target.value})}}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid">
                                    <div className="col-12 mb-12">
                                        <div className="p-inputgroup">
                                            <InputNumber placeholder="Уровень зп." value={form.salary} onChange={(e) => {setForm({...form, salary: Number(e.value)})}}/>
                                            <span className="p-inputgroup-addon">$</span>
                                            <span className="p-inputgroup-addon">.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid p-fluid">
                                    <div className="col-12 mb-12" >
                                        <div className="p-inputgroup">
                                            <span className="p-inputgroup-addon">
                                                <Checkbox checked={form.emailForOther} onChange={() => {setForm({...form, emailForOther: !form.emailForOther})}} />
                                            </span>
                                            <InputText placeholder="Почта email" value={form.email} onChange={(e) => {setForm({...form, email: e.target.value})}}/>
                                        </div>
                                    </div>
                                    <div className="col-12 mb-12">
                                        <div className="p-inputgroup">
                                            <InputText placeholder="Название текущего пректа" value={form.currentProject} onChange={(e) => {setForm({...form, currentProject: e.target.value})}}/>
                                            <span className="p-inputgroup-addon">
                                                <RadioButton name="rb1" value="rb1" checked={radioValue1 === 'rb1'} onChange={(e) => setRadioValue1(e.value)} />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-12 mb-12">
                                        <span className="p-inputgroup-addon">
                                            <p style={{marginRight: "12px"}}>Хотите немного рассказать о себе</p>
                                            <Checkbox checked={form.otherInfoHas} onChange={() => {setForm({...form,otherInfoHas: !form.otherInfoHas})}}/>
                                        </span>
                                        <div className="p-inputgroup">
                                            <InputTextarea disabled={!form.otherInfoHas} value={form.otherInfo} rows={5} cols={30} onChange={(e) => {setForm({...form, otherInfo: e.target.value})}} />
                                        </div>
                                    </div>
                                        <div className="form_btns">
                                            <Button title='Отправить' label='Отправить'/>
                                            <Button title='Отправить' onClick={cancel} label='Сбросить' className="p-button-danger"/>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        </SplitterPanel>
                        <SplitterPanel>
                        <div className="card"  style={{marginLeft: 20}}>
                                <div className="grid p-fluid">
                                    <div className="col-12 md:col-4 mb-12">
                                        <div className="p-inputgroup">
                                            <span className="p-inputgroup-addon">
                                                <i className="pi pi-user"></i>
                                                <p style={{marginLeft: 20}}>
                                                ФИО :
                                                    {form.fullName}
                                                </p>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-12 md:col-4 mb-12">
                                        <div className="p-inputgroup">
                                            <span className="p-inputgroup-addon">
                                                <i className="pi pi-check-square"></i>
                                                <p style={{marginLeft: 20, textAlign: "left"}}>
                                                    Место работы :
                                                    {form.workPlace}
                                                </p>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-12 md:col-4 mb-12">
                                        <div className="p-inputgroup">
                                            <span className="p-inputgroup-addon">
                                            <i className="pi pi-globe"></i>
                                            <p style={{marginLeft: 20, textAlign: "left"}}>
                                                Сайт портфолио (если оно есть) :
                                                {form.website}
                                            </p></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid p-fluid">
                                    <div className="col-12 mb-12" >
                                        <div className="p-inputgroup">
                                            <span className="p-inputgroup-addon">
                                                <i className="pi pi-money-bill"></i>
                                                <p style={{marginLeft: 20, textAlign: "left"}}>
                                                    Уровень зп : 
                                                    {form.salary}
                                                </p>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-12 mb-12">
                                        <div className="p-inputgroup">
                                            <span className="p-inputgroup-addon">
                                            <i className="pi pi-envelope"></i>
                                                <p style={{marginLeft: 20, textAlign: "left"}}>
                                                    Email почта :
                                                    {form.email}
                                                </p>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-12 mb-12">
                                        <div className="p-inputgroup">
                                            <span className="p-inputgroup-addon">
                                            <i className="pi pi-envelope"></i>
                                                <p style={{marginLeft: 20, textAlign: "left"}}>
                                                    Email почта :
                                                    {form.currentProject}
                                                </p>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-12 mb-12">
                                        <div className="p-inputgroup">
                                            <p style={{marginLeft: 20, textAlign: "left"}}>
                                                Информация о себе : <br /> <br />
                                                {form.otherInfo}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SplitterPanel>
                    </Splitter>
                </div>
            </div>
        </header>
     );
}

export default Header;