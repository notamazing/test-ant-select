import {Form, Input, Button, Select, Row, Popover} from 'antd';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const content = (
  <div>
    <p>Phone: (800) 888-8888</p>
    <p>Email: email@email.com</p>
  </div>
);


const title = <strong>Contact us</strong>;

export default () => {
  const {Option} = Select;
  return (
  <div style={{height: "500px", width:"500px", paddingTop:"50px", paddingLeft:"50px", backgroundColor: "red"}}>
    <Row>

    <Select defaultValue="lucy" style={{ width: 120 }}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>

    <Popover
          placement="bottom"
          title={title}
          content={content}
          trigger="click"
        >
          <Button>HELP</Button>
        </Popover>
    </Row>
  </div>
)}
