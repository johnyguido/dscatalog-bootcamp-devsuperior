
import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/products';
import './styles.scss';

const Admin = () => (

    <div className="admin-container">

        <Navbar />

        <div className="admin-content">
            <Switch>

                <Route path="/admin/products">
                    <Products/>
                </Route>

            </Switch>


        </div>

    </div>


);

export default Admin;