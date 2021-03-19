import React from 'react'
import { Result, Button } from 'antd'
import './404.scss'
function NotFound() {
    return (
        <div className="404-container">
            <Result
                status="404"
                title="404"
                subTitle="Xin lỗi, trang bạn đã truy cập không tồn tại."
                extra={<Button type="primary">Quay lại</Button>}
            />
        </div>
    )
}

export default NotFound
