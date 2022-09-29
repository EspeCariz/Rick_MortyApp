import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import PaginacionContainer from "./index-style";



const Paginacion = ({ numeroPagina, info, updateNumeroPagina }) => {

    let pageChange = (data) => {
        updateNumeroPagina(data.selected + 1);
      };

      const [ancho, setAncho] = useState(window.innerancho);
      const updateTamaño = () => {
        setAncho(window.innerancho);
      };
      useEffect(() => {
        window.addEventListener("resize", updateTamaño);
        return () => window.removeEventListener("resize", updateTamaño);
      }, []);

    return (
        
        <PaginacionContainer className="">

                <ReactPaginate
                className="pagination justify-content-center my-4 gap-4"
                nextLabel="Next"
                previousLabel="Prev"
                previousClassName="btn btn-primary fs-5 prev"
                nextClassName="btn btn-primary fs-5 next"
                activeClassName="active"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                forcePage={numeroPagina === 1 ? 0 : numeroPagina - 1}
                marginPagesDisplayed={ancho < 576 ? 1 : 2}
                pageRangeDisplayed={ancho < 576 ? 1 : 2}
                pageCount={info?.pages}
                onPageChange={pageChange} />


            

        </PaginacionContainer>
    );
};

export default Paginacion;


