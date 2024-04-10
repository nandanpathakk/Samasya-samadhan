import Dashboard from "../components/Dashboard"
export default function DashboardClean(){
    return <div>
        <Dashboard getapi={"http://localhost:3000/cleanissue"} />        
    </div>
}