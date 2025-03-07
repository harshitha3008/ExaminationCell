import { Navigate } from "react-router-dom";

export default function UnAuthorized(props: any) {
    const token = localStorage.getItem("examinationCellToken");

    return token ? props.children : <Navigate to="/signin" replace />;
}
