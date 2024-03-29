import { forwardRef, memo, useMemo } from "react"
import reactFastCompare from 'react-fast-compare'

import './grid.scss'

const Grid = (props, ref) => {
    let {
        className, style,
    } = props

    const {
        children, padding, margin, gap, columns, rows, autoColumns, autoRows,
        direction, itemsX, itemsY, contentX, contentY,
        centerContent, centerItems, w100, h100, maxWidth,
        ...rest
    } = props

    style = useMemo(() => ({
        display: 'grid',
        padding,
        margin,
        gap: gap,
        gridTemplateColumns: columns,
        gridTemplateRows: rows,
        gridAutoColumns: autoColumns,
        gridAutoRows: autoRows,
        gridAutoFlow: direction,
        justifyItems: itemsX,
        alignItems: itemsY,
        justifyContent: contentX,
        alignContent: contentY,
        // placeContent: centerContent && 'center',
        // placeItems: centerItems && 'center',
        width: w100 && '100%',
        height: h100 && '100%',
        maxWidth,
        ...style
    }), [padding, margin, gap, columns, rows, autoColumns, autoRows,
        direction, //centerContent, centerItems,
        itemsX, itemsY, contentX, contentY, w100, h100, maxWidth, style])

    className = className ? `${className} grid` : 'grid'

    return (
        <div ref={ref} {...{ ...rest, style, className }}>
            {children}
        </div>
    )
}

export default memo(forwardRef(Grid), reactFastCompare)