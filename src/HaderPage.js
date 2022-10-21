import { DownloadOutlined } from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
import { Button } from "antd";

function HaderPage() {
    const history = useHistory();
    return (
        <div id="header-area">
            <Link to="/">
                <img src="/images/icons/logo.png" />
            </Link>
            <Button
                size="large"
                onClick={function () {
                    history.push("/upload");
                }}
                icon={<DownloadOutlined />}
            >
                상품 업로드
            </Button>
        </div>
    );
}

export default HaderPage;
