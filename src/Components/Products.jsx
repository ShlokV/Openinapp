import React from 'react'
import { Link } from 'react-router-dom'

function Products() {
    return (
        <div>
            This is Product Page{' '}
            <Link to="/" className="underline">
                <br /> Go to Dashboard Page
            </Link>
        </div>
    )
}

export default Products
