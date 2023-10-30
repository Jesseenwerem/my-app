// import React from 'react'
// import { useState } from 'react'
// function Pagination( {
//     itemsPerPage,
//     totalItems,
//     paginate,
//     prev,
//     next,
//     currentPage,
//     setCurrentPage,
// }) {
// const [selected, setSelected] = useState(1);
// const  pageNumbers = [];

// for (let i = 1; i <= Math.c(totalItems / itemsPerPage); i++){
//     pageNumbers.push(i)
// }

//    return   }
//   (
//     <div className='pagination'>
//         <button className='paginationBtns'
//             onClick={prev}
//             disabled={currentPage== 1}
//         >
//             Prev
//         </button>
//         {pageNumbers.map((number) =>
        
//         (
//             <div
//             id='paginationNums'
//             className= {
//                 (selected === number ? 
//                     "selected": "",
//                     currentPage === number ?
//                     "selected" : "")
//             }
//             key={number}
//             onClick={() => {
//                 paginate(number);
//                 setCurrentPage(number);
//                 setSelected(number);
//             }}
//             >
//                 0{number}
//             </div>
//         ))}
//         <button
//         className='paginaionBtns'
//         onClick={next}
//         disabled={currentPage=== Math.ceil(totalItems / itemsPerPage)}
//         >
//             Nxt
//         </button>
//     </div>
//   );


// export default Pagination