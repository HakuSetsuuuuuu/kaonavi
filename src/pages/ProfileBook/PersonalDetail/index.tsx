import React from 'react';
import { Card, Avatar, Button, Col, Row, Typography } from 'antd';
import { EditOutlined, EyeOutlined } from '@ant-design/icons';
import { List, Select } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import avatar1 from "assets/avatar/avatar1.jpg";

const { Title, Text } = Typography;

export const MemberProfile: React.FC = () => {
  return (
    <Card style={{ maxHeight: 719, overflowY: 'auto' }}>
      <Row gutter={16}>
        <Col span={6}>
          <Avatar
            size={128}
            src={avatar1}
          />
          <Button type="text" icon={<img src="/images/kds/Icon/star-off.svg" alt="star" />} />
        </Col>
        <Col span={18}>
          <Title level={4}>白　雪</Title>
          <Text>ハク　セツ</Text>
          <div style={{ marginTop: '16px' }}>
            <Button icon={<EditOutlined />} title="基本情報の編集" />
            <Button icon={<EyeOutlined />} title="シークレットボックス" />
          </div>
          <div style={{ marginTop: '16px' }}>
            <Text strong>所属:</Text>
            <a href="/profile_book?department_id=61">日本智明創発ソフト株式会社 {'>'} 事業統括本部 {'>'} ニアショア開発部</a>
          </div>
        </Col>
      </Row>

      <div style={{ marginTop: '24px' }}>
        <Row gutter={16}>
          <Col span={8}>
            <Text strong>氏名（漢字）:</Text>
            <p>白　雪</p>
          </Col>
          <Col span={8}>
            <Text strong>氏名（カナ）:</Text>
            <p>ハク　セツ</p>
          </Col>
          <Col span={8}>
            <Text strong>氏名（英字）:</Text>
            <p>Bai Xue</p>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Text strong>日本智明社員番号:</Text>
            <p>JX0518</p>
          </Col>
          <Col span={8}>
            <Text strong>メールアドレス:</Text>
            <p>x2-bai@zhimingsoft.com</p>
          </Col>
          <Col span={8}>
            <Text strong>所属本部:</Text>
            <p>事業統括本部</p>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Text strong>所属部室:</Text>
            <p>ニアショア開発部</p>
          </Col>
          <Col span={8}>
            <Text strong>転籍元会社:</Text>
            <p>大連智明</p>
          </Col>
          <Col span={8}>
            <Text strong>日本智明入社日:</Text>
            <p>2022/12/01</p>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Text strong>採用区分:</Text>
            <p>転籍</p>
          </Col>
          <Col span={8}>
            <Text strong>G会社としての入社日:</Text>
            <p>2019/07/01</p>
          </Col>
          <Col span={8}>
            <Text strong>勤続年数:</Text>
            <p>1年9ヵ月</p>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Text strong>生年月日:</Text>
            <p>1996/12/25</p>
          </Col>
          <Col span={8}>
            <Text strong>年齢:</Text>
            <p>27歳</p>
          </Col>
          <Col span={8}>
            <Text strong>役職:</Text>
            <p>（無し）</p>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Text strong>職階:</Text>
            <p>（無し）</p>
          </Col>
          <Col span={8}>
            <Text strong>職種:</Text>
            <p>専門職</p>
          </Col>
          <Col span={8}>
            <Text strong>性別:</Text>
            <p>女性</p>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Text strong>会社携帯:</Text>
            <p>090-3545-3887</p>
          </Col>
        </Row>
      </div>
    </Card>
  );
};


const languageSkillsData = [
  { id: '1', title: '日本語（話す）', value: '★★', options: ['(指定なし)', '★', '★★', '★★★', '★★★★', '★★★★★'] },
  { id: '2', title: '英語（話す）', value: '★★', options: ['(指定なし)', '★', '★★', '★★★', '★★★★', '★★★★★'] },
  { id: '3', title: '中国語（話す）', value: '★★★★★', options: ['(指定なし)', '★', '★★', '★★★', '★★★★', '★★★★★'] },
  // 可以继续添加其他语言
];

export const LanguageSkillsRecord: React.FC = () => {
  return (
    <Card className="data-record-wrapper">
      <List>
        <List.Item>
          <Button
            icon={<DeleteOutlined />}
            className="record-delete-link"
            style={{ marginBottom: 16 }}
          />
        </List.Item>
        {languageSkillsData.map((item) => (
          <List.Item key={item.id} className="row-cells">
            <List.Item.Meta
              title={
                <div className="title-wrapper">
                  <Text strong>{item.title}</Text>
                </div>
              }
              description={
                <div className="cell-inner clearfix">
                  <span className="pb-data css-word-break">{item.value}</span>
                  <Select defaultValue={item.value} style={{ width: 120 }}>
                    {item.options.map((option) => (
                      <Select.Option key={option} value={option}>
                        {option}
                      </Select.Option>
                    ))}
                  </Select>
                </div>
              }
            />
          </List.Item>
        ))}
      </List>
    </Card>
  );
};
