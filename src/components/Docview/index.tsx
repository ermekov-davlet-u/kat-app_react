import {
    DockviewReact,
    DockviewReadyEvent,
    IDockviewPanelProps
  } from "dockview";
      import "dockview/dist/styles/dockview.css";
  import TablePrime from './../TablePrime/index';

  const components = {
    default: (props: IDockviewPanelProps) => {
        console.log(props.api.id)
        
      return <div>
        <TablePrime/>
      </div>;
    },
    tableOne: (props: IDockviewPanelProps) => {
        return <div>
          <TablePrime/>
        </div>;
      },
    tableTwo: (props: IDockviewPanelProps) => {
    return <div>
        <TablePrime/>
    </div>;
    }
  };
  
  export default function Component() {
    const onReady = (event: DockviewReadyEvent) => {
      event.api.addPanel({
        id: "panel_1",
        component: "default"
      });
  
      event.api.addPanel({
        id: "panel_2",
        component: "tableOne"
      });

      event.api.addPanel({
        id: "panel_3",
        component: "tableTwo"
      });
    };
  
    return (
    <div className="docview">
        <DockviewReact
          className="dockview-theme-light"
          onReady={onReady}
          components={components}
        />
    </div>
    );
  }
  