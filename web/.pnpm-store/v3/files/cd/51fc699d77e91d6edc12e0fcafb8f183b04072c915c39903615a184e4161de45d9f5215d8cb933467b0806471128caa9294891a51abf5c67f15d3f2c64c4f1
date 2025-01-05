/** @jsx jsx */
import { ElementType, FC } from 'react';
type Props<I> = {
    label: string;
    items: I[];
    itemProps?: Record<string, unknown>;
    itemComponent: ElementType<I>;
    closeOnItemClick?: boolean;
    renderList?: '>1' | 'always';
    onLabelClick?: (active: boolean) => void;
    onItemClick: (item: I, index: number) => void;
};
declare const Dropdown: FC<Props<any>>;
export default Dropdown;
