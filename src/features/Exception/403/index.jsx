import React from 'react'
import { Result, Button } from 'antd'
function Forbidden() {
    return (
        <div className="403-container">
            <Result
                status="403"
                title="403"
                subTitle="Xin lỗi, bạn không được phép truy cập trang này."
                extra={<Button type="primary">Quay lại</Button>}
            />
        </div>
    )
}

export default Forbidden
