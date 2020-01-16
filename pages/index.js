import {Form, Input, Button, Select} from 'antd';
import "../style.less";

export default () => {
  const {Option} = Select;
  return (
  <div style={{height: "500px", width:"500px", paddingTop:"50px", paddingLeft:"50px"}}>
    {/* <Form name="blah">
      <Form.Item name="input" rules={[{type: "number"}]}>
        <Input/>
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit">Submit</Button>
      </Form.Item>
    </Form> */}
    <Select defaultValue="lucy" style={{ width: 120 }} getPopupContainer={(trigger) => trigger.parentNode}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
  </div>
)}
