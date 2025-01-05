/** @jsx jsx */
import { ElementType } from 'react';
import { jsx } from '@emotion/react';
export type ListPosition = 'bottom-left' | 'bottom-right';
type Props<I> = {
    active: boolean;
    items: I[];
    itemProps: Record<string, unknown>;
    itemComponent: ElementType<I>;
    onItemClick: (item: I, index: number) => void;
    testId: string;
};
declare const List: ({ active, items, itemProps, itemComponent, onItemClick, testId, }: Props<any>) => jsx.JSX.Element;
export default List;
