import Select from 'react-select'
import React, { Component } from 'react'

interface SelectPropType {
  title?: string 
  setValue: (param: any) => void;
  value?: any
}

function Selector({title, setValue, value}: SelectPropType) {

    const customStyles = {
        option: (provided: any, state: any) => ({
          margin: 0,
          ...provided,
          color: '#2A2E37',
          cursor: 'pointer',
          backgroundColor: state.isSelected ? '#E3E6EB;' : 'white',
          padding: 20,
          maxWidth: 240,
          fontSize: 14
          
        }),
        control: () => ({
          width: 240,
          display: "flex",
          backgroundColor: "white",
          marginTop: 0,
          fontSize: 14,
          cursor: "pointer",
        }),
        singleValue: (provided: any, state: any) => {
          const opacity = state.isDisabled ? 0.5 : 1;
          const transition = 'opacity 300ms';
      
          return { ...provided, opacity, transition };
        }
      }

    return ( 
        <div style={{ maxWidth: 240, background: "#FFFFFF", border: "1px solid #EEEEEE", borderRadius: "8px", padding: 12}}>
        { title? <p style={{ color: '#828282', fontSize: 12, textAlign: 'left', display: "flex", alignItems: 'center' }}> Порт назначения <div style={{ marginLeft: 8, width: "16px", height: "14px", borderRadius: "50%", border: "1px solid #E0E0E0", color: "#CECECE", textAlign: "center", paddingTop: "2px" }}>?</div> </p> : ""}
        <Select
            styles={customStyles}
            placeholder="Новый"
            onChange={setValue}
            value={value}
            options={[
                {
                    value: 'Погружен',
                    label: 'Погружен'
                },
                {
                    value: 'Прибыл',
                    label: 'Прибыл'
                },
                {
                    value: 'Назначен ответственный менеджер',
                    label: 'Назначен ответственный менеджер'
                },
                {
                    value: 'Новый',
                    label: 'Новый'
                },
                {
                  value: 'Новый',
                  label: 'Новый'
              },
              {
                value: 'Новый',
                label: 'Новый'
            },
            {
              value: 'Новый',
              label: 'Новый'
          }
            ]}
            />
        </div>
     );
}

export default Selector;