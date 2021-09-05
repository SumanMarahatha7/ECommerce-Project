import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import { listProducts } from '../actions/productActions'

function HomeScreen({ history }) {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { error, loading, products, page, pages } = productList

    let keyword = history.location.search

    useEffect(() => {
        dispatch(listProducts(keyword))

    }, [dispatch, keyword])

    return (
        <div>
            {!keyword && <ProductCarousel />}

            <h1 className="mt-4 mb-2">Latest Products</h1>
            {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <>
                    <div>
                        <Row>
                            {products.map(product => (
                                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                    <Product product={product} />
                                </Col>
                            ))}
                        </Row>
                        <Paginate page={page} pages={pages} keyword={keyword} />
                    </div>
                    <div>
                        <h1 className="mt-4 mb-2">Electronics</h1>
                        <Row>
                            {products.filter(product => product.category.toLowerCase() === "electronics" )
                            .map(item => (
                                <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
                                    <Product product={item} />
                                </Col>
                            ))}
                        </Row>
                    </div>

                    <div>
                        <h1 className="mt-4 mb-2">Cameras</h1>
                        <Row>
                            {products.filter(product => product.category.toLowerCase() === "cameras" )
                            .map(item => (
                                <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
                                    <Product product={item} />
                                </Col>
                            ))}
                        </Row>
                    </div>

                    <div>
                        <h1 className="mt-4 mb-2">Laptops</h1>
                        <Row>
                            {products.filter(product => product.category.toLowerCase() === "laptops" )
                            .map(item => (
                                <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
                                    <Product product={item} />
                                </Col>
                            ))}
                        </Row>
                    </div>

                    <div>
                        <h1 className="mt-4 mb-2">Mobiles</h1>
                        <Row className="my-1">
                            {products.filter(product => product.category.toLowerCase() === "mobiles" )
                            .map(item => (
                                <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
                                    <Product product={item} />
                                </Col>
                            ))}
                        </Row>
                    </div>
                    </>
            }
        </div>
    )
}

export default HomeScreen
