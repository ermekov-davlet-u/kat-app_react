import React, { ChangeEvent, useState } from 'react';
import { useEffect } from 'react';
import classes from "./Service.module.css"
import { useRef } from 'react';



function Service() {

    const [ text, setText ] = useState({
        text: "",
        search: true
    })
    const [ students, setStudents ] = useState<any[]>([])

    const hundleText = (e: ChangeEvent<HTMLInputElement>) => {
        setText({
            text: e.target.value,
            search: true
        })
    }


    useEffect(() => {
        const getStuds = async (param: string) => {
            const res = await fetch("http://localhost:3009/regis/searchStudentList", {
                method: "post",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({
                    s_fio_document: param
                })
            }).then(res => res.json()) 
            setStudents(res.DocumentRegStudentList)
        }
        if(text.search)getStuds(text.text)
    }, [text])

    return ( 
        <div className={classes.main_wrap} onClick={() => {
            setStudents([])
        }}>
            <div className={classes.search}>
                <input type="text" value={text.text} onInput={hundleText} className={classes.search_inp} />
                    <div className={classes.list}>
                        {
                            students.map( item => {
                                return <div onClick={async() => {
                                    await setText({
                                        text: item.s_fio,
                                        search: false
                                    })
                                    }} className={classes.list_item}>
                                        <div className={classes.fio}>
                                            {
                                                item.s_fio
                                            }
                                        </div>
                                        <div className={classes.faculty}>
                                            {
                                                item.faculty
                                            }
                                        </div>
                                        <div className={classes.group}>
                                            {
                                                item.faculty
                                            }
                                        </div>
                                    </div> 
                            })
                        }
                </div>
            </div>
        </div>
     );
}

export default Service;