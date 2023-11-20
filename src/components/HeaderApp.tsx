import { FC, ReactNode } from "react";

interface HeaderAppProperties {
    children: ReactNode;
}

const HeaderApp: FC<HeaderAppProperties> = ({children}) => {
    return <>
        <div style={{ maxWidth: "100%" }}>
            <header style={{ display: "flex" }}>
                <div style={{ display: "flex", width: "100%", padding: "27px" }}>
                    <h1>
                        <img style={{ display: "block", width: "100px", height: "59px" }} src="../../public/senac_logo.png" />
                    </h1>
                    <div style={{ display: "flex", width: "100%", justifyContent: "center", alignContent: "center" }}>
                        <p style={{ fontSize: "35px", color: "#004587" }}>Teste</p>
                    </div>
                </div>
            </header>
            <div style={{ display: "flex", padding: "0 40px", backgroundImage: "url(http://localhost:3000/slide_senac.jpg", backgroundSize: "cover", height: "200px", alignItems: "center" }}>
                <p style={{ color: "white", fontSize: "24px" }}>Senac</p>
            </div>
            <div>
                {children}
            </div>
        </div>
    </>
}

export default HeaderApp;