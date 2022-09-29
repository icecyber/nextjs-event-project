import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import ErrorAlert from '../components/error-alert'

const ErrorNotFound = () => {
  return (
    <Fragment>
        <ErrorAlert>
         <p>Error 404 Not Found</p>
        </ErrorAlert>
    </Fragment>
  )
}

export default ErrorNotFound