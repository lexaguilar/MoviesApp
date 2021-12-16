import React, { useContext, useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import { DataContext } from '../../context/DataContext';

const SearchRange = () => {

    const STEP = 1;
    const MIN = 1900;
    const MAX = 2021;

    const [values, setValues] = useState([1900, 2021]);
    const { setDates } = useContext(DataContext);


    return (
        <div className='content-search-range'>

        
        <Range
            values={values}
            step={STEP}
            min={MIN}
            max={MAX}            
            onChange={values => {
                setDates(values);
                setValues(values);
            }}
            renderTrack={({ props, children }) => (
                <div
                  onMouseDown={props.onMouseDown}
                  onTouchStart={props.onTouchStart}
                  style={{
                    ...props.style,
                    height: '36px',
                    display: 'flex',
                    width: '100%'
                  }}
                >
                  <div
                    ref={props.ref}
                    style={{
                      height: '5px',
                      width: '100%',
                      borderRadius: '4px',
                      background: getTrackBackground({
                        values,
                        colors: ['#ccc', '#548BF4', '#ccc'],
                        min: MIN,
                        max: MAX,
                      }),
                      alignSelf: 'center'
                    }}
                  >
                    {children}
                  </div>
                </div>
              )}
              renderThumb={({ index, props, isDragged }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: '42px',
                    width: '42px',
                    borderRadius: '4px',
                    backgroundColor: '#FFF',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '0px 2px 6px #AAA'
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: '-28px',
                      color: '#fff',
                      fontWeight: 'bold',
                      fontSize: '14px',
                      fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
                      padding: '4px',
                      borderRadius: '4px',
                      backgroundColor: '#548BF4'
                    }}
                  >
                    {values[index].toFixed(0)}
                  </div>
                  <div
                    style={{
                      height: '16px',
                      width: '5px',
                      backgroundColor: isDragged ? '#548BF4' : '#CCC'
                    }}
                  />
                </div>
                )}
        />
        </div>
    );
}

export default SearchRange;
