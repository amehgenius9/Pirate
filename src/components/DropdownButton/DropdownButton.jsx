import Dropdown from 'react-bootstrap/Dropdown';
import './DropdownButton.Style.css';
import { Link, useNavigate } from 'react-router-dom';

const DropdownButton = () => {

  const navigate = useNavigate();

  const handleRent = () => {
    navigate('/list-for-rent')
  }
  const handleSale = () => {
    navigate('/list-for-sale')
  }
  return (
    <Dropdown className='dropdown'>
      <Dropdown.Toggle className='dropdownBtn' id="dropdown-basic">
        Get Started
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={handleRent}>List for Rent</Dropdown.Item>
        <Dropdown.Item onClick={handleSale}>List for Sale</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownButton;