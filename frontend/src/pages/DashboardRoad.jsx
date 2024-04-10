import Dashboard from "../components/Dashboard"
export default function DashboardFood() {
    return <div>
        <Dashboard getapi={"http://localhost:3000/roadissue"} />
    </div>
}