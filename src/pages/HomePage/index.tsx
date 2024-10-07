import React from 'react';
import { Card, Typography, List, Avatar, Switch } from 'antd';
import { NotificationOutlined } from '@ant-design/icons';
import avatar2 from 'assets/avatar/avatar2.jpg';
import CustomSider from './CustomSider';
import { CustomBreadcrumb } from 'layouts/CustomBreadcrumb';

const { Text } = Typography;

const notifications = [
  {
    date: '2024/09/18',
    title: '【重要】シート３記入開始のお知らせ。',
    isUnread: true,
  },
  {
    date: '2024/08/30',
    title: '2024技術スキル情報の入力サンプル',
    isUnread: false,
  },
  {
    date: '2024/08/30',
    title: '【重要】記入締切一部変更のお知らせ。',
    isUnread: true,
  },
  {
    date: '2024/08/27',
    title: '2024技術スキル情報の入力方法について3',
    isUnread: false,
  },
  {
    date: '2024/08/27',
    title: '2024技術スキル情報の入力方法について2',
    isUnread: false,
  },
  {
    date: '2024/08/27',
    title: '2024技術スキル情報の入力方法について1',
    isUnread: false,
  },
  {
    date: '2023/10/13',
    title: 'マイボードのご紹介2',
    isUnread: false,
  },
  {
    date: '2023/10/10',
    title: 'マイボードのご紹介1',
    isUnread: false,
  },
];

export default function HomePage() {
  return (
    <div style={{ display: 'flex', height: '100%', overflow: 'hidden' }}>
      <div style={{ padding: '10px',marginRight:"15px" }}>
        <CustomSider />
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <CustomBreadcrumb />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px', flex: 1, overflowY: 'auto' }}>
          <Card
            title={<div style={{ display: 'flex', alignItems: 'center' }}>
              <Text style={{ borderLeft: '4px solid #FFDA1B', paddingLeft: '8px' }}>
                お知らせ
              </Text>
            </div>}
            extra={<Text>{notifications.filter((n) => n.isUnread).length}</Text>}
            style={{ flex: '1 1 300px' }}
          >
            <List
              itemLayout="horizontal"
              pagination={{
                pageSize: 5,
                showSizeChanger: false,
                position: 'bottom',
                align: 'center',
              }}
              dataSource={notifications}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar icon={<NotificationOutlined style={{ color: 'darkcyan' }} />} style={{ backgroundColor: 'transparent' }} />}
                    title={<Text>{item.title}</Text>}
                    description={<Text type="secondary">{item.date}</Text>} />
                </List.Item>
              )}
            />
          </Card>

          <Card
            title={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text style={{ borderLeft: '4px solid #FFDA1B', paddingLeft: '8px' }}>
                ToDo
              </Text>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '8px', fontSize: '14px' }}>未完了</span>
                <Switch defaultChecked onChange={(checked) => null} />
              </div>
            </div>}
            style={{ flex: '1 1 300px' }}
          >
            <Text>ToDoはありません。</Text>
          </Card>

          <Card style={{ flex: '1 1 300px' }}>
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
              <img
                src={avatar2}
                alt="人的資本データナビ"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
}
