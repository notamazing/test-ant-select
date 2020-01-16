import {Form, Input, Button, Select, Row, Popover} from 'antd';
import "../style.less";

const content = (
  <div>
    <p>Phone: (800) 555-4321</p>
    <p>Email: info@fmic.com</p>
  </div>
);


const title = <strong>Contact us</strong>;

export default () => {
  const {Option} = Select;
  return (
  <div style={{height: "500px", width:"500px", paddingTop:"50px", paddingLeft:"50px", backgroundColor: "red"}}>
    {/* <Form name="blah">
      <Form.Item name="input" rules={[{type: "number"}]}>
        <Input/>
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit">Submit</Button>
      </Form.Item>
    </Form> */}
    <Row>

    <Select defaultValue="lucy" style={{ width: 120 }}  getPopupContainer={(e) => e.parentElement}>
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
          getPopupContainer={(e) => e.parentElement}
        >
          <Button>HELP</Button>
        </Popover>
    </Row>
  </div>
)}
