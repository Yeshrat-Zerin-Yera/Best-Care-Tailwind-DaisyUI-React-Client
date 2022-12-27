import { DayPicker } from 'react-day-picker';
import AppointmentBannerImg from '../../../assets/images/banner.jpg';
import 'react-day-picker/dist/style.css';
import './AppointmentBanner.css';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
    return (
        <div className="hero my-6">
            <div className="hero-content flex-col lg:flex-row-reverse gap-12 max-w-[1363px] lg:py-24">
                {/* Appointment Banner Image */}
                <img src={AppointmentBannerImg} alt='' className="lg:w-1/2 rounded-lg shadow-2xl mb-6" />
                {/* Appointment Banner Chalender */}
                <div className='w-full flex justify-center items-center py-6'>
                    <DayPicker
                        mode='single'
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        className='shadow-2xl p-6 rounded-lg'
                    ></DayPicker>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;