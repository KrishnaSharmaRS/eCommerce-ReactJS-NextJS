import LinkCustom from "../components/LinkCustom";

export default function NotFoundPage() {
    return <div style={{ minHeight: 500, marginTop: 80, padding: 200 }}>
        <h1>Invalid Request</h1>
        <h2>Error 404 - Page Not Found</h2>
        <LinkCustom to="/">Go Back to Home Page</LinkCustom>
    </div>
}