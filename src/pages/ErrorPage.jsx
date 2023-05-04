import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <div id="error-page" className="flex flex-col items-center justify-center h-screen">
            <img className="w-1/5" src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg" alt="" />
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error}</i>
            </p>
        </div>
    );
}