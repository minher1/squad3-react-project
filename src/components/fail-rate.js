import { Card } from "react-bootstrap";

function FailRate({ deploymentsCount, recoveryCount }) {

    const failRate = deploymentsCount > 0 ? (recoveryCount / deploymentsCount * 100).toFixed(1) : 0
    
    return (
        <Card body className="mt-5 bg-light">
            <h1 className="diplay-4">Change Fail Rate</h1>
            <p>Change Fail Rate: {failRate}%</p>
        </Card>
    );
}

export default FailRate;