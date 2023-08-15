import * as React from 'react';
import {
    styled, darken, alpha, lighten,
} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import classNames from 'clsx';
import {
    Scheduler,
    MonthView,
    Appointments,
    Toolbar,
    DateNavigator,
    AppointmentTooltip,
    AppointmentForm,
    EditRecurrenceMenu,
    Resources,
    DragDropProvider,
} from '@devexpress/dx-react-scheduler-material-ui';
import WbSunny from '@mui/icons-material/WbSunny';
import FilterDrama from '@mui/icons-material/FilterDrama';
import Opacity from '@mui/icons-material/Opacity';
import ColorLens from '@mui/icons-material/ColorLens';
import { owners } from './tasks';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const PREFIX = 'Calendar';

const classes = {
    cell: `${PREFIX}-cell`,
    content: `${PREFIX}-content`,
    text: `${PREFIX}-text`,
    sun: `${PREFIX}-sun`,
    cloud: `${PREFIX}-cloud`,
    rain: `${PREFIX}-rain`,
    sunBack: `${PREFIX}-sunBack`,
    cloudBack: `${PREFIX}-cloudBack`,
    rainBack: `${PREFIX}-rainBack`,
    opacity: `${PREFIX}-opacity`,
    appointment: `${PREFIX}-appointment`,
    apptContent: `${PREFIX}-apptContent`,
    flexibleSpace: `${PREFIX}-flexibleSpace`,
    flexContainer: `${PREFIX}-flexContainer`,
    tooltipContent: `${PREFIX}-tooltipContent`,
    tooltipText: `${PREFIX}-tooltipText`,
    title: `${PREFIX}-title`,
    icon: `${PREFIX}-icon`,
    circle: `${PREFIX}-circle`,
    textCenter: `${PREFIX}-textCenter`,
    dateAndTitle: `${PREFIX}-dateAndTitle`,
    titleContainer: `${PREFIX}-titleContainer`,
    container: `${PREFIX}-container`,
};

const getBorder = theme => (`1px solid ${theme.palette.mode === 'light'
        ? lighten(alpha(theme.palette.divider, 1), 0.88)
        : darken(alpha(theme.palette.divider, 1), 0.68)
    }`);

const DayScaleCell = props => (
    <MonthView.DayScaleCell {...props} style={{ textAlign: 'center', fontWeight: 'bold' }} />
);

// #FOLD_BLOCK
const StyledOpacity = styled(Opacity)(() => ({
    [`&.${classes.rain}`]: {
        color: '#4FC3F7',
    },
}));
// #FOLD_BLOCK
const StyledWbSunny = styled(WbSunny)(() => ({
    [`&.${classes.sun}`]: {
        color: '#FFEE58',
    },
}));
// #FOLD_BLOCK
const StyledFilterDrama = styled(FilterDrama)(() => ({
    [`&.${classes.cloud}`]: {
        color: '#90A4AE',
    },
}));

// #FOLD_BLOCK
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${classes.cell}`]: {
        color: '#78909C!important',
        position: 'relative',
        userSelect: 'none',
        verticalAlign: 'top',
        padding: 0,
        height: 100,
        borderLeft: getBorder(theme),
        '&:first-of-type': {
            borderLeft: 'none',
        },
        '&:last-child': {
            paddingRight: 0,
        },
        'tr:last-child &': {
            borderBottom: 'none',
        },
        '&:hover': {
            backgroundColor: 'white',
        },
        '&:focus': {
            backgroundColor: alpha(theme.palette.primary.main, 0.15),
            outline: 0,
        },
    },
    [`&.${classes.sunBack}`]: {
        backgroundColor: '#FFFDE7',
    },
    [`&.${classes.cloudBack}`]: {
        backgroundColor: '#ECEFF1',
    },
    [`&.${classes.rainBack}`]: {
        backgroundColor: '#E1F5FE',
    },
    [`&.${classes.opacity}`]: {
        opacity: '0.5',
    },
}));
// #FOLD_BLOCK
const StyledDivText = styled('div')(() => ({
    [`&.${classes.text}`]: {
        padding: '0.5em',
        textAlign: 'center',
    },
}));
// #FOLD_BLOCK
const StyledDivContent = styled('div')(() => ({
    [`&.${classes.content}`]: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        position: 'absolute',
        alignItems: 'center',
    },
}));

// #FOLD_BLOCK
const StyledAppointmentsAppointment = styled(Appointments.Appointment)(
    () => ({
    [`&.${classes.appointment}`]: {
        borderRadius: '10px',
        '&:hover': {
            opacity: 0.6,
        },
    },
}));


// #FOLD_BLOCK
const StyledToolbarFlexibleSpace = styled(Toolbar.FlexibleSpace)(() => ({
    [`&.${classes.flexibleSpace}`]: {
        flex: 'none',
    },
    [`& .${classes.flexContainer}`]: {
        display: 'flex',
        alignItems: 'center',
    },
}));
// #FOLD_BLOCK
const StyledAppointmentsAppointmentContent = styled(
    Appointments.AppointmentContent
)(() => ({
    [`&.${classes.apptContent}`]: {
        whiteSpace: 'initial',
        lineHeight: 1.2,
    },

}));

const appointments = [
    {
        id: 0,
        title: 'Watercolor Landscape',
        startDate: new Date(2023, 7, 25, 9, 30),
        endDate: new Date(2023, 7, 25, 11, 30),
        ownerId: 1,
    }, 
    {
        id: 1,
        title: 'Monthly Planning',
        startDate: new Date(2023, 7, 28, 9, 30),
        endDate: new Date(2023, 7   , 28, 11, 30),
        ownerId: 1,
    }, {
        id: 2,
        title: 'Recruiting students',
        startDate: new Date(2023, 7, 9, 12, 0),
        endDate: new Date(2023, 7, 9, 13, 0),
        ownerId: 2,
    }, {
        id: 3,
        title: 'Oil Painting',
        startDate: new Date(2023, 7, 18, 14, 30),
        endDate: new Date(2023, 7, 18, 15, 30),
        ownerId: 2,
    }, {
        id: 4,
        title: 'Open Day',
        startDate: new Date(2023, 7, 20, 12, 0),
        endDate: new Date(2023, 7, 20, 13, 35),
        ownerId: 6,
    }, {
        id: 5,
        title: 'Watercolor Landscape',
        startDate: new Date(2023, 7, 6, 13, 0),
        endDate: new Date(2023, 7, 6, 14, 0),
        rRule: 'FREQ=WEEKLY;BYDAY=FR;UNTIL=20180816',
        exDate: '20180713T100000Z,20180727T100000Z',
        ownerId: 2,
    }, {
        id: 6,
        title: 'Meeting of Instructors',
        startDate: new Date(2023, 5, 28, 12, 0),
        endDate: new Date(2023, 5, 28, 12, 30),
        rRule: 'FREQ=WEEKLY;BYDAY=TH;UNTIL=20180727',
        exDate: '20180705T090000Z,20180719T090000Z',
        ownerId: 5,
    }, {
        id: 7,
        title: 'Oil Painting for Beginners',
        startDate: new Date(2023, 7, 3, 11, 0),
        endDate: new Date(2023, 7, 3, 12, 0),
        rRule: 'FREQ=WEEKLY;BYDAY=TU;UNTIL=20180801',
        exDate: '20180710T080000Z,20180724T080000Z',
        ownerId: 3,
    }, {
        id: 8,
        title: 'Watercolor Workshop',
        startDate: new Date(2023, 7, 9, 11, 0),
        endDate: new Date(2023, 7, 9, 12, 0),
        ownerId: 3,
    },
];

const resources = [{
    fieldName: 'ownerId',
    title: 'Owners',
    instances: owners,
}];

const WeatherIcon = ({ id }) => {
    // switch (id) {
    //     case 0:
    //         return <StyledOpacity className={classes.rain} fontSize="large" />;
    //     case 1:
    //         return <StyledWbSunny className={classes.sun} fontSize="large" />;
    //     case 2:
    //         return <StyledFilterDrama className={classes.cloud} fontSize="large" />;
    //     default:
    //         return null;
    // }
};

// #FOLD_BLOCK
const CellBase = React.memo(({
    startDate,
    formatDate,
    otherMonth,
    // #FOLD_BLOCK
}) => {
    const iconId = Math.abs(Math.floor(Math.sin(startDate.getDate()) * 10) % 3);
    const isFirstMonthDay = startDate.getDate() === 1;
    const formatOptions = isFirstMonthDay
        ? { day: 'numeric', month: 'long' }
        : { day: 'numeric' };
    return (
        <StyledTableCell
            tabIndex={0}
            className={classNames({
                [classes.cell]: true,
                [classes.rainBack]: iconId === 0,
                [classes.sunBack]: iconId === 1,
                [classes.cloudBack]: iconId === 2,
                [classes.opacity]: otherMonth,
            })}
        >
            <StyledDivContent className={classes.content}>
                <WeatherIcon classes={classes} id={iconId} />
            </StyledDivContent>
            <StyledDivText className={classes.text}>
                {formatDate(startDate, formatOptions)}
            </StyledDivText>
        </StyledTableCell>
    );
});

const TimeTableCell = (CellBase);

const Appointment = (({ ...restProps }) => (
    <StyledAppointmentsAppointment
        {...restProps}
        className={classes.appointment}
    />
));

const AppointmentContent = (({ ...restProps }) => (
    <StyledAppointmentsAppointmentContent {...restProps} className={classes.apptContent} />
));

const FlexibleSpace = (({ ...restProps }) => (
    <StyledToolbarFlexibleSpace {...restProps} className={classes.flexibleSpace}>
        <div className={classes.flexContainer}>
            {/* <ColorLens fontSize="large" htmlColor="#FF7043" /> */}
            <Typography variant="h5" style={{ marginLeft: '10px' }}>Knowly Calendar</Typography>
        </div>
    </StyledToolbarFlexibleSpace>
));

const fechaActual = `${new Date().getFullYear()}-${new Date().getMonth() < 10 ? `0${new Date().getMonth()}` : new Date().getMonth() }-${new Date().getDate()}`;


const Calendar = () => {
    const [data, setData] = useState(appointments); // You need to define the "appointments" array

    const commitChanges = ({ added, changed, deleted }) => {
        setData((prevData) => {
            let updatedData = [...prevData];
            if (added) {
                const startingAddedId =
                    updatedData.length > 0 ? updatedData[updatedData.length - 1].id + 1 : 0;
                updatedData = [...updatedData, { id: startingAddedId, ...added }];
            }
            if (changed) {
                updatedData = updatedData.map((appointment) =>
                    changed[appointment.id]
                        ? { ...appointment, ...changed[appointment.id] }
                        : appointment
                );
            }
            if (deleted !== undefined) {
                updatedData = updatedData.filter((appointment) => appointment.id !== deleted);
            }
            return updatedData;
        });
    };

    return (
        <>
              <nav class="flex" aria-label="Breadcrumb">
              <ol class="inline-flex items-center space-x-1 md:space-x-3">
                  <li class="inline-flex items-center">
                      <Link to='/dashboard' class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                          <svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                          </svg>
                          Area personal
                      </Link>
                  </li>
                  {/* <li>
                      <div class="flex items-center">
                          <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                          </svg>
                          <p class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">
                          Calendario
                          </p>
                      </div>
                  </li> */}
                  <li aria-current="page">
                      <div class="flex items-center">
                          <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                          </svg>
                          <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                                Calendario
                          </span>
                      </div>
                  </li>
              </ol>
          </nav>
        <Paper className="mb-16 mt-10 p-4 shadow-2xl border ">
            <Scheduler data={data}>
                <EditingState onCommitChanges={commitChanges} />
                <ViewState defaultCurrentDate={new Date()} />

                <MonthView
                    timeTableCellComponent={TimeTableCell}
                    dayScaleCellComponent={DayScaleCell}
                />
                <Appointments
                    appointmentComponent={StyledAppointmentsAppointment}
                    appointmentContentComponent={StyledAppointmentsAppointmentContent}
                />
                <Resources data={resources} />
                <Toolbar flexibleSpaceComponent={FlexibleSpace} />
                <DateNavigator />
                <EditRecurrenceMenu />
                <AppointmentTooltip
                    showCloseButton
                    showDeleteButton
                    showOpenButton
                />
                <AppointmentForm />
                <DragDropProvider />
            </Scheduler>
        </Paper>
        </>
    );
};

export default Calendar;