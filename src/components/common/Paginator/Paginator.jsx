import React, {useRef, useState} from 'react';
import classes from "./Paginator.module.css";

const Paginator = ({totalCount,itemsCount, currentPage,...props}) => {
    let pages = [];
    const [pageNumber, setPage] = useState(1);
    for (let i = 1; i <= Math.ceil(totalCount / itemsCount); i++) {
        pages.push(i);
    }
    let paginationStep = 15;
    const paginationLeftLimit = (pageNumber) => (pageNumber - 1) * paginationStep + 1;
    const paginationRightLimit = (pageNumber) => pageNumber * paginationStep;
    const nextStep = () => {
        setPage(pageNumber + 1);
    }
    const prevStep = () => {
        setPage(pageNumber -1);
    }
    let pagesElements = pages
        .filter(page => page >= paginationLeftLimit(pageNumber) && page <= paginationRightLimit(pageNumber))
        .map(page => {
        return <span onClick={() => {

            props.onChangeCurrentPage(page);
        }
        } className={currentPage === page ? classes.currentPage : ''} key={page}>{page}</span>
    })
    return (
        <div className={classes.pagination}>

            <div className={classes.paginationScroll}>{pagesElements}</div>
            <div className={classes.buttons}>
                {pageNumber < Math.ceil(totalCount / itemsCount) && <div className={classes.buttonPos}>
                    <button onClick={nextStep}> next</button>
                </div>}
                {(pageNumber <= Math.ceil(totalCount / itemsCount) && pageNumber > 1) &&
                    <div className={classes.buttonPos}>
                        <button onClick={prevStep}> prev</button>
                    </div>}
            </div>


        </div>
    );
};

export default Paginator;