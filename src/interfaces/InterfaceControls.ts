export interface InterfaceControls {
    done: (id: string) => void,
    down: (id: string) => void,
    up: (id: string) => void,
    remove: (id: string) => void,
    sortDate: () => void,
    sortAuthor: () => void,
}

export default InterfaceControls;
