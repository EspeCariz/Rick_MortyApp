import styled from 'styled-components';

const PaginacionContainer = styled.div`

    
        a {
            color: white; text-decoration: none;
        }
        @media (max-width: 768px) {
            .pagination {font-size: 12px}

            .next,
            .prev {display: none}
        }
        @media (max-width: 768px) {
            .pagination {font-size: 14px}
        }

`;

export default PaginacionContainer;

