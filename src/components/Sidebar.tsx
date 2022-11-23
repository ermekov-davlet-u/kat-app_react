import React, { useState, useRef } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Tree } from 'primereact/tree';
import { Toast } from 'primereact/toast';
import { TreeSelectionDemo } from './SidebarItem';

export const SidebarPrime = () => {
    const [visibleRight, setVisibleRight] = useState(false);
    const toast = useRef<any>(null);

    return (
        <div>
            <div >
                <Toast ref={toast} />
                <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
                    <TreeSelectionDemo />
                </Sidebar>
                <Button icon="pi pi-bars" onClick={() => setVisibleRight(true)} className="mr-2" />
            </div>
        </div>
    )
}