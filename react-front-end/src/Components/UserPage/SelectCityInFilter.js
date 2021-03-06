import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './selectTagsInFilter.scss';

<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>;

export default function SelectCityInFilter(props) {
  const [newColor, setNewColor] = useState('');
  const [select, setSelect] = useState(false);
  const [fontColor, setfontColor] = useState('black');
  let cities = props.state.city;
  const cityColor = (select) => {
    if (select) {
      setSelect(false);

      setfontColor('black');
    } else {
      setSelect(true);
    }
  };

  useEffect(() => {
    if (cities.includes(props.city)) {
      setNewColor('#f2a1a3');
    } else {
      setNewColor('lightgrey');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cities.length]);

  return (
    <Button
      className="filter_button"
      onClick={() => {
        props.setStartNum(0);
        props.setEndNum(3);

        props.handleAddressClick(props.city);
        cityColor(select);
      }}
      style={{
        backgroundColor: newColor,
        color: fontColor,
        paddingTop: '1px',
        paddingBottom: '1px',
        paddingLeft: '8px',
        paddingRight: '8px',
        border: '2px solid lightblue',
        fontSize: 'medium',
      }}
      variant="outlined-primary"
    >
      {props.city}
    </Button>
  );
}
