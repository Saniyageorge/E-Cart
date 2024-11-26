import React, { useEffect, useState } from 'react'
import { Badge, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { searchProduct } from '../Redux/slice/productSlice'
import { useDispatch, useSelector } from 'react-redux'

function Header({insideHome}) {
  const dispatch =useDispatch();
const[wishlistCount,setWishlistCount]=useState(0)
const[cartCount,setCartCount]=useState(0)
  const {wishlist} = useSelector(state=>state.wishListReducer)
const cart = useSelector((state)=>state.cartReducer)
  useEffect(()=>{
    setWishlistCount(wishlist.length)
    setCartCount(cart.length)
  },[wishlist,cart])

  return (
    <>
      <Navbar expand="lg" className="bg-primary">
      <Container>
        <Navbar.Brand>
            <Link to={'/'} style= {{textDecoration:"none", color:"black", fontSize:"30px"}}>
            <i class="fa-solid fa-truck-fast fa-bounce"></i> E-Cart</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {insideHome&&<Form.Control
              type="text"
              placeholder="Search"
              className="ms-5 w-25"
              onChange={e=>dispatch(searchProduct(e.target.value.toLowerCase()))}
            />}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='bt btn-outline-light'>
            <Link to={'/wishlist'} style={{color: "black", fontWeight: "bold", textDecoration: "none"}}><i class="fa-solid fa-heart text-danger">
                </i> Wishlist
<Badge bg="secondary rounded ms-2">{wishlistCount}

</Badge></Link>
            </Nav.Link>
           
            <Nav.Link className='bt btn-outline-light ms-2'>
            <Link to={'/cart'} style={{color: "black", fontWeight: "bold", textDecoration: "none"}}><i class="fa-solid fa-cart-shopping text-danger">
                </i> cart
<Badge bg="secondary rounded ms-2">{cartCount}

</Badge></Link>
            </Nav.Link>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header
