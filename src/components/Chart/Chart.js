import "./Chart.css";
import ChartBar from './ChartBar';

const Chart = (props)=>{
    const dataPointValues = props.dataPoints.map(dataPoint => (parseInt(dataPoint.value)));
    const totalMax = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {
                props.dataPoints.map((dataDopint)=> (
                    <ChartBar 
                        key= {dataDopint.id || dataDopint.label}
                        value= {dataDopint.value} 
                        maxValue= {totalMax}
                        label= {dataDopint.label}
                    />
                ))
            }
        </div>
    )
}

export default Chart;