export const calculateColumnClass = (columnCount) => {
    switch (columnCount) {
        case 1:
            return 'has-columns-1'
        case 2:
            return 'has-columns-2'
        case 3:
            return 'has-columns-3'
        case 4:
            return 'has-columns-4'
        case 5:
            return 'has-columns-5'
        case 6:
            return 'has-columns-6'
        default:
            return 'has-columns-7'
    }
}
