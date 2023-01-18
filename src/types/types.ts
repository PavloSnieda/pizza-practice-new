export interface PropsSort {
    setSort: (i: number) => void
    sortActive: number
}

export interface ItemPopup {
    id: number,
    title: string
}

export interface PopupProps {
    openPopup: boolean;
    setOpenPopup: (open: boolean) => void;
}
