import { List, Avatar } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const Demo = () => {
  const data = [
    {
      title: "Title 1",
    },
    {
      title: "Title 2",
    },
    {
      title: "Title 3",
    },
    {
      title: "Title 4",
    },
    {
      title: "Title 5",
    },
    {
      title: "Title 6",
    },
  ];

  return (
    <div style={{ margin: "0 auto", width: "500px", display: "block" }}>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={<a href="https://ant.design">{item.title}
                <DeleteOutlined 
                style={{float: 'right'}}
                />
              </a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default Demo;
