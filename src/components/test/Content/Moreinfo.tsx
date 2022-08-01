import Selector from "../Select/Select";
import "./index.scss"
import InfoRow from './InfoRow';
import File from './../File/File';
import { BsFileEarmarkPlus } from "react-icons/bs";
import { ChangeEvent, useEffect, useState } from "react";

interface selectType {
    value: number | string
    label: string
}

interface MoreInfoPropType {
    id: number
    status: selectType
    date?: Date,
    menadger?: string
    sender?: string
    typeContainer?: string
    totalVolume?: string | number
    height?: string | number
    desc?: string
    linkOrder?: string
    delivery?: string
    weight?: string | number
    width?: string | number
    tmc?: string
    locationPort?: string
    file?: number
    length?: string | number
    numberAct?: string
    numberJD?: number
    frahEdin?: string
}

function MoreInfo({
    id,
    status,
    date,
    menadger,
    sender,
    typeContainer,
    totalVolume,
    height,
    desc,
    linkOrder,
    delivery,
    weight,
    width,
    tmc,
    locationPort,
    file,
    length,
    numberAct,
    numberJD,
    frahEdin,
}: MoreInfoPropType) {

    const [ form ,setForm ] = useState<{status: selectType}>({
        status: {
            value: 1,
            label: "Статус"
        }
    })
    const hundleStatus = (param: any) => {
        setForm( state => ({ ...state, status: param } ))
    }

    useEffect(() => {
        setForm({
            status: status
        })
    }, [])

    return ( 
        <div className={"more"}>
            <div className="more_container">
                <div className="more-elem">
                    <p className="elem_title">
                        Статус
                    </p>
                    <div className="elem_content">
                        <Selector setValue={hundleStatus} value={form.status}/>
                    </div>
                </div>
                <InfoRow title={"Дата поступления груза в порт"} content={date?.toLocaleDateString()} />
                <InfoRow title={"Менеджер"} content={menadger}/>
                <InfoRow title={"Менеджер"} content={sender}/>
                <InfoRow title={"Менеджер"} content={"Иванов Иван Иванович"}/>
                <InfoRow title={"Менеджер"} content={"Иванов Иван Иванович"}/>
                <InfoRow title={"Менеджер"} content={"Иванов Иван Иванович"}/>
                <InfoRow title={"Менеджер"} content={"Иванов Иван Иванович"}/>
                <InfoRow title={"Менеджер"} content={"Иванов Иван Иванович"}/>
                <InfoRow title={"Менеджер"} content={"Иванов Иван Иванович"}/>
                <InfoRow title={"Менеджер"} content={"Иванов Иван Иванович"}/>
                <div className="disc">
                    <p className="disc_title"> 
                        Описание груза
                    </p>
                    <p className="disc_text">
                    Следует отметить, что понимание сути ресурсосберегающих технологий обеспечивает 
                    актуальность как самодостаточных, так и внешне зависимых концептуальных решений. 
                    В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся 
                    страны третьего мира неоднозначны и будут призваны к ответу. Внезапно, базовые сценарии 
                    поведения пользователей набирают популярность среди определенных слоев населения, а значит, 
                    должны быть описаны максимально подробно. Задача организации, в особенности же выбранный 
                    нами инновационный путь, а также свежий взгляд на привычные вещи - безусловно открывает 
                    новые горизонты для новых принципов формирования материально-технической и кадровой базы.
                    </p>
                </div>
                <InfoRow title={"Менеджер"} content={"Иванов Иван Иванович"}/>
                <InfoRow title={"Менеджер"} content={"Иванов Иван Иванович"}/>
                <InfoRow title={"Менеджер"} content={"Иванов Иван Иванович"}/>
                <div className="disc">
                    <p className="disc_title"> 
                        Описание груза
                    </p>
                    <p className="disc_text">
                        <File />
                    </p>
                </div>

                <div className="disc">
                    <p className="disc_title"> 
                        Файл приемного акта
                    </p>
                    <div className="disc_text">
                        <div className="btn_wrap">
                            <input type="file" onChange={(e:ChangeEvent<HTMLInputElement> ) => {
                                console.log(e.target.files)
                            }} className="file-upload" />
                            <button className="act_btn">
                                <BsFileEarmarkPlus className="act_btn_icon" />
                                Добавить
                            </button>
                        </div>
                    </div>
                </div>
                <InfoRow title={"Номер приемного акта"} content={"21085-Т"}/>
                <div className="disc">
                    <div className="disc_text">
                        <button className="act_btn">
                            <BsFileEarmarkPlus className="act_btn_icon" />
                            Редактировать
                        </button>
                        <button className="act_btn_red">
                            Разделить груз
                        </button>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default MoreInfo;