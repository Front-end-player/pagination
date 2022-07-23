

/**
 * 
 * @desc load pagination
 * 
 * @param {*} props --> 
 *      props attrs
 *          
 *          pageNumber --> current page
 *          pageSize --> how much data is on a page
 *          panelNumber --> show several page numbers
 *          totalPages --> total pages
 *          onPageChange --> Callback for page number click
 * 
 * @param {*} callback    The dom of the pager has been generated, you need to customize the next thing
 * @tip 
 *      click page number 
 *          You need to call the toPage function when you click the page number
 * 
 */
function loadPagination(props, callback) {
    const {totalPages, pageNumber} = props;
    const min = getMinNumber(props);
    const max = getMaxNumber(min, totalPages, props)
    let numbers = [];
    console.log("min,max", min, max);
    
    for (let i = min; i <= max; i++) {
        
        numbers.push(`<li class="${i == pageNumber ? "page-item active" : "page-item"}"  data-index="${i}"><span class="page-link">${i}</span></li>`)
    }
    let temp = `<ul class="pagination">
                <li class="${pageNumber == 1 ? "page-item disabled" : "page-item"}" data-index="1"><span class="page-link">first page</span></li>
                <li class="${pageNumber == 1 ? "page-item disabled" : "page-item"}" id="prev">
                    <span class="page-link" aria-hidden="true">&laquo;</span></li>
                    ${numbers.join(' ')}
                    <li class="${pageNumber == totalPages ? "page-item disabled" : "page-item"}" id="next">
                            <span class="page-link" aria-hidden="true">&raquo;</span>
                   </li>
                   
                <li class="${pageNumber == totalPages ? "page-item disabled" : "page-item"}" data-index="${totalPages}"><span class="page-link">last page</span></li>
                   </ul>`;
    callback && callback(temp)
}


/**
 * computed total pages
 * @param {*} props
 */
function getPageNumber(props) {
    return Math.ceil(props.totalPages / props.pageSize);
}

/**
 * computed min number
 */
function getMinNumber(props) {
    var min = props.pageNumber - Math.floor(props.panelNumber / 2)
    if (min < 1) {
        min = 1;
    }
    return min;
}

/**
 * computed max number
 * @param {*} min
 * @param {*} totalPages
 */
function getMaxNumber(min, totalPages, props) {
    var max = min + props.panelNumber - 1;
    if (max > totalPages) {
        max = totalPages;
    }
    return max;
}

/**
 * Jump to a page
 * @param {*} target target page number
 * @param {*} props all attr
 */
function toPage(target, props) {
    if (props.pageNumber == target) {
        return;
    }
    props.onPageChange && props.onPageChange(target);
}
