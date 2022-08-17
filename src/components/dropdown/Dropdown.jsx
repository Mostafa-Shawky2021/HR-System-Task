import React, { useState, useRef, useEffect } from 'react'
import './dropdown.css'
const Dropdown = ({ children, dropDownSelected, options, ...selectedHandler }) => {

    const [subMenuToggle, setSubMenuToggle] = useState(false)
    const [searchItem, setSearchItem] = useState('')
    const [filterItem, setFilterItem] = useState([])
    const inputFocus = useRef(null)
    const dropDown = useRef(null)
    useEffect(() => {
        const onBodyClick = (e) => {
            if (dropDown.current.contains(e.target)) {
                return
            }
            setSubMenuToggle(false)
        }
        document.body.addEventListener('click', onBodyClick)

        return () => {
            document.body.removeEventListener('click', onBodyClick)
        }
    }, [])

    useEffect(() => {
        const filterItem = options.filter((option) => option.toLowerCase().includes(searchItem.toLowerCase()))
        setFilterItem(filterItem)
        searchItem ? setSubMenuToggle(true) : setSubMenuToggle(false)
    }, [searchItem])

    useEffect(() => {
        inputFocus.current.value = ''
        setSearchItem('')
    }, [dropDownSelected])

    const handleFilterItemDisplay = (items) => {
        if (items.length) {
            return items.map((item) => (
                <li key={item} className='submenu-item' value={item}>{item}</li>
            ))
        } else {
            return <li className='submenu-item' value="">Sorry no item to show</li>
        }
    }

    return (

        <div className='dropdown-wrapper' ref={dropDown} onClick={() => setSubMenuToggle(!subMenuToggle)}>
            <div className='dropdown' >
                <span className='selected'>{dropDownSelected && !searchItem ? dropDownSelected : !searchItem && 'Selected'}</span>
                <div
                    className='overlay-input'
                    onClick={() => inputFocus.current.focus()}></div>
                <input
                    type='text'
                    className='form-control'
                    ref={inputFocus}
                    onChange={(e) => setSearchItem(e.target.value)} />
                <i className="fa-solid fa-chevron-down icon-chevron"></i>
            </div>
            <ul
                className={`submenu list-unstyled ${subMenuToggle ? 'animate-submenu' : ''}`}
                {...selectedHandler}
            >
                {
                    !filterItem.length && !searchItem ? (children) : (handleFilterItemDisplay(filterItem))
                }
            </ul>
        </div>

    )
}

export default Dropdown