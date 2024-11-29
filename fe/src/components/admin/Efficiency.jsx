import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import '../../styles/Efficiency.css';

// Đăng ký các thành phần cần thiết
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement, // Đăng ký thêm PointElement
    Title,
    Tooltip,
    Legend
);

const Efficiency = () => {
    // Dữ liệu cho biểu đồ
    const contactData = {
        labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6'],
        datasets: [
            {
                label: 'Số người liên hệ',
                data: [15, 20, 30, 25, 40, 35],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const revenueData = {
        labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6'],
        datasets: [
            {
                label: 'Doanh thu (triệu VND)',
                data: [100, 150, 200, 170, 250, 300],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="efficiency-container">
            <h2>Efficiency</h2>
            <div className="chart-container">
                <h3>Số người đã liên hệ đặt lịch với bác sĩ</h3>
                <Bar data={contactData} options={options} />

                <h3>Doanh thu hàng tháng</h3>
                <Line data={revenueData} options={options} />
            </div>
        </div>
    );
}

export default Efficiency;
