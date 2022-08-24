import React, { useState } from 'react';
import isWeekend from 'date-fns/isWeekend';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { TextField } from '@mui/material';
import './Calendar.css'

const Calendar = ({ handleChange, value }) => {

    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <StaticDatePicker
                    orientation="landscape"
                    openTo="day"
                    value={value}
                    shouldDisableDate={isWeekend}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </div>
    );
};

export default Calendar;