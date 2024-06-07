import React from 'react'
import Navbar from './Navbar'

const Addbook = () => {
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label form-label">Book Titile</label>
                                <input type="text" className="input form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label form-label">Category</label>
                                <select name="" id="" className="form-control">
                                    <option value="">AA</option>
                                    <option value="">BB</option>
                                    <option value="">CC</option>
                                    <option value="">BB</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label form-label">Publisher Year</label>
                                <input type="number" className="input form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label form-label">Author Name</label>
                                <input type="text" className="input form-control" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="label form-label">Book Discription</label>
                                <textarea name="" id="" className="form-control"></textarea>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label form-label">Distributor</label>
                                <input type="text" className="input form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label form-label">Publisher Name</label>
                                <input type="text" className="input form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label form-label">Price</label>
                                <input type="number" className="input form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label form-label">Edition</label>
                                <input type="number" className="input form-control" />
                                </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                               <button className="btn btn-success">ADD</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addbook