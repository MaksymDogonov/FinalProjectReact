import './Graphics.css'
import Box from '@mui/material/Box';
import {Bar, Pie} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js';
import {useSelector} from "react-redux";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
ChartJS.register(ArcElement, Tooltip, Legend);

const Graphics = () => {
    const lessonsRating = useSelector((state) => state.lessonsRating);

    const numbers = lessonsRating.map(lesson => lesson.points);

    const countNumbers = (numbersArr) => {
        let countRange0to3 = 0;
        let countRange4to7 = 0;
        let countRange8to10 = 0;

        numbersArr.forEach((number) => {
            if (number >= 0 && number <= 3) {
                countRange0to3++;
            } else if (number >= 4 && number <= 7) {
                countRange4to7++;
            } else if (number >= 8 && number <= 10) {
                countRange8to10++;
            }
        });
        return {
            countRange0to3,
            countRange4to7,
            countRange8to10,
        };
    }
    const result = countNumbers(numbers);

    const data = {
        labels: ['0-3', '4-7', '8-10',],
        datasets: [
            {
                label: '# of Votes',
                data: [result.countRange0to3, result.countRange4to7, result.countRange8to10],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(54, 162, 235, 0.2)',

                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(54, 162, 235, 1)',

                ],
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
            title: {
                display: true,
            },
        },
    };

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const labels = [''];
    const data2 = {
        labels,
        datasets: lessonsRating.map((lesson) => ({
            label: lesson.name,
            data: [lesson.points * 10],
            backgroundColor: getRandomColor(),
        })),
    };

    return (
        <Box className='graphicsBox'>
            <div className='leftGraphic'>
                <div className='graphicsText'>Качество выполнения ДЗ</div>
                <Pie data={data}/>
            </div>
            <div className='rightGraphic'>
                <div className='graphicsText'>Рейтинг по курсу</div>
                <Bar options={options} data={data2}/>
            </div>
        </Box>
    )
}

export default Graphics;
