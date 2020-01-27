import React, { Fragment } from 'react';
import './search-error-message.styles.scss';

const SearchErrorMessage = () => {
  return(
    <Fragment>
      <h2 className='title'>Resultados da sua Busca:</h2>
      <div className='no-items-found-message'>
            Não foram encontrados resultados para a sua busca. Por favor, tente novamente!
      </div>
    </Fragment>
  )
}

export default SearchErrorMessage;