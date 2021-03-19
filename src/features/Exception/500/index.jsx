import React from 'react'
import { Result, Button } from 'antd'
function ServerError() {
    return (
        <div className="500-container">
            <Result
                status="500"
                title="500"
                subTitle="SXin lỗi, có lỗi xảy ra."
                extra={<Button type="primary">Quay lại</Button>}
            />
        </div>
    )
}

export default ServerError
