import { Row, Col, } from 'antd';
import { useLocation } from 'react-router-dom';

export const MessagView = () => {

    const {state} = useLocation();
    
    return (
        <>
            <Row>
                <Col span={24}>
              <p style={{fontSize:"24px", textAlign:"center"}}>Thank You for Your Support Messages</p>  
                </Col>
                <Col span={24} style={{ fontSize:"18px" , textAlign:"center"}}>
                   <p>name: {state.name.inputName}</p>
                   <p>surename: {state.surename.inputSurname}</p>
                   <p>email: {state.email.inputEmail}</p>
                   <p>message: {state.message.inputMessage}</p>
                </Col>
            </Row>
        </>
    )
}